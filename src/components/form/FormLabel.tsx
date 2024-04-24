interface LabelProps {
  text: string;
}

export const FormLabel = ({ text }: LabelProps) => {
  return <span className="form-label">{text}</span>;
};
