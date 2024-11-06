import Avatar from 'components/Avatar/Avatar';

import { ChatList } from 'models/MessengeApp';

import './ChatCard.scss';

interface Props {
    chat: ChatList
}

const ChatCard = (props: Props) => {
    const { chat } = props;
    const { name, lastMessage } = chat;

    return (
        <div className='chat-card'>
            <Avatar name={name} />
            <div className='info'>
                <p className='user-name'>{name}</p>
                <p className='last-msg'>{lastMessage}</p>
            </div>
        </div>
    )
}

export default ChatCard;
