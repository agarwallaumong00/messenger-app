import { useEffect, useState } from "react";

import { ChatRoom } from "models/MessengeApp";
import ChatRoomsList from "mockData/ChatRoomsList";

const useMessengerInternal = () => {
    const [selectedRoom, setSelectedRoom] = useState<ChatRoom | undefined>(undefined);

    useEffect(() => {
        setSelectedRoom(ChatRoomsList[0]);
    }, [])


    return {
        selectedRoom,
        setSelectedRoom
    }
}

export default useMessengerInternal;
export type UseMessengerReturnType = ReturnType<typeof useMessengerInternal>
