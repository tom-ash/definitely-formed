import React, { ChangeEvent } from "react";
interface TextInputInterface {
    (props: {
        label: string | React.ReactElement;
        value?: string;
        onChange?(newValue: string, changeEvent?: ChangeEvent): void;
    }): React.ReactElement;
}
export declare const TextInput: TextInputInterface;
export {};
//# sourceMappingURL=text-input.d.ts.map