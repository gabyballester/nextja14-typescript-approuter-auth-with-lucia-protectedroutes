export type FieldType = {
  label: string;
  type: string;
  name: string;
  id: string;
};

export const FormField = ({ label, type, name, id }: FieldType) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
    </p>
  );
};
