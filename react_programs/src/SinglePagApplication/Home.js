import React from 'react';

class Home extends React.Component {

    render () {
        const name = "Raghav";
        return (
            <div className="content">
                <p>
                    This is the home page. My name is {name}
                </p>
            </div>
        )
    }
}

export default Home;