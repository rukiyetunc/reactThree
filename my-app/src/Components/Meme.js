import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImege] = React.useState("");

  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    // // setMemeImege(memeArray[randomNumber].url)
    const url = memeArray[randomNumber].url;
    console.log(url);
  }

  return (
    <div>
      <main>
        <form className="form">
          <input type="text" placeholder="Top text" className="form-input" />
          <input type="text" placeholder="Bottom text" className="form-input" />
          <button className="form-button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
          {/* <img src={memeImage} className="meme-image" /> */}
        </form>
      </main>
    </div>
  );
}
