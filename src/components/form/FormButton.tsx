interface FormButtonProps {
  label: string;
}

export const FormButton = ({ label }: FormButtonProps) => {
  return <button type="submit">{label}</button>;
};
