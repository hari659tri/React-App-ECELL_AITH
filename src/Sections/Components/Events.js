import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Event(props) {
    useEffect(() => {
        AOS.init();
    })
    const img = "eimg " + props.fit;
    return (
        <div className={`events ${props.banner ? 'event-banner': ''}`} data-aos="zoom-out-up" data-aos-offset="-20">
            <div className="eimgdesc">
                <img className={img} src={props.img} alt={props.name} />
                <div className="img-overlay">
                    <div className="edesc">{props.desc}</div>
                </div>
            </div>
            <div className="ename">{props.name}</div>
        </div>
    );
}

function Events() {
    return (
        <div className="d-flex event-container">
            <Event img="./assets/Logos/sih.png" fit="fit" name="HackerTech" desc="At the Entrepreneurship Cell (E-Cell) of Dr. Ambedkar Institute of Technology for Handicapped (AITH), we believe in fostering creativity and problem-solving skills among students. One of the key platforms we actively engage in is the Smart India Hackathon (SIH) — a nationwide initiative by the Government of India that provides students the opportunity to work on pressing real-world problems and develop innovative solutions. Every year, E-Cell AITH proudly participates in SIH, empowering students to push their limits and turn their ideas into impactful realities." />

            <Event img="./assets/Logos/startup.png" fit="fit" name="Start-up AITH" desc="Start-up Sanvaad is a unique initiative by E-Cell AITH aimed at creating an interactive dialogue between young entrepreneurs and established industry leaders. The event brings together students, founders of start-ups, venture capitalists, and seasoned mentors, fostering a collaborative ecosystem where ideas can be shared, critiqued, and improved upon." />

            <Event img="./assets/Logos/idea.png" fit="fit" name="Ideathon 2.0" desc="Start-up Sanvaad is a unique initiative by E-Cell AITH aimed at creating an interactive dialogue between young entrepreneurs and established industry leaders. The event brings together students, founders of start-ups, venture capitalists, and seasoned mentors, fostering a collaborative ecosystem where ideas can be shared, critiqued, and improved upon." />
            <Event banner img="./assets/Logos/esummit.png" fit="fit" name="E-summit" desc="The Entrepreneurship Cell (E-Cell) at Dr. Ambedkar Institute of Technology for Handicapped (AITH) proudly hosts the annual E-Summit, an inspiring platform for students, aspiring entrepreneurs, and innovators. The summit is designed to foster a culture of entrepreneurship and innovation, empowering young minds to pursue their start-up dreams.E-Summit at AITH is a one-of-a-kind event, bringing together industry leaders, successful entrepreneurs, investors, and students to exchange knowledge, share experiences, and create opportunities for the future. The summit serves as a vibrant platform for idea-sharing, networking, and collaboration, helping participants turn their entrepreneurial ideas into reality." />
            
        </div>
    );
}

export default Events;
