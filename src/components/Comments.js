import React, { useState } from "react";
import CommentDisplay from "./CommentDisplay";

function Comments({videos}){
    console.log(videos)
    const [showComments, setShowComments] = useState(false)
    const displayComment = videos.comments.map((comment) => {
        return <CommentDisplay comment={comment}/>
    })
    console.log(displayComment)
    return(
        <div>
            <button onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <h1>{showComments ? "2 Comments" : ""}</h1>
            {showComments ? displayComment : " "}
        </div>
    )
}
export default Comments