import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { styled } from "baseui"
import { HeadingLevel, Heading } from "baseui/heading"
import { Paragraph3 } from "baseui/typography"
import { StyledLink } from "baseui/link"
const Div = styled("div", {
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeadingLevel>
      <Heading>Hi people</Heading>
      <Paragraph3>Welcome to your new Gatsby site.</Paragraph3>
      <Paragraph3>Now go build something great.</Paragraph3>
    </HeadingLevel>
    <Div>
      <Image />
    </Div>
    <StyledLink $as={Link} to="/page-2/">
      Go to page 2
    </StyledLink>{" "}
    <br />
    <StyledLink $as={Link} to="/using-typescript/">
      Go to "Using TypeScript"
    </StyledLink>
  </Layout>
)

export default IndexPage
