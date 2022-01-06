import React,{useContext,useState} from "react";
import FeedContext from "../context/FeedContext";
import FeedItem from "./FeedItem";
function FeedList() {
    const {feedback}  = useContext(FeedContext)

    return (
        <div className='feedback-list'>
            {
             feedback && feedback.map((item) => {
                   return <FeedItem  key={item.id} feedItem={item}/>
                })
            }
       </div>
    )
}

export default FeedList
