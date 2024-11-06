import useMessengerInternal, { UseMessengerReturnType } from "hooks/useMessengerInternal";
import { createContext, ReactNode, useContext } from "react";

const initialContext: UseMessengerReturnType = {
    selectedRoom: undefined,
    roomChatData: [],
    onRoomSelect: () => {}
};

const MessengerContext = createContext(initialContext);

export const useMessenger = () => useContext(MessengerContext);

export const MessengerProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const value = useMessengerInternal();

    return (
        <MessengerContext.Provider value={value}>
            {children}
        </MessengerContext.Provider>
    )
}
