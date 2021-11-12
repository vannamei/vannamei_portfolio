import tw, { css } from 'twin.macro'
import SectionHeader from '~/components/molecules/sectionHeader'

const About = () => (
  <section id='about' css={section}>
    <SectionHeader en='about' title='自己紹介' />
    <div css={container}>
      <div css={inner}>
        <div css={imgWrapper}>
          <img
            src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=300&h=300'
            loading='lazy'
            alt='Photo by Martin Sanchez'
            css={img}
          />
        </div>
        <div css={textWrapper}>
          <h3 css={heading}>山中 俊</h3>
          <p css={[text, mb]}>
            1993年新潟県新潟市生まれ。出身は福島県喜多方市。
            <br />
            2017年に岩手大学を中退。その後DTP/Web
            デザイン系の職業訓練を経て、塾講師の傍ら独学でプログラミングを身に付ける。
            <br />
            フロントエンド全般とLaravelに興味があります。
          </p>
          <p css={text}>趣味は自作PCとオンラインゲーム。</p>
        </div>
      </div>
    </div>
  </section>
)

const section = css`
  ${tw`bg-white py-8 lg:py-12`}
`

const container = css`
  ${tw`container mx-auto px-4`}
`

const inner = css`
  ${tw`flex flex-col gap-8 md:flex-row items-center`}
`

const imgWrapper = css`
  ${tw`mx-auto md:bg-gray-100 overflow-hidden rounded-lg shadow-lg`}
`

const img = css`
  ${tw`w-full h-full object-cover object-center`}
`

const textWrapper = css`
  ${tw`md:text-left`}
`

const heading = css`
  ${tw`text-gray-800 text-xl font-bold md:text-2xl mb-4`}
`

const text = css`
  ${tw`text-gray-500 text-sm leading-7`}
`

const mb = css`
  ${tw`mb-2`}
`

export default About