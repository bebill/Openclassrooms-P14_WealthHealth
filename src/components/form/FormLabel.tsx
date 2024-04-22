interface LabelProps {
  text: string;
}

export const FormLabel = ({ text }: LabelProps) => {
  return <span>{text}</span>;
};
