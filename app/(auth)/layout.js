//this page will be affecting both of the sign-in and sign-up pages.

import React from 'react'

const layout = ({ children }) => {
    return (
        <div className="flex justify-center pt-40">
            {children}
        </div>
    )
}

export default layout
