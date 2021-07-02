import React from 'react';

class ArrayExample extends React.Component {
    constructor () {
        super();
        this.state = {
            data: [
                {
                    id: '111',
                },
                {
                    id: '222',
                },
                {
                    id: '333',
                }
            ],
        }
    }

    render() {
        return (
            <div>
                {this.state.data.map((dynamicContent) => (
                    <p>{dynamicContent.id}</p>
                ))}
            </div>
        )
    }

}

export default ArrayExample;