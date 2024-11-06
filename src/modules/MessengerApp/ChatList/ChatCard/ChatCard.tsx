import Avatar from 'components/Avatar/Avatar';

import { ChatRoom } from 'models/MessengeApp';
import { useMessenger } from 'provider/MessengerProvider';

import './ChatCard.scss';

interface Props {
    chat: ChatRoom,
    isActive: boolean
}

const ChatCard = (props: Props) => {
    const { setSelectedRoom } = useMessenger();
    const { chat, isActive } = props;
    const { name, lastMessage } = chat;

    return (
        <div className={`chat-card${isActive ? ' active' : ''}`} onClick={() => setSelectedRoom(chat)}>
            <Avatar name={name} />
            <div className='info'>
                <p className='user-name'>{name}</p>
                <p className='last-msg'>{lastMessage}</p>
            </div>
        </div>
    )
}

export default ChatCard;
