import { IButtonProps } from "./IButton";

enum ButtonVariants {
    primary = 'btn-primary', 
    danger = 'btn-danger',
    warning = 'btn-warning',
    success = 'btn-success'
}

enum ButtonSize {
    sm = 'w-25',
    md = 'w-50 p-2',
    lg = 'w-75 p-3'
}

export function Button({ variant = 'danger', size = 'sm', text, ...rest }: IButtonProps) {
    return <button className={`btn ${ButtonVariants[variant]}  ${ButtonSize[size]}`} {...rest}>{text}</button>
}