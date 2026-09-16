import React, { useState, useEffect } from "react";

const SearchAPI = () => {
  const [query, setQuery] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  const [loading, setLoading] = useState(false);
  

 
const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await res.json();
          //console.log(data);
        // Filter based on search
        setAllUsers(data); // store full data
        setUsers(data);
        // const filtered = data.filter(user =>
        //   user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        // );

       // setUsers(filtered);
      } 
      catch (error) 
      {
        console.error("Error:", error);
      }

      setLoading(false);
    };

  // API call
  useEffect(() => {
    //if (!debouncedQuery) return;
    fetchUsers();
  }, []);

 // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);
  
useEffect(() => {
    const filtered = allUsers.filter(user =>
      user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setUsers(filtered);
  }, [debouncedQuery, allUsers]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        type="text" className="border border-solid border-gray-700"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {users.length > 0 ? 
        (
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : 
        (
          !loading && <li>No Results Found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchAPI;