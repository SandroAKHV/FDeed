import React, { useContext, useState } from "react";
import FeedContext from "../context/FeedContext";
function FeedStats() {
  const { feedback } = useContext(FeedContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats ">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedStats;
