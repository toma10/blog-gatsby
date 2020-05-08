import Header from "./Header"
import Layout from "./Layout"
import Main from "./Main"
import React from "react"
import SEO from "./Seo"

export default function Page({ title, description, article, children }) {
  return (
    <Layout>
      <SEO title={title} description={description} article={article} />
      <Header />
      <Main>{children}</Main>
    </Layout>
  )
}
