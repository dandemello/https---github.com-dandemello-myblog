import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Newsletter from "./newsletter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Newsletter />
      <div className="danmello">
          @dandemello, {new Date().getFullYear()}
      </div>      
    </footer>
  )
}

export default Footer
