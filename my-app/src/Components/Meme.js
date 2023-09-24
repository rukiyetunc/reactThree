// import React from "react";
// import memeData from "../memeData";

// export default function Meme() {
//   const [memeImage, setMemeImege] = React.useState("");

//   function getMemeImage() {
//     const memeArray = memeData.data.memes;
//     const randomNumber = Math.floor(Math.random() * memeArray.length);
//     setMemeImege(memeArray[randomNumber].url);
//   }

//   return (
//     <main>
//       <div>
//         <form className="form">
//           <input type="text" placeholder="Top text" className="form-input" />
//           <input type="text" placeholder="Bottom text" className="form-input" />
//           <button className="form-button" onClick={getMemeImage}>
//             Get a new meme image 🖼
//           </button>
//         </form>
//       </div>
//         <img src={memeImage} className="meme-image" />
//     </main>
//   );
// }
import React, { useState, useEffect } from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const [key, setKey] = useState(Date.now()); // Rastgele bir key oluştur

  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const newMemeImage = memeArray[randomNumber].url;

    setMemeImage(newMemeImage);
    setKey(Date.now()); // Key'i güncelle
  }

  useEffect(() => {
    getMemeImage(); // Sayfa yüklendiğinde ilk resmi al
  }, []);

  return (
    <main>
      <div>
        <form className="form">
          <input type="text" placeholder="Top text" className="form-input" />
          <input type="text" placeholder="Bottom text" className="form-input" />
          <button className="form-button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </form>
      </div>
      <img
        key={key} // Resmi güncellemek için key ekledik
        src={memeImage}
        className="meme-image"
        alt="Meme"
      />
    </main>
  );
}
