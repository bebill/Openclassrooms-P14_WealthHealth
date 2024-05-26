interface FormButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FormButton = ({ label, onClick }: FormButtonProps) => {
  return (
    <button className="form-button" type="submit" onClick={onClick}>
      {label}
    </button>
  );
};
