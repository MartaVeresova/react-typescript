import React from 'react'
import s from './App.module.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom'
import {ActionsTypes, RootStateType} from './redux/store';


export type AppPropsType = {
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
                    stateProfilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                    />}/>
                <Route exact path={'/dialogs'} render={() => <Dialogs
                    stateDialogsPage={props.state.dialogsPage}
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
