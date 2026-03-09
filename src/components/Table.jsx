import "../styles/Table.css"

const Table = ({ columns, data, actions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
          {actions && <th>Actions</th>}

        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col, i) => (
              <td key={i}>{row[col.accessor]}</td>
            ))}
            {actions && (
                <td className="table-actions">
                    {actions(row)}
                </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
