import Content from "../components/Content"
import DateTime from "../components/DateTime"
import Heading from "../components/Heading"
import Page from "../components/Page"
import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Page title={post.frontmatter.title} description={post.excerpt} article>
      <Heading>
        <Title>{post.frontmatter.title}</Title>
        <div className="mt-2">
          <DateTime dateTime={post.frontmatter.date}>
            {post.frontmatter.formattedDate}
          </DateTime>
        </div>
      </Heading>
      <Content>
        <div
          className="space-y-6 markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Content>
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date: date(formatString: "YYYY-MM-DD")
        formattedDate: date(formatString: "DD MMMM, YYYY")
      }
      excerpt
    }
  }
`
