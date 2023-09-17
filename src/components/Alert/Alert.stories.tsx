import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';
import { IAlert } from './IAlert';

const meta: Meta = {
    title: 'Components/Alert',
    component: Alert.Root, 
    argTypes: {
        children: {
            description: "Permite passar qualquer tipo de conteúdo no corpo do componente Alert.Root"
        }, 
        title: {
            control: { type: 'text' },
            description: 'Defini um título',
        },
        variant: {
            control: { type: 'select', },
            description: 'Defini a cor do título',
            options: ['primary', 'danger', 'warning'],
            table: { defaultValue: { summary: 'primary' } },
        },
        hasCloseButton: {
            control: { type: 'boolean' },
            description: 'Defini se o header do componente irá ter ou não um botão de fechar',
            table: { defaultValue: { summary: false } },
        },
        description: {
            control: { type: 'text' },
            description: 'Defini uma descrição',
        },
    },
};

export default meta;

export const Default: StoryObj<IAlert> = ({ description, title, variant, hasCloseButton }: IAlert) => (
    <Alert.Root>
        <Alert.Title variant={variant} title={title} hasCloseButton={hasCloseButton}/>
        <Alert.Description description={description}/>
    </Alert.Root>
);

Default.args = {
    title: 'Alert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus nibh, et volutpat sapien. Sed ut mi id augue pretium pellentesque non sed neque. In sed tortor in purus dignissim efficitur non ac enim.',
    variant: 'primary',
    hasCloseButton: false,
};