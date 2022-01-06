import React, { useState ,useContext,useEffect} from "react";
import Card from "./shared/card";
import Button from "./shared/Button";
import Rating from "./Rating";
import FeedContext from "../context/FeedContext";

function FeedForm() {
  
  const [text, setText] = useState("");
  
  const [rating, setRating] = useState(10);
  const {addFeed,feedbackEdit,UpdateFeed}  = useContext(FeedContext)
  const handleFeedback = (e) => {
  
      setText(e.target.value);

  };
  const callbackFunc = (childData) => {
    setRating(childData)
  };
    useEffect(() => {
      if(feedbackEdit.edit == true){
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    
    }, [feedbackEdit])
  const handleSubmit = (e) => {
   
    e.preventDefault()
    const newFeed = {
        text,
        rating,
    }
    addFeed(newFeed)
    if(feedbackEdit.edit === true){
      UpdateFeed(feedbackEdit.item.id,newFeed)
    }
    setText('')
}
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Rating parentCalback={callbackFunc} />
        <div className="input-group">
          <input
            onChange={handleFeedback}
            placeholder="add feedback"
            type={"text"}
            value={text}
          />
          <Button
            type={"submit"}
            disabled={text.length <= 10}
            version={"secondary"}
            children={"submit feedback"}
          />
        </div>
      </form>
    </Card>
  );
}

export default FeedForm;
