import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '~/components/templates/sidebar-right'
import { client } from '~/lib/microcms-client'

type Props = {
  blogContents: BlogContent[]
}

const Blog: React.FC<Props> = ({ blogContents }) => {
  return (
    <Layout>
      <div>
        <ul>
          {blogContents.map((blogContent) => (
            <li key={blogContent.id}>
              <Link href={`/blog/${blogContent.id}`}>
                <a>{blogContent.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<BlogResponseData>({ endpoint: 'blog' })
  return {
    props: {
      blogContents: data.contents,
    },
  }
}
