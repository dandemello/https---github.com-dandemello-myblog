import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <div>
          @dandemello, {new Date().getFullYear()}
      </div>      
    </footer>
  )
}

export default Footer
