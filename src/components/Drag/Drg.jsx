import React, { useState } from "react";

const Drag= () => {
  const [list, setList] = useState(["A", "B", "C", "D"]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    const newList = [...list];
    const draggedItem = newList[dragIndex];

    newList.splice(dragIndex, 1); // delete
    newList.splice(index, 0, draggedItem); // add

    setList(newList); // update
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reorder List</h2>
      {list.map((item, index) => (
        <div
          key={index}
          draggable
         onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{  
            padding: "10px",
            margin: "5px",
            background: "lightgray",
            cursor: "grab",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Drag