import React from "react";
import "./WhoToFollow.css";
import FollowOptions from "./FollowOptions";

const WhoToFollow = () => {
  const follows = [
    {
        image: "https://i.postimg.cc/0jc6R33P/4665xt-PY-x96.png",
        title: "Radix - Layer 1 DeFi don",
        isfollowing: true,
        username: "radix",
    },
    {
        image: "https://i.postimg.cc/rprt0fdN/image.png",
        title: "React Conference Live",
        username: "reactlivenl",
    }
  ];
  return (
    <div className="whoToFollow">
      <div className="whoToFollow_header">
        <h3>Who To Follow</h3>
      </div>
      {follows.map((follow, index) => (
        <FollowOptions
          key={index}
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
