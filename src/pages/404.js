import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

// import SEO from "../components/layout/seo"

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <h1>404: Not Found</h1>
    <Link to="/">
      <h2 className="inline-block px-3 py-2 mt-5 border-2 rounded text-swa-1 border-swa-1">
        Go back to home page
      </h2>
    </Link>
  </Layout>
)

export default NotFoundPage
