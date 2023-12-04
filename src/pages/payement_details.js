import * as React from "react"
import Layout from "../components/Layout"
import PaymentDetails from "../components/paymentDetails"

const IndexPage = () => {
  return (
    <Layout>

    <PaymentDetails/>
        </Layout>
  )
}

export default IndexPage

export const Head = () => <title>PaymentDetails</title>
