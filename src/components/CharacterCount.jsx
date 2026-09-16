import { useState } from "react";

const MAX = 50;

const CharacterCount = () => {
  const [text, setText] = useState("Hello React");

  const onChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX){
      setText(value);
    }  // block beyond the limit
  };

  return (
    <div className="cc">
      <input value={text} onChange={onChange} maxLength={MAX} placeholder="Type here…" />
      {/* <div className={"count" + (text.length >= MAX ? " max" : "")}>
        {text.length} / {MAX}
      </div> */}
      <div className={`count ${(text.length >= MAX ? 'max' : '')}`}>
        {text.length} / {MAX}
      </div>
      
    </div>
  );
};

export default CharacterCount