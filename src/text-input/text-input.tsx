import React from "react";

interface TextInputInterface {
  (props: { label: string | React.ReactElement }): React.ReactElement;
}

export const TextInput: TextInputInterface = props => {
  const { label } = props;

  return (
    <div>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
};
