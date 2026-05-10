import type { ChangeEvent, FC, ReactNode } from "react"

interface FloatingLabelSelectProps {
    label: string
    newSelectClassName?: string
    selectClassName?: string
    newLabelClassName?: string
    labelClassName?: string
    name?: string
    value?: string | any
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    required?: boolean
    autoFocus?: boolean
    disabled?: boolean
    errors?: string[]
    children: ReactNode
}

const FloatingLabelSelect: FC<FloatingLabelSelectProps> = ({
    label,
    newSelectClassName,
    selectClassName,
    newLabelClassName,
    labelClassName,
    name,
    value,
    onChange,
    required,
    autoFocus,
    disabled,
    errors,
    children
}) => {
    return (
        <>
            <div className="relative">
                <select
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    className={`${newSelectClassName ? newSelectClassName : ` block w-full px-2 pb-1.5 pt-3  text-sm text-heading bg-gray rounded-md border border-gary 200  focus:outline-none focus:ring-0 focus:border-blue-800 peer ${selectClassName} `
                        }`}

                    autoFocus={autoFocus}
                    disabled={disabled}
                >
                    {children}
                </select>
                <label
                    htmlFor={name}
                    className=
                    {newLabelClassName
                        ? newLabelClassName
                        : `absolute text-s text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelClassName}`
                    }
                >
                    {label}
                    {required &&
                        <span className="text-red-600 ml-1">*</span>}
                </label>
            </div>
            {errors && errors.length > 0 && (
                <span className="text-red-500 text-xs">{errors[0]}</span>
            )}
        </>
    )
}

export default FloatingLabelSelect