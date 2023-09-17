import { ReactNode } from 'react';

export type TAlertTitleVariant = 'primary' | 'danger' | 'warning'

export interface IAlertTitleProps {
    title: string
    variant: TAlertTitleVariant,
    hasCloseButton?: boolean;
}

export interface IAlert extends IAlertTitleProps {
    description: string;
    children: ReactNode;
}