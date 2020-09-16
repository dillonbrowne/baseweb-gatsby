import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { styled } from "baseui"
import { Heading, HeadingLevel } from "baseui/heading"
const MainHeader = styled("header", {
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
})
const HeaderWrapper = styled("div", {
  margin: `0 auto`,
  maxWidth: `960px`,
  padding: `1.45rem 1.0875rem`,
})
const HeadingNoMargin = styled(Heading, {
  margin: 0,
})
const StyledLink = styled(Link, {
  color: `white`,
  textDecoration: `none`,
})

const Header = ({ siteTitle }) => (
  <MainHeader>
    <HeaderWrapper>
      <HeadingLevel>
        <HeadingNoMargin>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </HeadingNoMargin>
      </HeadingLevel>
    </HeaderWrapper>
  </MainHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
