import { createContext, useState,useEffect } from "react";
import { v4 as uuid4v } from "uuid";
const FeedContext = createContext()
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeed] = useState([
        {
            id: 1,
            text: 'context biatch',
            rating: 8
        },
        {
            id: 2,
            text: 'context biatch dva',
            rating: 3
        }
    ])
    const [feedbackEdit, setFeedEdit] = useState([
        {
           item:{},
           edit:false
        }
    ])
    const editFeedback = (item) => {
        setFeedEdit({
            item,
            edit:true,

        })
        console.log(feedbackEdit)
    };
    const deleteFeed = (id) => {
        setFeed(feedback.filter((item) => item.id !== id));

    };
    const UpdateFeed = (id,updatedItem) => {
       console.log(id,updatedItem)
       setFeed(feedback.map(el => el.id === id ? updatedItem : el));
       setFeedEdit({
       
        edit:false,

    })

    };
    const addFeed = (newF) => {
        newF.id = uuid4v();
        setFeed([newF, ...feedback]);
    };

    return (
        <FeedContext.Provider value={{ feedback, deleteFeed, addFeed, editFeedback ,feedbackEdit,UpdateFeed}}>
            {children}
        </FeedContext.Provider>
    )

}
export default FeedContext;