import React from 'react'
import '../styles/logo.css'

const Logo = () => {
    return (
        <div className="contenedor-logo">
            <div className="logo-content ">
                <svg className="logo-svg">
                    <polygon
                        fill="#EB5757"
                        
                        points="0 18, 10 0, 20 18" />
                </svg>
            </div>
            <div className="logo-content ">
                <p className="logo-text">windbnb</p>
            </div>
        </div>
    )
}


export default Logo