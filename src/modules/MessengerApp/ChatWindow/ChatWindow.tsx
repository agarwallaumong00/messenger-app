import { useMessenger } from 'provider/MessengerProvider';
import Avatar from 'components/Avatar/Avatar';

import './ChatWindow.scss';

const ChatWindow = () => {
    const { selectedRoom } = useMessenger();

    return (
        <div className='chat-window'>
            <div className='room-info'>
                <Avatar size='sm' name={selectedRoom?.name || ''} />
                <p className='room-title'>{selectedRoom?.name}</p>
            </div>
            <div className='chat-box'>

            </div>
            <div className='chat-input'>
                <input
                    className='input-box'
                    placeholder='Type your message...'
                />
                <button className='send-msg'>Send</button>
            </div>
        </div>
    )
}

export default ChatWindow;
