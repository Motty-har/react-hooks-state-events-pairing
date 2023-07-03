import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video} />
      <Buttons />
      <Comments videos={video}/>
    </div>
  );
}

export default App;
