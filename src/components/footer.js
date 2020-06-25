import './footer.scss'
import React from "react";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p className={'footer__text'}>Contact: <a href="mailto:info@coveredinsnow.com">info@coveredinsnow.com</a> | © {new Date().getFullYear()}, Covered in Snow
            </p>
            <div className={'footer__rect'}></div>
        </footer>
    )
}

export default Footer
