const Table = ({
  colHeaders,
  renderRow,
  data
}: {
  colHeaders: { header: string; key: string; className?: string}[];
  renderRow: (row: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="text-left text-gray-500 text-xs md:text-sm">
            {colHeaders.map((col) => (
                <th key={col.key} className={col.className}>
                    {col.header}
                </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => renderRow(row) )}
      </tbody>
    </table>
  );
};

export default Table;
