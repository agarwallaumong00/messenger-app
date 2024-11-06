import chatsList from 'mockData/chats';
import ChatCard from './ChatCard/ChatCard';

import './ChatList.scss';

const ChatList = () => {

    return (
        <div className='chat-lists'>
            <p className='title'>Messages</p>
            <div className='chats-wrapper'>
                {chatsList.map((chat, index) => (
                    <>
                        <ChatCard chat={chat} />
                        {index !== chatsList.length - 1 &&
                            <div className='divider'></div>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default ChatList;
