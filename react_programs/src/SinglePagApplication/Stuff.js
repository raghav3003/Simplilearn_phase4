import React from 'react';

class Stuff extends React.Component {

    render () {
        const name = "Raghav";
        return (
            <div className="content">
                <p>
                    This is the stuff page. My name is {name}
                </p>
            </div>
        )
    }
}

export default Stuff;