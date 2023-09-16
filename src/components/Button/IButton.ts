import { ButtonHTMLAttributes } from 'react';

export type TButtonVariants = 'primary' | 'danger' | 'warning' | 'success';
export type TButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: TButtonVariants;
    size: TButtonSize;
    text: string;
}