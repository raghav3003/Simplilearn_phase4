import React from 'react';

function ListExample(props) {
    const myList = props.myList;
    const listItem = myList.map((myList) => <li>{myList}</li>);

    return (
        <div>
            <h1>Rendering list</h1>
            <ul>{listItem}</ul>
        </div>
    )
}

export default ListExample;