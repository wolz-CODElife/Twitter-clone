import React from "react";
import "./WhoToFollow.css";
import FollowOptions from "./FollowOptions";

const WhoToFollow = () => {
  const follows = [
    {
        image: "https://pbs.twimg.com/profile_images/1387144043600224270/4665xtPY_x96.png",
        title: "Radix - Layer 1 DeFi don",
        isfollowing: true,
        username: "radix",
    },
    {
        image: "https://pbs.twimg.com/profile_images/1139206093861720066/fhQdqyvM_x96.jpg",
        title: "React Conference Live",
        username: "reactlivenl",
    }
  ];
  return (
    <div className="whoToFollow">
      <div className="whoToFollow_header">
        <h3>Who To Follow</h3>
      </div>
      {follows.map((follow) => (
        <FollowOptions
          image={follow.image}
          title={follow.title}
          isfollowing={follow.isfollowing}
          username={follow.username}
        />
      ))}
      <div className="whoToFollow_footer">
        <a href="/">Show more</a>
      </div>
    </div>
  );
};

export default WhoToFollow;
