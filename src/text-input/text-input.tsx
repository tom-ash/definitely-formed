import React, { ChangeEvent } from "react";

interface TextInputInterface {
  (props: {
    label: string | React.ReactElement;
    value?: string;
    onChange?(newValue: string, changeEvent?: ChangeEvent): void;
  }): React.ReactElement;
}

export const TextInput: TextInputInterface = props => {
  const { label, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value, e) : undefined}
      />
    </div>
  );
};
