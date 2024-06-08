import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles: React.CSSProperties = {
  border: 0,
  height: "100%",
  resize: "none",
};

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Introducir el texto";
  if (loading === true) return "Traduciendo...";
  if (type === SectionType.To) return "Traducción";
  return "";
};

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const styles: React.CSSProperties =
    type === SectionType.From
      ? { ...commonStyles }
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      disabled={type === SectionType.To}
      value={value}
      onChange={handleChange}
    />
  );
};
