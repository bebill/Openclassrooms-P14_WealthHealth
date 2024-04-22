interface CellProps {
  value: string;
}

export const TableCell = ({ value }: CellProps) => {
  return <td>{value}</td>;
};
