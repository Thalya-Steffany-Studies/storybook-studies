import { IAlertTitleProps } from "./IAlert";

enum AlertTitleVariants {
    primary = 'text-primary',
    danger = 'text-danger',
    warning = 'text-warning'
}

export function AlertHeader({ title, variant = 'primary', hasCloseButton = false }: IAlertTitleProps) {
    return (
        <div className={`d-flex ${hasCloseButton ? 'justify-content-between' : ''}`}>
            <h3 className={`align-items-start ${AlertTitleVariants[variant]}`}>{title}</h3>
            {hasCloseButton && <button className="btn-close" aria-label="Close"></button>}
        </div>
    );
};