import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';

import './MessengerApp.scss';

const MessengerApp = () => {
    return (
        <div className='messenger-app'>
            <ChatList />
            <ChatWindow />
        </div>
    )
}

export default MessengerApp;
