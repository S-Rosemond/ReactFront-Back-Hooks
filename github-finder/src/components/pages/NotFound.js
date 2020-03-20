import React from 'react'

const flexdisplay = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

}

const NotFound = () => {
    return (
        <div style={flexdisplay}>
            <h1>Error: 404. Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    )
}

export default NotFound
