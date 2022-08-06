import React from 'react'

function ColorBlock(props){
    return(
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <b>{props.color}</b>
        </div>
    )
}

export default ColorBlock