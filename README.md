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
#### Week 10 (03/07 - 03/13)
- Start block [`14336402`](https://etherscan.io/block/14336402) (2022/03/07 00:00:15 UTC)
- End block [`14381394`](https://etherscan.io/block/14381394) (2022/03/13 23:59:58 UTC)

```
yarn pick 14336402 14381394
Found 73 transfers
Found 15 sale transfers
Found 12 unique buyers
Initialised random generator with seed 0x2b739413631e913692fae57a53371b1c60e4e49061bd5ec680b6a77ac1fe3957
Winner: 0xBb0691B61F3348f7228652D363bfAfb0fb3000b0
✨  Done in 4.82s.
```

#### Week 9 (02/28 - 03/06)
- Start block [`14291335`](https://etherscan.io/block/14291335) (2022/02/28 00:00:00 UTC)
- End block [`14336401`](https://etherscan.io/block/14336401) (2022/03/06 23:59:59 UTC)

```
yarn pick 14291335 14336401
Found 68 transfers
Found 31 sale transfers
Found 21 unique buyers
Initialised random generator with seed 0x8ef7ab6f1be5dc1883d59f8627aff7a3868a3e248f932f5923fd15cdec69559d
Winner: 0xD4bE54fc8dA5F7eA6D2cBDA658a2EA52b0007d2A
✨  Done in 5.30s.
```

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

### Retrospective
During the 4 weeks prior to starting this incentives program, (block [`14019700`](https://etherscan.io/block/14019700) to [`14200887`](https://etherscan.io/block/14200887)) BGANs had 201 sales from 99 unique buyers. During the 4 weeks of this incentives program (block [`14200888`](https://etherscan.io/block/14200888) to [`14381394`](https://etherscan.io/block/14381394)) BGANs had 148 sales from 82 unique buyers.

A more in-depth analysis would need to be conducted that takes broader NFT market conditions into account, but only looking at these raw numbers, there is no clear indicator of a correlation between the bastard volume incentives program and the bastard sales volumes.
