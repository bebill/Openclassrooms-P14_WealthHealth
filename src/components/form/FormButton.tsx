interface FormButtonProps {
  label: string;
}

export const FormButton = ({ label }: FormButtonProps) => {
  return (
    <button className="form-button" type="submit">
      {label}
    </button>
  );
};
