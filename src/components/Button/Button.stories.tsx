import { Button } from ".";
import { Meta, StoryObj } from '@storybook/react';
import { IButtonProps } from "./IButton";

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary' , 'danger' , 'warning' , 'success']
            },
            table: { defaultValue: { summary: 'primary' } },
        },
        size: {
            control: {
                type: 'radio',
                options: ['sm' , 'md' , 'lg']
            },
            table: { defaultValue: { summary: 'sm' } }
        },
        text: { control: 'text' },
    }
};
export default meta;

export const Default: StoryObj<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

Default.args = {
    text: 'Button',
    size: 'sm',
    variant: 'primary',
}