import { ReactNode } from 'react';

export function AlertRoot({ children }: { children: ReactNode }) {
    return (
        <div className='alert'>
            {children}
        </div>
    )
}