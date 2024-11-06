import { useMemo } from 'react';

import './Avatar.scss';

interface Props {
    name: string
}

const Avatar = ({name}: Props) => {
    const initials = useMemo(() => {
        const nameArr = name.split(' ');
        return `${nameArr[0][0]}${nameArr.length > 1 ? name[1][0] : name[0][1]}`.toUpperCase();
    }, [name]);

    return (
        <div className='avatar'>
            <span>{initials}</span>
        </div>
    )
}

export default Avatar;
