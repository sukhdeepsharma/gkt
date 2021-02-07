/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";
import Theme from "../components/theme"


const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({ children, className, props }) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Navigation /><Logo title={siteTitle} />

        <div>
          {/* {dIcons} */}
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=P4MWGADVY4J64&amp;source=url" target="_blank"><img src="/assets/paypal-small.png"></img></a>
        </div>
        <div sx={layoutStyle.theme}>
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  theme: {
    display: ["none", "none", "none", "block"],
  }
}