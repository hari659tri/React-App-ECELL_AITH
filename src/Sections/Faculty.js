import React from "react";
import DarkBg from "../Components/DarkBg";

function Faculty() {

  const facultyText = "We are honored to introduce Dr. Rohit Sharma, a distinguished faculty member at DR.AITH Kanpur, where he serves as the Assistant Professor in the Computer Science & Engineering Department. Dr.Rohit Sharma's expertise in Computer Organization and Software Reliability, combined with his unwavering dedication, makes him a vital pillar of our academic community. His rich academic background and commitment to excellence have been instrumental in shaping the educational journey of our B.Tech students,Dr. Sharma's visionary approach to teaching and mentorship has significantly contributed to the professional growth of his students. His dedication to nurturing young minds and equipping them with the essential skills for success sets him apart as an exceptional mentor and guide. Under his guidance, the Computer Science & Engineering Department has thrived as a center of learning and innovation, where students are empowered to turn their academic pursuits into successful careers."

  return (
    <div id="Faculty">
      <DarkBg head="Our Faculty Co-ordinator" faculty={facultyText}/>
    </div>
  );
}

export default Faculty;
