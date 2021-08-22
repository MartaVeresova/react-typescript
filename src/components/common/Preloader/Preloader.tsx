import React, {FC} from 'react';
import preloader from '../../../assets/images/preloader.svg';

export const Preloader: FC = () => {
    return <>
        <img src={preloader} alt={''}/>
    </>
}