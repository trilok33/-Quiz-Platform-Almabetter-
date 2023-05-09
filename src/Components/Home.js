import React from "react";
import { HomeCard } from "./Ui/HomeCard";
import illus1 from "../images/1.jpg";
import illus2 from "../images/2.png";
import illus3 from "../images/3.jpg";

// this is our homepage which will route us to the necessary pages //

export const Home = () => {
  return (
    <div className="home-container">
      <HomeCard
        color="white"
        heading="Create New Quiz"
        path="create-new"
        delay={0.15}
        image={illus1}
        size={"500px"}
      />
      <HomeCard
        color="blue"
        heading="My Quizzes"
        path="my-quizzes"
        delay={0.25}
        image={illus2}
        size={"700px"}
      />
   
    </div>
  );
};
