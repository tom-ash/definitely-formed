import React from "react";
export const TextInput = props => {
    const { label, value, onChange } = props;
    return (React.createElement("div", null,
        React.createElement("label", null, label),
        React.createElement("input", { type: "text", value: value, onChange: onChange ? (e) => onChange(e.target.value, e) : undefined })));
};
//# sourceMappingURL=text-input.js.map