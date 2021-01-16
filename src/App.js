import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call me Hand",
  "👈": "Back Index Pointing Left",
  "👉": "Back Index Pointing Right",
  "👆": "Back Index Pointing Up",
  "👇": "Backhand Index Pointing Down",
  "🖕": "Middle Finger",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left Facing Fist",
  "🤜": "Right Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand"
};

var emojisDb = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var inputEmoji = event.target.value;

    //1st way
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("We don't recognize this emoji !!");
    }

    //2nd way
    // var meaning = emojiDictionary[inputEmoji];

    // if (meaning === undefined) {
    //   meaning = "We don't recognize this emoji!!";
    // }
    // setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>👉Hand Emoji Interpreter👈</h1>
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Enter an emoticon/emoji"
      />
      <h3>Meaning👇</h3>
      <h3 className="emoji-meaning">{meaning}</h3>

      <h4>Click on a hand gesture and know what it means:</h4>
      <div className="div-emoji">
        {emojisDb.map((emoji) => {
          return (
            <span
              className="span-emoji"
              style={{
                cursor: "pointer",
                padding: "0.5rem",
                fontSize: "2rem"
              }}
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
