import Header from "../../Component/Header/Header.jsx";
import CourseMaterial from "../../Component/CourseMaterial/CourseMaterial.jsx";
import "./Home.css";
import Comment from "../../Component/Comment/Comment.jsx";
import {  useState } from "react";
import VideoPlayer from "../../Component/VideoPlayer/VideoPlayer.jsx";
import Progress from "../../Component/Progress/Progress.jsx";
import Topic from "../../Component/Topic/Topic.jsx";
export default function Home() {
  const [review, setReview] = useState("");

  function handleClickButton() {}

  function handleChangeReview(event) {
    setReview(event.target.value);
  }
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="Course-review">
          <VideoPlayer />
          <CourseMaterial />
          <div className="comments">
            <h1>Comments</h1>
            <Comment />
            <Comment />
            <Comment commentText={"nice"} />
          </div>
          <textarea
            value={review}
            onChange={handleChangeReview}
            placeholder="Write a comment "
            name=""
            id=""
          ></textarea>
          <button type="submit" onClick={handleClickButton}>
            Submit Review
          </button>
          
        </div>
        <div className="topics">
            <h1>Topics for This Course</h1>
            <Progress />
            <Topic />
            <Topic />
            <Topic />

          </div>
      </div>
    </div>
  );
}
