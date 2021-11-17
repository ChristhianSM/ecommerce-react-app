import React from 'react'
import { SpinnerCircular } from 'spinners-react'

export const Spinner = () => {
    return (
        <div className = "w-full h-screen flex justify-center items-center">
            <SpinnerCircular size={100} thickness={112} speed={100} color="rgba(146, 57, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    )
}
