/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StyledLink} from 'baseui/link'
import Header from "./header"
import "./layout.css"

const engine = new Styletron();

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  const Wrapper = styled('div', {
    margin: '0 auto',
    maxWidth: '960px',
    padding: '0 1.0875rem 1.45rem',
  });


  return (
     <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <StyledLink href="https://www.gatsbyjs.org">Gatsby</StyledLink>
          </footer>
        </Wrapper>
      </BaseProvider>
    </StyletronProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
