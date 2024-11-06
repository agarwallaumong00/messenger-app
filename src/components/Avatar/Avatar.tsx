import { useMemo } from 'react';

import './Avatar.scss';

interface Props {
    name: string,
    size?: 'sm' | 'lg'
}

const Avatar = ({name, size = 'lg'}: Props) => {
    const initials = useMemo(() => {
        const nameArr = name.split(' ');
        return `${nameArr[0][0]}${nameArr.length > 1 ? nameArr[1][0] : nameArr[0][1]}`.toUpperCase();
    }, [name]);

    return (
        <div className={`avatar size-${size}`}>
            <span>{initials}</span>
        </div>
    )
}

export default Avatar;
