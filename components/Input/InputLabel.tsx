import { FC, ReactElement } from "react";
import Input, { IInput } from "./Index";

export interface InputLabelProps extends IInput {
    label: string;
    divClassName?: string;
    labelClassName?: string;
    // Note?: JSX.IntrinsicElements;
    Note?: ReactElement;
}

const InputLabel: FC<InputLabelProps> = (props) => {
    let { label, divClassName, labelClassName, Note } = props;

    return (
        <div className={`form__control ${divClassName ?? ""}`}>
            <label htmlFor={props.id} className={`${labelClassName ?? ""}`}>
                {label}
            </label>
            {Note}
            <Input {...props} />
        </div>
    );
};

export default InputLabel;
