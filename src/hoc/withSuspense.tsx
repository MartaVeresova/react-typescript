import React, {Suspense} from 'react'
import {Preloader} from '../components/common/Preloader/Preloader';


export const withSuspense = (Component: JSX.Element) => {

    return <Suspense fallback={<Preloader/>}>
        {Component}
    </Suspense>
}