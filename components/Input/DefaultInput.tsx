import { FC } from "react";
import { InputLabelProps } from "./InputLabel";
import { StyledInput } from "./StyledInput";

interface IDefaultInput
    extends Omit<
        InputLabelProps,
        "value" | "onChange" | "aria-label" | "placeholder"
    > {
    defaultValue: string;
}

const DefaultInput: FC<IDefaultInput> = (props) => {
    let { label, divClassName, labelClassName, others } = props;

    return (
        <div className={`form__control ${divClassName ?? ""}`}>
            <label htmlFor={props.id} className={`${labelClassName ?? ""}`}>
                {label}
            </label>
            <StyledInput {...props} {...others} />
        </div>
    );
};

export default DefaultInput;
