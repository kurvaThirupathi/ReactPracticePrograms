import { useState } from "react";

const COUNTRIES = ["India", "Indonesia", "Ireland", "Iceland", "Italy", "Israel", "United States", "United Kingdom", "Canada", "Australia"];

const AutoTypeHead = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const matches = query? COUNTRIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())): [];

  const pick = (value) => {
    setQuery(value);
    setOpen(false);
  };

  return (
    <div className="ac">
      <input
        value={query}
        placeholder="Search country"
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && query && (
        <div className="menu">
          {matches.length === 0 ? (
            <div className="empty">No results</div>
          ) : (
            matches.map((c) => (
              <div key={c} onClick={() => pick(c)}>
                {c}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default AutoTypeHead;