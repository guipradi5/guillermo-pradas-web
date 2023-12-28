"use client"
import React from "react";
import './Contact.css'


export default function Contact() {
    return (
    <div className="contacts">
        <div className="contacts__text">You can contact me through the following channels:</div>
        <ul>
            <li><a href="mailto:guipradi5@gmail.com"><img src="/icons/email.png" />Write me an e-mail</a></li>
            <li><a href="https://www.linkedin.com/in/guillermo-pradas-di-liscia-92178210a/" target="_blank"><img src="/icons/linkedin.png" />Linkedin page</a></li>
            <li><a href="https://github.com/guipradi5" target="_blank"><img src="/icons/github.png" />Github account</a></li>
            <li><a href="https://twitter.com/gillthedev" target="_blank"><img src="/icons/twitter.png" />Twitter page</a></li>
        </ul>
    </div>
    )
}