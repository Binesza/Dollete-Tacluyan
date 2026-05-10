import type { ChangeEvent, FC } from "react";

interface FloatingLabelInputProps {
    label: string;
    type: "text" | "date" | "password";
    name: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

    labelClassName?: string;
    inputClassName?: string;

    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;

    errors?: string[];
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    labelClassName = "",
    inputClassName = "",
    required,
    autoFocus,
    disabled,
    readOnly,
    errors,
}) => {
    return (
        <div>
            <div className="relative">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder=" "
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readOnly={readOnly}
                    className={`
                        block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading
                        bg-neutral-secondary-medium border-0 border-b-2 border-default-medium
                        appearance-none focus:outline-none focus:ring-0 focus:border-brand peer
                        ${inputClassName}
                    `}
                />

                <label
                    htmlFor={name}
                    className={`
                        absolute text-sm text-body duration-300 transform
                        -translate-y-4 scale-75 top-4 z-10 origin-left inset-start-2.5
                        peer-focus:text-fg-brand
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-4
                        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                        ${labelClassName}
                    `}
                >
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            </div>

            {errors?.length ? (
                <p className="text-red-500 text-sm mt-1">{errors[0]}</p>
            ) : null}
        </div>
    );
};

export default FloatingLabelInput;