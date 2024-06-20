import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | GhostyTrade',
  defaultTitle: 'GhostyTrade',
  description:
    'Cheaper and faster than Uniswap? Discover GhostyTrade, the leading DEX on BNB Smart Chain (BSC) and Ethereum with the best farms in DeFi and a lottery for GHOSTTY.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@GhostyTrade',
    site: '@GhostyTrade',
  },
  openGraph: {
    title: '🥞 GhostyTrade - A next evolution DeFi exchange on BNB Smart Chain (BSC) and Ethereum',
    description:
      'The most popular AMM on BSC by user count! Earn GHOSTTY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by GhostyTrade), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://assets.GhostyTrade.finance/web/og/hero.jpg' }],
  },
}
