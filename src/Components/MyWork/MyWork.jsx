import React from "react";
import "../../assets/css/MyWork.css";
import theme_pattern from "../../assets/img/theme_pattern.svg";
import mywork_data from "../../assets/js/mywork_data";
import arrow_icon from "../../assets/img/arrow_icon.svg";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
}

export default MyWork;
