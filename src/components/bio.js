/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Form, Col, Row, Button } from "react-bootstrap";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/ppicblack.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Hey! Welcome to my blog - I write about UX and Strategy.
          {` `}
          You can find me on <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a> or <a href={`https://www.linkedin.com/in/daniel-de-mello/`}>LinkedIn</a>
          {` `}Subscribe to get my content on your inbox! 
        </p>    
        
      )}          
<Container>
            <h1>This is a form</h1>
            <Row>
                <Col lg={4}>
                    <p>The form might look a little different from the demo video. But I assure you, it's still working properly. I'd love to have you be a part of my email list, so I could inform you on videos and projects I'm working on that will help you <strong>design more and troubleshoot less.</strong></p>
                </Col>
                <Col lg={8}>
                    
            
        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
        <Form action="https://app.convertkit.com/forms/1740439/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="1740439" data-uid="725ab3e452" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">

        <div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field">

            <Form.Row>
                <Form.Group as={Col} lg={4}>
                    <Form.Control
                        required
                        aria-label="Your first name"
                        name="fields[first_name]" 
                        placeholder="Your first name" 
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} lg={5}>
                    <Form.Control
                        required
                        name="email_address" 
                        aria-label="Your email address" 
                        placeholder="Your email address"
                        type="email"
                    />
                </Form.Group>
                <Form.Group as={Col} lg={3}>
                    <Button data-element="submit" variant="outline-primary" type="submit">Subscribe Now!</Button>
                </Form.Group>
            </Form.Row>

            
                
                {/* <input class="formkit-input"   name="fields[first_name]" placeholder="Your first name" type="text" /> */}
                    
                </div><div class="formkit-field">
                    
                {/* <input class="formkit-input" name="email_address" aria-label="Your email address" placeholder="Your email address" required="" type="email" /> */}
                    
                </div>
                {/* <button data-element="submit"> */}
                    <div>
                        <div>
                        </div>
                        <div>
                        </div><div></div></div><span class="">
                            {/* Subscribe */}
                            </span>
                            {/* </button> */}
                            </div><div></div></div>
      
      
      </Form>


      </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Bio
