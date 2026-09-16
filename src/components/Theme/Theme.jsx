import React, { useState, useEffect,useRef} from "react";
import "./Theme.css"

const Theme = () => {
  const [themeView, setThemeView] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeView");
    if (savedTheme) {
      setThemeView(savedTheme);
    }
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.className = themeView;
    localStorage.setItem("themeView", themeView);
  }, [themeView]);

  const toggleTheme = () => {
    //setThemeView(prev => (prev === "light" ? "dark" : "light"));
    setThemeView((prev)=>{
      return (prev==="light"?"dark":"light")
    })
  };
  //  const mousePosition = useRef({
  //   x: 0,
  //   y: 0
  // });

  // const handleMouseMove = (event) => {
  //   mousePosition.current = {
  //     x: event.clientX,
  //     y: event.clientY
  //   };

  //   console.log("X:", mousePosition.current.x);
  //   console.log("Y:", mousePosition.current.y);
  // };
  return (
    <div style={{ padding: "20px" }}>
      <h1>{themeView.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      {/* <div
      onMouseMove={handleMouseMove}
      style={{
        height: "500px",
        border: "2px solid black",
        padding: "20px"
      }}
    >
      Move your mouse inside this box
    </div> */}
    </div>
  );
}

export default Theme