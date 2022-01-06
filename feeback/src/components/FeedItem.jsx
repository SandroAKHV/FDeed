import React, { useState ,useContext} from "react";
import Card from "./shared/card";
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedContext from "../context/FeedContext";
function FeedItem({ feedItem }) {
  
    const {deleteFeed,editFeedback}  = useContext(FeedContext)
  
  return (
    <Card>
      <div className="num-display">{feedItem.rating}</div>
      <button  onClick={() => deleteFeed(feedItem.id)}  className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(feedItem)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{feedItem.text}</div>
    </Card>
  );
}

export default FeedItem;
