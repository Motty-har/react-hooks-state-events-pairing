import React, {useState} from "react";

function Buttons(){
    const [upvote, setUpvote] = useState(770)
    const [downvote, setDownvote] = useState(600)
    return(
        <div>
            <button onClick={() => setUpvote(upvote+1)}>{upvote}👍</button>
            <button onClick={() => setDownvote(downvote-1)}>{downvote}👎</button>
        </div>
    )
}
export default Buttons