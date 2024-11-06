import ChatCard from './ChatCard/ChatCard';

import './ChatList.scss';

const ChatList = () => {
    const data = [1, 2, 3]

    return (
        <div className='chat-lists'>
            <p className='title'>Messages</p>
            <div className='chats-wrapper'>
                {data.map((chat, index) => (
                    <>
                        <ChatCard />
                        {index !== data.length - 1 &&
                            <div className='divider'></div>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default ChatList;
