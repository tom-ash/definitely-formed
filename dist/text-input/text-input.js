import React from 'react';
export const TextInput = (props) => {
    const { label } = props;
    return (React.createElement("div", null,
        React.createElement("label", null, label),
        React.createElement("input", { type: 'text' })));
};
//# sourceMappingURL=text-input.js.map