interface CellProps {
  value: string;
}

export const TableCell = ({ value }: CellProps) => {
  return <td className="table-cell">{value}</td>;
};
