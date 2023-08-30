import React from "react";
export const TextInput = props => {
    const { label, id, value, onChange, containerClassName } = props;
    return (React.createElement("div", { className: containerClassName },
        React.createElement("label", null, label),
        React.createElement("input", { type: "text", id: id, value: value, onChange: onChange ? e => onChange(e.target.value, e) : undefined })));
};
//# sourceMappingURL=text-input.js.map