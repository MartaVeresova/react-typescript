import React from 'react'
import s from './App.module.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogues} from './components/Dialogues/Dialogues'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom'
import {RootStateType} from './redux/state';

export type AppPropsType = {
    appState: RootStateType
}


function App(props: AppPropsType) {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route exact path="/profile" render={() => <Profile
                    stateData={props.appState.profilePage}/>}/>
                <Route exact path="/dialogues" render={() => <Dialogues
                    stateData={props.appState.dialoguesPage}/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route exact path="/music" render={() => <Music/>}/>
                <Route exact path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
