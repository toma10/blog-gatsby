import { Link, graphql } from "gatsby"

import Content from "../components/Content"
import DateTime from "../components/DateTime"
import Heading from "../components/Heading"
import Page from "../components/Page"
import Pagination from "../components/Pagination"
import Paragraph from "../components/Paragraph"
import React from "react"
import StyledLink from "../components/StyledLink"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"

function Post({ post }) {
  return (
    <div>
      <DateTime dateTime={post.frontmatter.date}>
        {post.frontmatter.formattedDate}
      </DateTime>
      <Link to={post.fields.slug}>
        <Subtitle>{post.frontmatter.title}</Subtitle>
        <div className="mt-3">
          <Paragraph>{post.excerpt}</Paragraph>
        </div>
      </Link>
      <div className="mt-3">
        <StyledLink to={post.fields.slug}>Read full story</StyledLink>
      </div>
    </div>
  )
}

export default function Home({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Page title="Home">
      <Heading>
        <Title>Blog</Title>
      </Heading>
      <Content>
        <div className="grid gap-16">
          {posts.map(({ node: post }) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-20 ">
          <Pagination {...pageContext} />
        </div>
      </Content>
    </Page>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date: date(formatString: "YYYY-MM-DD")
            formattedDate: date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
