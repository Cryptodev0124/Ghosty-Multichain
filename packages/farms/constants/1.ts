import { ethereumTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { SerializedFarmConfig } from '..'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0x1ac1A8FEaAEa1900C4166dEeed0C11cC10669D36',
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 2,
    lpAddress: '0x6CA298D2983aB03Aa1dA7679389D955A4eFEE15C',
    token0: ethereumTokens.weth,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 3,
    lpAddress: '0x04c8577958CcC170EB3d2CCa76F9d51bc6E42D8f',
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 4,
    lpAddress: '0x9b5699D18DFF51fc65fB8ad6F70d93287C36349f',
    token0: ethereumTokens.wbtc,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 5,
    lpAddress: '0x517F451b0A9E1b87Dc0Ae98A05Ee033C3310F046',
    token0: ethereumTokens.cake,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 6,
    lpAddress: '0x11A6713B702817DB0Aa0964D1AfEe4E641319732',
    token0: ethereumTokens.cake,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  // Keep those farms on top
  {
    pid: 30,
    lpAddress: Pool.getAddress(ethereumTokens.fuse, ethereumTokens.weth, FeeAmount.MEDIUM),
    token0: ethereumTokens.fuse,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 29,
    lpAddress: '0x392d0F0B7Fe5161Db89f2DB87d33a20682C12A2B',
    token0: ethereumTokens.weth,
    token1: ethereumTokens.ens,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 28,
    lpAddress: '0xC7F25e2FcC474816efFd9be316F2E51cCef90Ceb',
    token0: ethereumTokens.blur,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 27,
    lpAddress: Pool.getAddress(ethereumTokens.pepe, ethereumTokens.weth, FeeAmount.HIGH),
    token0: ethereumTokens.pepe,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 26,
    lpAddress: Pool.getAddress(ethereumTokens.wbeth, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.wbeth,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 25,
    lpAddress: Pool.getAddress(ethereumTokens.unshETH, ethereumTokens.usdc, FeeAmount.MEDIUM),
    token0: ethereumTokens.unshETH,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 24,
    lpAddress: '0x5145755c0535198eec1642DC0cc96225fb28263D',
    token0: ethereumTokens.weth,
    token1: ethereumTokens.wncg,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 23,
    lpAddress: '0x6E229C972d9F69c15Bdc7B07f385D2025225E72b',
    token0: ethereumTokens.mask,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 22,
    lpAddress: Pool.getAddress(ethereumTokens.axl, ethereumTokens.usdc, FeeAmount.MEDIUM),
    token0: ethereumTokens.axl,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 14,
    lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.alcx, FeeAmount.MEDIUM),
    token0: ethereumTokens.alETH,
    token1: ethereumTokens.alcx,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 15,
    lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.alETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 16,
    lpAddress: Pool.getAddress(ethereumTokens.fxs, ethereumTokens.weth, FeeAmount.MEDIUM),
    token0: ethereumTokens.fxs,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 17,
    lpAddress: Pool.getAddress(ethereumTokens.frxETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.frxETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 18,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.rpl, FeeAmount.MEDIUM),
    token0: ethereumTokens.weth,
    token1: ethereumTokens.rpl,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 19,
    lpAddress: Pool.getAddress(ethereumTokens.rETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.rETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 20,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.ankrETH, FeeAmount.LOW),
    token0: ethereumTokens.weth,
    token1: ethereumTokens.ankrETH,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 21,
    lpAddress: Pool.getAddress(ethereumTokens.cbEth, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.cbEth,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 7,
    lpAddress: '0xD9e497BD8f491fE163b42A62c296FB54CaEA74B7',
    token0: ethereumTokens.dai,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 8,
    lpAddress: '0x34b8AB3a392d54D839dcDBd5Cd1330aBB24bE167',
    token0: ethereumTokens.ldo,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 9,
    lpAddress: '0x7ca3EdB2c8fb3e657E282e67F4008d658aA161D2',
    token0: ethereumTokens.link,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 10,
    lpAddress: '0x8579630AC9c53CFEb5167f90Af90d2c0d52ED09c',
    token0: ethereumTokens.matic,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 12,
    lpAddress: '0x4F64951A6583D56004fF6310834C70d182142A07',
    token0: ethereumTokens.wstETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 13,
    lpAddress: '0x7524Fe020EDcD072EE98126b49Fa65Eb85F8C44C',
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.stg,
    feeAmount: FeeAmount.MEDIUM,
  },
])

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'GHOSTTY',
    lpAddress: '0x8452c14f610DaBd23C3da8A810aBB55E71F137d3',
    token: ethereumTokens.cake,
    quoteToken: ethereumTokens.usdc,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'GHOSTTY-ETH LP',
    lpAddress: '0x8db8B17c10E4b0d690e03ADF038d242C14AC13d8',
    token: ethereumTokens.cake,
    quoteToken: ethereumTokens.weth,
    boosted: false,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'USDC-ETH LP',
    lpAddress: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    boosted: true,
    token: ethereumTokens.usdc,
    quoteToken: ethereumTokens.weth,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'GHOSTTY-USDC LP',
    lpAddress: '0xE74F2b213511166741e23eA179Bb377097A818d7',
    token: ethereumTokens.cake,
    quoteToken: ethereumTokens.usdc,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
