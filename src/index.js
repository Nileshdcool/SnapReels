import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import VideoFeed from "./features/VideoFeed";
import axios from 'axios';

function App() {
  return (
    <div>
      <VideoFeed/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
