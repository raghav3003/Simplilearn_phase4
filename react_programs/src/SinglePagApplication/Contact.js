import React from 'react';

class Contact extends React.Component {

    render () {
        const name = "Raghav";
        return (
            <div className="content">
                <p>
                    This is the contact page. My name is {name}
                </p>
            </div>
        )
    }
}

export default Contact;