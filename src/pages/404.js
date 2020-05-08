import Content from "../components/Content"
import Heading from "../components/Heading"
import Page from "../components/Page"
import Paragraph from "../components/Paragraph"
import React from "react"
import Title from "../components/Title"

export default function NotFound() {
  return (
    <Page title="404">
      <Heading>
        <Title>404 Not Found</Title>
      </Heading>
      <Content>
        <Paragraph>It looks like you're lost...</Paragraph>
      </Content>
    </Page>
  )
}
