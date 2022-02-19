import { Log } from '@ethersproject/abstract-provider';
import { ethers, providers } from 'ethers';
import { getAddress } from 'ethers/lib/utils';
import random from 'random-seed';

require('dotenv').config();

const run = async (fromBlock: number, toBlock: number) => {
  const BASTARD_ADDRESS = '0x31385d3520bCED94f77AaE104b406994D8F2168C';

  const OPENSEA_ADDRESSES = [
    '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b', // Wyvern v1
    '0x7f268357A8c2552623316e2562D90e642bB538E5', // Wyern v2
  ];
  const OPENSEA_TOPICS = [ethers.utils.id('OrdersMatched(bytes32,bytes32,address,address,uint256,bytes32)')];

  const LOOKSRARE_ADDRESSES = [
    '0x59728544B08AB483533076417FbBB2fD0B17CE3a' // LooksRare Exchange
  ];
  const LOOKSRARE_TOPICS = [
    ethers.utils.id('TakerAsk(bytes32,uint256,address,address,address,address,address,uint256,uint256,uint256)'),
    ethers.utils.id('TakerBid(bytes32,uint256,address,address,address,address,address,uint256,uint256,uint256)'),
  ];

  const AGGREGATOR_ADDRESSES = [
    '0xF24629fbb477E10F2CF331c2B7452d8596B5C7a5', // Gem 1
    '0x0000000031F7382A812C64b604dA4Fc520AfeF4b', // Gem 2
    '0x0a267cF51EF038fC00E71801F5a524aec06e4f07', // Genie
  ];

  const topicToAddress = (topic: string) => getAddress(`0x${topic.slice(2 + 12 * 2)}`);
  const isOpenSeaTrade = (event: Log) => OPENSEA_ADDRESSES.includes(event.address) && OPENSEA_TOPICS.includes(event.topics[0]);
  const isLooksRareTrade = (event: Log) => LOOKSRARE_ADDRESSES.includes(event.address) && LOOKSRARE_TOPICS.includes(event.topics[0]);
  const isAggregator = (address: string) => AGGREGATOR_ADDRESSES.includes(address);

  // Initialise provider
  const provider = new providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`);

  // Get every bastard transfer in the range
  const Transfer = ethers.utils.id('Transfer(address,address,uint256)');
  const transferEvents = await provider.getLogs({
    fromBlock,
    toBlock,
    address: BASTARD_ADDRESS,
    topics: [Transfer],
  });

  console.log(`Found ${transferEvents.length} transfers`);

  // Retrieve the main transaction details for every transfer and add them to the transfer event
  const transfersWithTransactionLogs = await Promise.all(
    transferEvents.map(async (event) => ({
      ...event,
      otherLogs: (await provider.getTransactionReceipt(event.transactionHash)).logs
    })
  ));

  // Filter only the BGAN transfers that also contain OS/LR sale events in the same transaction.
  // This will catch multiple transfers in the same transaction (such as batches or aggregators)
  // This could be a vulnerability somehow, so the checks may need to be expanded in the future
  const transfersInsideTradeTransactions = transfersWithTransactionLogs.filter((event) => (
    !!event.otherLogs.find((innerEvent) => isOpenSeaTrade(innerEvent) || isLooksRareTrade(innerEvent))
  ));

  console.log(`Found ${transfersInsideTradeTransactions.length} transfers within sale transactions`);

  // Extract the "to" field from every transfer event and convert it to an address
  const buyers = transfersInsideTradeTransactions.map((event) => topicToAddress(event.topics[2]));

  // Remove duplicate buyer addresses, remove aggregator addresses and sort buyers for a deterministic order
  const uniqueSortedBuyers = buyers
    .filter((buyer, i) => buyers.findIndex((other) => other === buyer) === i)
    .filter((to) => !isAggregator(to))
    .sort();

  console.log(`Found ${uniqueSortedBuyers.length} unique buyers`);

  // Initialise random generator based on the block hash of the final block in the range
  const block = await provider.getBlock(toBlock);
  const generator = random.create(block.hash);

  console.log(`Initialised random generator with seed ${block.hash}`);

  // Pick a winner
  const winner = uniqueSortedBuyers[generator.range(uniqueSortedBuyers.length)];

  console.log(`Winner: ${winner}`);
}

run(Number.parseInt(process.argv[2], 10), Number.parseInt(process.argv[3], 10)).catch(console.error);
