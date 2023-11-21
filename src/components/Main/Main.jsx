import React from "react";
import "./main.css";
import profileData from "./profileData.json";

const Main = () => {
  const {
    coverImageSrc,
    profileImageSrc,
    name,
    premiumIconSrc,
    verifiedIconSrc,
    followers,
    following,
    about,
    instagramLink,
    reacts,
  } = profileData;

  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src={coverImageSrc} alt="" />
            <img className="profileUserImg" src={profileImageSrc} alt="" />
          </div>

          <div className="profile1">
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {name}
                &nbsp;
                <img className="profileIcon" src={premiumIconSrc} alt="" />
                <img className="profileIcon" src={verifiedIconSrc} alt="" />
              </h4>
            </div>

            <div className="profileFollow">
              <div className="profileFollowers">
                <span className="box1">{followers}</span>
                <p className="follow1">Followers</p>
              </div>
              <div className="profileFollowing">
                <span className="box2">{following}</span>
                <p className="follow2">Following</p>
              </div>
            </div>
          </div>

          <div className="profileAbout">
            <p>{about}</p>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              {instagramLink}
            </a>
          </div>

          <div className="reacts">
            <img className="reactsIcon" src="./assets/star.png" alt="" />
            <span className="reactsText">{reacts.star}</span>

            <img className="reactsIcon" src="./assets/like.png" alt="" />
            <span className="reactsText">{reacts.like}</span>

            <img className="reactsIcon" src="./assets/eye.png" alt="" />
            <span className="reactsText">{reacts.eye}K</span>

            <img className="reactsIcon" src="./assets/heart.png" alt="" />
            <span className="reactsText">{reacts.heart}K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
