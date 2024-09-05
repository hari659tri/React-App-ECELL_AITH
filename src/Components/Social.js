import React from "react";

function Social(props) {
    return (
        <div className={`${props.position}`}>
            <a target="_blank" rel="noreferrer" href="https://x.com/isc_aith?s=09"><span><i className="fab fa-twitter"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ecell.aith/"><span><i className="fab fa-facebook-f"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aith-incubation-and-startup-centre-11aa451b2/"><span><i className="fab fa-linkedin"></i></span></a>
            <a target="_blank" rel="noreferrer" href="mailto:ecellaith@gmail.com"><span> <i class="fas  fa-envelope"></i> </span></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ecell_aitd/"><span><i className="fab fa-instagram"></i></span></a>
        </div>
    );
}

export default Social;