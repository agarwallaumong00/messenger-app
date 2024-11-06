import { useMemo } from 'react';

import moment from 'moment';

import { ChatRoomData } from 'models/MessengeApp';

import './ChatBubble.scss';

interface Props {
    data: ChatRoomData
}

const ChatBubble = ({data}: Props) => {
    const { isReceived, message, timestamp } = data;

    const chatBubbleClasses = `chat-bubble ${isReceived ? 'received' : 'sent'}`;

    const time = useMemo(() => moment(timestamp).format('HH:mm'),[timestamp])

    return (
        <div className={chatBubbleClasses}>
            <p>{message}</p>
            <p className='time-stamp'>{time}</p>
        </div>
    )
}

export default ChatBubble;
