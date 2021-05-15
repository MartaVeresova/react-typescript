import React from 'react'
import s from './App.module.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom'
import {ActionsTypes, RootStateType, StoreType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


export type AppPropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}


function App(props: AppPropsType) {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route exact path={'/profile'} render={() => <Profile
                    store={props.store}
                    />}/>
                <Route exact path={'/dialogs'} render={() => <DialogsContainer
                    store={props.store}
                    dispatch={props.dispatch}
                    />}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route exact path="/music" render={() => <Music/>}/>
                <Route exact path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
