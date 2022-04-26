import React from 'react'


export default function Alert(props) {
    const lowerMsg = (word) => {
        return word.toLowerCase()
    }
    return (
        props.alert && <div>
            <div class={`alert alert-${lowerMsg(props.alert.type)} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> {props.alert.message}
            </div>
        </div>
    )
}

