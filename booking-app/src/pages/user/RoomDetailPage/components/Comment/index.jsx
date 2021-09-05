import React from "react";
import { Rate } from "antd";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Avatar, Image } from 'antd';
import "./Comment.scss"
function CommentItem(props) {
  const { avatar, name, title, description, time, stars, interact } = props;
  return (
    <div className="comment-item">
      <div className="comment__user">
        <div className="user__avatar">
        <Avatar size={55} src={avatar} />
        </div>
        <div className="user__name">
          <h4>{name}</h4>
          <small>{time}</small>
        </div>
      </div>
      <div className="comment__interact">
        <div className="comment__interact-item">
          <span>
            <AiOutlineLike />
          </span>
          <p>{interact.like}</p>
        </div>
        <div className="comment__interact-item">
          <span>
            <AiOutlineDislike />
          </span>
          <p>{interact.dislike}</p>
        </div>
      </div>
      <div className="comment__title">{title}</div>
      <div className="comment__description">{description}</div>
      <div className="comment__review">
      <div className="comment__review-item">
        <p>Service </p>
        <Rate disabled allowHalf defaultValue={stars.service} className="rate" />
      </div>
      <div className="comment__review-item">
        <p>Room </p>
        <Rate disabled allowHalf defaultValue={stars.room} className="rate" />
      </div>
      <div className="comment__review-item">
        <p>Cleanness </p>
        <Rate disabled allowHalf defaultValue={stars.cleanness} className="rate" />
      </div>
      <div className="comment__review-item">
        <p>Food </p>
        <Rate disabled allowHalf defaultValue={stars.food} className="rate" />
      </div>
      </div>
    </div>
  );
}

export default CommentItem;
