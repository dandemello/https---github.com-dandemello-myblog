import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './formstyle.css'

class Newsletter extends React.Component {
    constructor (props){
        super(props)
        this.state ={
            email:'',
            message: 'Subscribe to get content updates on your inbox :)'
        }
    }

    changeEmailHandler = (event) =>{
        this.setState({ email: event.target.value })
    } 

    handleSubmit = e => {
        e.preventDefault();
        this.setState({message: 'Thank you for subscribing.'})
        addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
        this.setState({email: ''})  
    }

    render(){
        return(
        <>
        <div className="News">
            <p >Subscribe to get content updates on your inbox :)</p>   
            <div className="form">
                <form className="subscribe" onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} onChange={this.changeEmailHandler} name="EMAIL" id="mce-EMAIL" className="subscribe-email" placeholder="share your email!" required />
                    <button className="btn_send" type="submit">Subscribe</button>
                </form>
            </div>                         
        </div>              
        </>
        )
    }
}

export default Newsletter