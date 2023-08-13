import * as React from "react"
import Layout from "../components/Layout"
import About from "../components/about"

const IndexPage = () => {
  return (
    <Layout>

    <About/>
        </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
