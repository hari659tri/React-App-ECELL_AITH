// import React from "react";
// import Social from "../Components/Social";

// function Footer() {
//     return (
//         <div className="footer">
//             <img src="./assets/Logos/ecell-white.png" alt="E-cell AITH" />
//             <span className="iia">Envision. Evolve. Execute</span>
//             <a href="mailto:ecellaith@gmail.com">ecellaith@gmail.com</a>
//             <Social position="bottom" />

//             {/* Embedded Google Map */}
//             <div className="map-container">
//                 <iframe 
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5146.720353382018!2d80.27233657496595!3d26.501869331007924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c382405555555%3A0xc56ecc1df489e865!2sDr.%20Ambedkar%20Institute%20of%20Technology%20for%20Handicapped!5e0!3m2!1sen!2sin!4v1725524371208!5m2!1sen!2sin" 
//                     width="300" 
//                     height="250" 
//                     style={{ border: 0 }} 
//                     allowFullScreen="" 
//                     loading="lazy" 
//                     referrerPolicy="no-referrer-when-downgrade">
//                 </iframe>
//             </div>

          

//         </div>
//     );
// }

// export default Footer;

import React from "react";
import Social from "../Components/Social";

function Footer() {
    return (
        <div className="footer">
            {/* Left Side Content */}
            <div className="footer-content">
                <img src="./assets/Logos/ecell-white.png" alt="E-cell AITH" />
                <span className="iia">Envision. Evolve. Execute</span>
                <a href="mailto:ecellaith@gmail.com">ecellaith@gmail.com</a>
                <Social position="bottom" />
            </div>
            
            {/* Right Side Map */}
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5146.720353382018!2d80.27233657496595!3d26.501869331007924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c382405555555%3A0xc56ecc1df489e865!2sDr.%20Ambedkar%20Institute%20of%20Technology%20for%20Handicapped!5e0!3m2!1sen!2sin!4v1725524371208!5m2!1sen!2sin" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Footer;
