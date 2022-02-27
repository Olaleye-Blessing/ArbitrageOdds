import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./StyledInput";

interface IInput {
    type?: HTMLInputTypeAttribute;
    name: string;
    id: string;
    value: string;
    placeholder?: string;
    "aria-label": string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Index: FC<IInput> = (props) => {
    return <StyledInput {...props} />;
};

export default Index;
