import { useEffect, useRef, useState } from 'react';

import { useMessenger } from 'provider/MessengerProvider';
import Avatar from 'components/Avatar/Avatar';
import ChatBubble from 'components/ChatBubble/ChatBubble';

import './ChatWindow.scss';

const ChatWindow = () => {
    const chatRef = useRef<HTMLDivElement>(null);
    const { selectedRoom, roomChatData, sendMessage } = useMessenger();

    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [selectedRoom])
    
    const onSendMessage = () => {
        sendMessage(message);
        setMessage('');
        setTimeout(() => {
            if (chatRef.current) {
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
        }, 0);
    }

    const onEnter = (keyCode: number) => {
        if (keyCode === 13) {
            onSendMessage();
        }
    }

    return (
        <div className='chat-window'>
            <div className='room-info'>
                <Avatar size='sm' name={selectedRoom?.name || ''} />
                <p className='room-title'>{selectedRoom?.name}</p>
            </div>
            <div className='chat-box' ref={chatRef}>
                {roomChatData.map((data, index) => (
                    <ChatBubble key={index} data={data} />
                ))}
            </div>
            <div className='chat-input'>
                <input
                    className='input-box'
                    placeholder='Type your message...'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => onEnter(event.keyCode)}
                />
                <button
                    className='send-msg'
                    disabled={!message}
                    onClick={onSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatWindow;
