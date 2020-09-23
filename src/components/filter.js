import React from 'react'

function Filter({filter,users}) {
    return (
        <div>
            <h2>Filter component</h2>
            <input type="text" placeholder="type the name" onChange={ (e) => filter(e.target.value) }/>
        </div>
    )
}

export default Filter
