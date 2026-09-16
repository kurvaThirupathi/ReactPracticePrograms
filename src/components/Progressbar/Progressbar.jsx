import React from "react"
import "./Progressbar.css"


const Progressbar = () =>{
    const [width, setWidth] = React.useState(0)
      const valRef = React.useRef();
      const fnClick = () => {
        setWidth(0);
        const val = valRef.current.value;
        if (val < 0 || val > 100) {
          alert("Enter the values in between 0 and 100")
          return;
        }
        const percent = (val / 100) * 400;
        const interval = setInterval(() => {
          setWidth((val) => {
            if (val >= percent) {
              clearInterval(interval)
              return val;
            }
            return val + 1
          })
        }, 10)
      }
    return (
        <div>
            <p>
          Enter value(0% to 100% Between) :<input ref={valRef} type="number" /><button onClick={fnClick}>Submit</button>
        </p>
        <div className="progress-bar">
          <div style={{ width }}></div>
        </div>
        </div>
    )
}

export default Progressbar