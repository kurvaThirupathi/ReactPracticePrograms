import { useState, useEffect } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("hello world");
  const [source, setSource] = useState("");
  const [shown, setShown] = useState("");
  const [runId, setRunId] = useState(0);
  const [typing, setTyping] = useState(false);

  const start = () => {
    setSource(text);
    setShown("");
    setRunId((r) => r + 1); // restart even if text is unchanged
  };

  useEffect(() => {
    if (!source) return;
    setTyping(true);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(source.slice(0, i));
      if (i >= source.length) {
        clearInterval(id);
        setTyping(false);
      }
    }, 150);
    return () => clearInterval(id);
  }, [runId]);

  return (
    <div className="tw">
      <div className="bar">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={start}>Display with typewriter effect</button>
      </div>
      {shown && (
        <p className="out">
          You typed {shown}
          {typing && <span className="caret" />}
        </p>
      )}
    </div>
  );
};

export default TypeWriter