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
