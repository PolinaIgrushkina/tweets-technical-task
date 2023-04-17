import React, { useState } from "react";
import css from "./TweetsItem.module.css";
import PropTypes from "prop-types";

import picture1 from "../../images/picture-1.png";
import picture2 from "../../images/picture-2.png";
import logo1 from "../../images/logo.png";
import logo2 from "../../images/logo-2.png";
import { followUser, unFollowUser } from "../../helpers/api";

export default function TweetsItem({ user }) {
  const [isFollowed, setIsFollowed] = useState(user?.isFollowed || false);
  const [followers, setFollowers] = useState(user.followers);

  const formatter = new Intl.NumberFormat("en-US");
  const formattedFollowers = formatter.format(followers);

  const handleClickFollow = async () => {
    setIsFollowed(true);
    setFollowers((prevState) => prevState + 1);
    await followUser(user.id, followers + 1);
  };

  const handleClickUnFollow = async () => {
    setIsFollowed(false);
    setFollowers((prevState) => prevState - 1);
    await unFollowUser(user.id, followers - 1);
  };

  return (
    <li className={css.tweet}>
      <picture>
        <source srcSet={`${picture1} 1x, ${picture2} 2x`} />
        <img src={picture1} alt="qa" />
      </picture>

      <picture className={css.logo}>
        <source srcSet={`${logo1} 1x, ${logo2} 2x`} />
        <img src={logo1} alt="logo" />
      </picture>

      <div className={css.line}></div>

      <div className={css.avatarDiv}></div>
      <img className={css.avatar} src={user.avatar} alt="avatar" />

      <p className={css.textTweets}>{user.tweets} tweets</p>
      <p className={css.textFollowers}>{formattedFollowers} followers</p>

      {isFollowed ? (
        <button className={css.buttonActive} onClick={handleClickUnFollow}>
          Following
        </button>
      ) : (
        <button className={css.button} onClick={handleClickFollow}>
          Follow
        </button>
      )}
    </li>
  );
}

TweetsItem.propTypes = {
  user: PropTypes.object.isRequired,
};
