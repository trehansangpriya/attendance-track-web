import React from 'react'

const Spacer = ({ height }) => {
    return (
        <div style={{
            height: height || '1rem',
        }} ></div>
    )
}

export default Spacer