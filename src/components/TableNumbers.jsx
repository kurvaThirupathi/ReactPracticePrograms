import { useState }  from "react";

const TableNumbers = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);

  return (
    <div className="wrap">
      <div className="controls">
        <label>Rows 
          <input type="number" min="0" className="border border-solid border-gray-700" value={rows} onChange={(e) => setRows(Math.max(0, Number(e.target.value) || 0))} />
          </label>
        <label>Cols 
          <input type="number" min="0" className="border border-solid border-gray-700" value={cols} onChange={(e) => setCols(Math.max(0, Number(e.target.value) || 0))} />
          </label>
      </div>
      <table>
        <tbody>
          {
          Array.from({ length: rows }, (_, r) => 
            (
            <tr key={r}>
              {Array.from({ length: cols }, (_, c) => (
                <td key={c}>
                  {r * cols + c + 1}
                </td>
              ))}
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TableNumbers