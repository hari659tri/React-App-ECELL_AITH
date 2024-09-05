import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="counters" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="-20">
            <div className="count">{props.count}+</div>
            <div className="spec">{props.spec}</div>
        </div>
    );
}

function Counters() {
    return (
        <div className="d-flex">
            <Counter count="1000" spec="students" />
            <Counter count="150" spec="start ups" />
            <Counter count="200" spec="mentors" />
            <Counter count="50" spec="incubatees" />
        </div>
    );
}

export default Counters;
