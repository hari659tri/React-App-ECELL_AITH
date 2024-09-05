import React from 'react';
import DarkBg from '../Components/DarkBg';
import Counters from '../Components/Counters';

function About() {
    const about = "E-Cell AITH is a dynamic student body established in 2018 with a mission to cultivate an entrepreneurial spirit among the young minds at AITH. We aim to transform innovative ideas into tangible realities by providing a supportive ecosystem that encourages creativity, resilience, and business acumen,At E-Cell AITH, we believe in nurturing an entrepreneurial mindset, empowering students to convert to convert their Drop of an Idea into an Ocean of Reality, Our goal is to foster an ideal entrepreneurial environment on campus, offering a platform enriched with resources, mentorship, and networking opportunities,By connecting aspiring entrepreneurs with a diverse pool of investors, evaluators, and mentors, we strive to create an ever-growing and ever-improving startup ecosystem. E-Cell AITH is dedicated to guiding and supporting students on their journey from ideation to successful business ventures, ensuring that innovation thrives within our community."
    
    return (
        <span id="about">
            <DarkBg id="about" head="About Us" content={about} />
            <Counters />
        </span>
    );
}

export default About;
