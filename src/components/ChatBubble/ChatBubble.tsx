import { useMemo } from 'react';
import { ChatRoomData } from 'models/MessengeApp';

import './ChatBubble.scss';
import moment from 'moment';

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
