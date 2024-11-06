import { ChatRoomData } from "models/MessengeApp";

const Alice: ChatRoomData[] = [
    {
        "message": "Hey! How’s it going?",
        "timestamp": "2024-11-06T09:00:00Z",
        "isReceived": true
    },
    {
        "message": "Hey Alice! All good here. How about you?",
        "timestamp": "2024-11-06T09:05:00Z",
        "isReceived": false
    },
    {
        "message": "Pretty good! Just busy with work. Got any plans for the weekend?",
        "timestamp": "2024-11-06T09:10:00Z",
        "isReceived": true
    },
    {
        "message": "Thinking of going for a hike. Need some fresh air!",
        "timestamp": "2024-11-06T09:15:00Z",
        "isReceived": false
    },
    {
        "message": "That sounds awesome. Where are you planning to go?",
        "timestamp": "2024-11-06T09:17:00Z",
        "isReceived": true
    },
    {
        "message": "Not sure yet, maybe up in the hills. Want to join?",
        "timestamp": "2024-11-06T09:20:00Z",
        "isReceived": false
    },
    {
        "message": "I'd love to! Let me know the details, and I’ll be there.",
        "timestamp": "2024-11-06T09:25:00Z",
        "isReceived": true
    },
    {
        "message": "Will do! Let’s meet tomorrow to plan it out.",
        "timestamp": "2024-11-06T09:30:00Z",
        "isReceived": false
    },
    {
        "message": "Sounds good! Are we still on for tomorrow?",
        "timestamp": "2024-11-06T10:15:00Z",
        "isReceived": true
    },
    {
        "message": "Yes, looking forward to it!",
        "timestamp": "2024-11-06T10:20:00Z",
        "isReceived": false
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
