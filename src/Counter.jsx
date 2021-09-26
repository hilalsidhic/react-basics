import React from 'react'

 let Counter = ({title,...obj})=> {

    return (
        <div>
            <h2>{title} : {obj.count}</h2>
        </div>
    )
}

export default Counter
