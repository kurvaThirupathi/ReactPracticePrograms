import React, { useState } from "react";

const TOTAL_ITEMS = 10000;
const ROW_HEIGHT = 40;
const CONTAINER_HEIGHT = 400;

const users = Array.from({ length: TOTAL_ITEMS },(_, index) => (
  {
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@gmail.com`,
  }
)
);

const VirtualList = () => {

  const [scrollTop, setScrollTop] = useState(0);

  // Find which item should be at the top
  const startIndex = Math.floor(scrollTop / ROW_HEIGHT);

  // Number of rows visible inside container
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ROW_HEIGHT);

  // Extra rows before and after visible area
  const buffer = 5;

  const start = Math.max(0,startIndex - buffer);

  const end = Math.min(TOTAL_ITEMS,startIndex + visibleCount + buffer);

  // Only get required users
  const visibleUsers = users.slice(start, end);

  return (
    <div>

      <h2>Virtualized List</h2>

      <p>
        Total Users: {TOTAL_ITEMS}
      </p>

      <div
        style={{
          height: `${CONTAINER_HEIGHT}px`,
          overflowY: "auto",
          border: "1px solid black",
          position: "relative",
        }}
        onScroll={(e) =>
          setScrollTop(e.target.scrollTop)
        }
      >

        {/* Creates the complete scrollable height */}
        <div
          style={{
            height: `${TOTAL_ITEMS * ROW_HEIGHT}px`,
            position: "relative",
          }}
        >

          {visibleUsers.map((user, index) => {

            const actualIndex = start + index;

            return (
              <div
                key={user.id}
                style={{
                  position: "absolute",
                  top: `${actualIndex * ROW_HEIGHT}px`,
                  height: `${ROW_HEIGHT}px`,
                  width: "100%",
                  borderBottom: "1px solid #ddd",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <strong>{user.id}</strong>
                {" - "}
                {user.name}
                {" - "}
                {user.email}
              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
};

export default VirtualList;