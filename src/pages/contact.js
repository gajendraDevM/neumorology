import * as React from "react"
import Layout from "../components/Layout"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>

    <Contact/>
        </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Contact Page</title>
