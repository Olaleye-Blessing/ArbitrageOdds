import {
    ChangeEventHandler,
    FC,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
} from "react";
import { StyledInput } from "./StyledInput";

interface IInput {
    type?: HTMLInputTypeAttribute;
    name: string;
    id: string;
    value: string;
    placeholder?: string;
    "aria-label": string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    others?: InputHTMLAttributes<HTMLInputElement>;
}

const Index: FC<IInput> = (props) => {
    let otherProps = props.others;

    return <StyledInput {...props} {...otherProps} />;
};

export default Index;
