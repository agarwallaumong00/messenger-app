import { ChatRoomData } from "models/MessengeApp";

const Alice: ChatRoomData[] = [
    {
        "isReceived": true,
        "message": "Are we still on for tomorrow?",
        "timestamp": "2024-11-06T10:15:00Z"
    },
    {
        "isReceived": false,
        "message": "Yes, looking forward to it!",
        "timestamp": "2024-11-06T10:20:00Z"
    }
];

const Bob: ChatRoomData[] = [
    {
        "isReceived": true,
        "message": "Thanks for the update!",
        "timestamp": "2024-11-05T14:10:00Z"
    },
    {
        "isReceived": false,
        "message": "Anytime!",
        "timestamp": "2024-11-05T14:12:00Z"
    }
];

const Charlie: ChatRoomData[] = [
    {
        "isReceived": true,
        "message": "Catch you later!",
        "timestamp": "2024-11-04T18:45:00Z"
    },
    {
        "isReceived": false,
        "message": "Sure, take care!",
        "timestamp": "2024-11-04T18:47:00Z"
    }
];

const Dana: ChatRoomData[] = [
    {
        "isReceived": true,
        "message": "Could you send me the files?",
        "timestamp": "2024-11-03T09:00:00Z"
    },
    {
        "isReceived": false,
        "message": "Sure, I'll send them by evening.",
        "timestamp": "2024-11-03T09:05:00Z"
    }
]
 
const RoomDataMapping:{[key: number]: ChatRoomData[]} = {
    1: Alice,
    2: Bob,
    3: Charlie,
    4: Dana
};

export default RoomDataMapping;
