import React from 'react';
import "./Contact.css";

function Contact(props) {
    return (
        <div className='container-contact'>
            <h1>Contactez-nous</h1>
            <p>Par mail : zzz@eee</p>
            <p>Par téléphone : XX-XX-XX</p>
            <p>Rejoignez-nous sur les réseaux :</p>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
            </ul>

        </div>
    );
}

export default Contact;