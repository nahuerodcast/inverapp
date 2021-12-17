import React from 'react'

export const Message = ({subject, message}) => {
    return (
        <>
            <p>{subject}</p>
            <p>{message}</p>
        </>
    )
}
