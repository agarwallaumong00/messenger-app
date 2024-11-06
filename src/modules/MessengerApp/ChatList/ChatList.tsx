import React from 'react';

import ChatRoomsList from 'mockData/ChatRoomsList';
import ChatCard from './ChatCard/ChatCard';
import { useMessenger } from 'provider/MessengerProvider';

import './ChatList.scss';

const ChatList = () => {
    const {selectedRoom} = useMessenger();

    return (
        <div className='chat-lists'>
            <p className='title'>Messages</p>
            <div className='chats-wrapper'>
                {ChatRoomsList.map((chat, index) => (
                    <React.Fragment key={chat.id}>
                        <ChatCard chat={chat} isActive={chat.id === selectedRoom?.id} />
                        {index !== ChatRoomsList.length - 1 &&
                            <div className='divider'></div>
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default ChatList;
