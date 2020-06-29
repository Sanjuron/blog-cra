import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact">
                <h1>Contact</h1>
                <form>
                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name"/>
                    <input type="submit" value="envoyer"/>
                </form>
            </div>
         );
    }
}
 
export default Contact;