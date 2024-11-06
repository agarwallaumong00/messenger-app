import { useEffect, useState } from "react";

import { ChatRoom, ChatRoomData } from "models/MessengeApp";
import ChatRoomsList from "mockData/ChatRoomsList";
import RoomDataMapping from "mockData/RoomData";

const useMessengerInternal = () => {
    const [selectedRoom, setSelectedRoom] = useState<ChatRoom | undefined>(undefined);
    const [roomChatData, setRoomChatData] = useState<ChatRoomData[]>([]);

    useEffect(() => {
        onRoomSelect(ChatRoomsList[0]);
    }, [])

    const onRoomSelect = (room: ChatRoom) => {
        setSelectedRoom(room);
        setRoomChatData(RoomDataMapping[room.id]);
    }

    return {
        selectedRoom,
        roomChatData,
        onRoomSelect,
    }
}

export default useMessengerInternal;
export type UseMessengerReturnType = ReturnType<typeof useMessengerInternal>
