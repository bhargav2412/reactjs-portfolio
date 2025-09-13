import React from "react";
import "../../assets/css/MyWork.css";
import theme_pattern from "../../assets/img/theme_pattern.svg";
import mywork_data from "../../assets/js/mywork_data";
import arrow_icon from "../../assets/img/arrow_icon.svg";

function MyWork() {
  const handleShowMoreClick = () => {
    window.open("https://github.com/bhargav2412", "_blank");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div
        className="mywork-showmore"
        onClick={handleShowMoreClick}
        style={{ cursor: "pointer" }}
      >
        <p>More Details</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
