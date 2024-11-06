import { MessengerProvider } from 'provider/MessengerProvider';
import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';

import './MessengerApp.scss';

const MessengerApp = () => {
    return (
        <MessengerProvider>
            <div className='messenger-app'>
                <ChatList />
                <ChatWindow />
            </div>
        </MessengerProvider>
    )
}

export default MessengerApp;
