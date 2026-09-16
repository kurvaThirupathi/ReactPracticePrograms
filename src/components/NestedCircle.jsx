import { useState } from "react";

const Circle = ({ level, total }) => {
  if (level > total){
return null;
  } 
  // Outermost (level 1) is biggest; each inner circle is 44px smaller.
  const size = 60 + (total - level) * 44;
  return (
    <div className="circle" style={{ width: size, height: size }}>
      <Circle level={level + 1} total={total} />
    </div>
  );
};

const NestedCircle = () => {
  const [count, setCount] = useState(3);
  return (
    <div className="wrap">
      <input
        type="number"
        min="0"
        value={count}
        onChange={(e) => setCount(Number(e.target.value) || 0)}
      />
      <div className="stage">
        {count > 0 && <Circle level={1} total={count} />}
      </div>
    </div>
  );
};

export default NestedCircle