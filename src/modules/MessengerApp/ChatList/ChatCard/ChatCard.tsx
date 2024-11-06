import Avatar from 'components/Avatar/Avatar';

import './ChatCard.scss';

const ChatCard = () => {
    return (
        <div className='chat-card'>
            <Avatar name='Umang Agarwalla' />
            <div className='info'>
                <p className='user-name'>Eten Hunt</p>
                <p className='last-msg'>Thank you very much. I’m glad</p>
            </div>
        </div>
    )
}

export default ChatCard;
