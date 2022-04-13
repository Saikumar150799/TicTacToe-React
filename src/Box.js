import React from 'react'
import './App.css'

const Box = (props) => {
    return (
        <>
            <span className='box' onClick={props.onClick}>{props.id}</span>
        </>
    )
}
export default Box