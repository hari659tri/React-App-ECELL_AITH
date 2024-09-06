import React, { useEffect } from "react";
import DarkBg from "../Components/DarkBg";
import AOS from "aos";
import "aos/dist/aos.css";

function Board(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
      <div className="bmember">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={`assets/Board/${props.pic}.jpg`} alt={props.name} />
            </div>
            <div className="flip-box-back">
              <a href={props.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>

              
            </div>
          </div>
        </div>
        <h2 className="name">{props.name}</h2>
        <h3 className="desig">{props.designation}</h3>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div id="team">
      <DarkBg head="Team" />
      <div className="team">
        <Board
          name="Abhishek Singh"
          designation="OVERALL CORDINATORS"
          pic="Abhishek"
          cls="one"
          linkedin="https://www.linkedin.com/in/abhishek-singh-4052a6229/"
          instagram="https://www.instagram.com/_abhishek_singh2121/" // Add Instagram URL
        />

        <Board
          name="Manjeet singh"
          designation="OVERALL CORDINATORS"
          pic="Manjeeet"
          cls="three"
          linkedin="https://www.linkedin.com/in/manjeet-s-7860b5242"
          instagram="https://www.instagram.com/manjeet_singh.10/"
        />
        <Board
          name="Sakshi Pandey"
          designation="Mentor(Finance&PR)"
          pic="sakashi"
          cls="three"
          linkedin="https://www.linkedin.com/in/sakshi-pandey-34102622a"
          instagram="https://www.instagram.com/p.sakshi58/"
          
        />
        <Board

          name="Stuti Chaudhary"
          designation="Mentor(events&ISC_Core)"
          pic="stuti"
          cls="three"
           linkedin="https://www.linkedin.com/in/stuti-chaudhary-051875241/"
           instagram="https://www.instagram.com/stuti_510"
        />
        <Board
          name="Arpit Shakya"
          designation="Mentor(EVENT&ISC)"
          pic="arpit"
          cls="three"
          linkedin="https://www.linkedin.com/in/arpit-shakya-2972b6190/"
          instagram="https://www.instagram.com/arpit.shakya23/"
        />
        <Board
          name="Sanidhya Shukla"
          designation="Mentor(Operations)"
          pic="sandihya"
          cls="three"
          linkedin="https://www.linkedin.com/in/sanidhyashukla22"
          instagram="https://www.instagram.com/sanidhya._.shukla/"
        />
        <Board
          name="Ashutosh Patel"
          designation="Mentor(graphic&Video editing)"
          pic="asutosh"
          cls="three"
          linkedin="https://www.linkedin.com/in/ashutosh-patel-162264237/"
          instagram="https://www.instagram.com/ashutoshpatel7634/"
        />
        <Board
         name="Harikesh Tripathi"
          designation="Head(Tech&Research)"
          pic="harikesh"
          cls="three"
          linkedin="https://www.linkedin.com/in/harikesh-tripathi-7841a0181/"
          instagram="https://www.instagram.com/harikesh9722/"
        />

        <Board
          name="Satyam Pandey"
          designation="Head(Graphic)"
          pic="satyam"
          cls="three"
          linkedin="https://www.linkedin.com/in/satyam-pandey-44493b241/"
          instagram="https://www.instagram.com/_satyam.pandey___01/"
        />

        <Board
          name="Manu Omar "
          designation="Head(Operation&Management)"
          pic="manu"
          cls="three"
          linkedin="https://www.linkedin.com/in/manu-omar-b802591b9"
          instagram="https://www.instagram.com/manuomar8/"
        />
        <Board
          name="Ansh Sharma"
          designation="Head(Social_Media)"
          pic="Ansh sharma"
          cls="three"
          linkedin="https://www.linkedin.com/in/ansh-sharma-645784273"
          instagram="https://www.instagram.com/anshsharma1074/"
        />
        <Board
          name="Rakesh Kr. Bind"
          designation="Head(Content_Writer)"
          pic="Rakesh Kumar"
          cls="three"
          linkedin="https://www.linkedin.com/in/rakesh-kr-bind-a08aab24b"
          instagram="https://www.instagram.com/roc_se06_23/"
        />
        <Board
          name="Abhay Tiwari"
          designation="Head(Graphics&Video_editing)"
          pic="Abhay"
          cls="three"
          linkedin="https://www.linkedin.com/in/abhay-tiwari-89a507256/"
          instagram="http://instagram.com/_abhay_tiwari_pvt"
        />
        
        
      </div>
    </div>
  );
}

export default Team;
