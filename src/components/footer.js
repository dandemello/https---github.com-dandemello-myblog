import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SubscriptionForm from "./sub-form.component"

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

  const author = data.site.siteMetadata?.author
  return (
    <footer>
      <div>
        <SubscriptionForm />
        @dandemello, {new Date().getFullYear()}
      </div>      
    </footer>
  )
}

export default Footer
