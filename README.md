# bastards-volume-incentives
This repo contains simple scripts to pick a winner for the BASTARD GAN PUNKS incentive program.

## Setup
```
git clone git@github.com:rkalis/bastards-volume-incentives.git
cd bastards-volume-incentives
yarn
```

Then create a `.env` file from the included `.env.example` file and fill in your own Alchemy credentials.

### Usage
```
yarn pick <fromBlock> <toBlock>
```

### Results
#### Week 8 (02/21 - 02/27)
- Start block [`14246088`](https://etherscan.io/block/14246088) (2022/02/21 00:00:06 UTC)
- End block [`14291334`](https://etherscan.io/block/14291334) (2022/02/27 23:59:40 UTC)

```
yarn pick 14246088 14291334
Found 109 transfers
Found 42 sale transfers
Found 31 unique buyers
Initialised random generator with seed 0x3378fc06265c6a5be6888ac6350b7186e2e0f59851fe362ec480b87fcf2627e2
Winner: 0xf41FA837908c0318A9A2b739C8fb990BfD4AC8A7
✨  Done in 7.65s.
```

#### Week 7 (02/14 - 02/20)
- Start block: [`14200888`](https://etherscan.io/block/14200888) (2022/02/14 00:00:11 UTC)
- End block: [`14246087`](https://etherscan.io/block/14246087) (2022/02/20 23:59:44 UTC)

```
$ yarn pick 14200888 14246087
Found 155 transfers
Found 60 sale transfers
Found 40 unique buyers
Initialised random generator with seed 0x6cf0e54a760d85aebb5f8d4228b79d20667ce5c78a68488e88253a27551b17c6
Winner: 0x854985f1ce70C83C6F01eA5b8419FE26D2633a86
✨  Done in 7.93s.
```
