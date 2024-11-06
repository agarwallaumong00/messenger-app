export interface ChatRoom {
    id: number,
    name: string,
    lastMessage: string
}

export interface ChatRoomData {
    isReceived: boolean,
    message: string,
    timestamp: string
}
