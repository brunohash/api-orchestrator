import { createContext, Dispatch, SetStateAction, useState } from 'react';

type DnDContextType = {
    type: string;
    setType: Dispatch<SetStateAction<string>>;
}
export const DnDContext = createContext({} as DnDContextType);

type Props = {
    children: React.ReactNode;
};
export const DnDProvider = ({ children }: Props) => {
    const [type, setType] = useState<string>('');

    return (
        <DnDContext.Provider value={{ type, setType }}>
            {children}
        </DnDContext.Provider>
    );
}

