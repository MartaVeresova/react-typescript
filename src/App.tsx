import React from 'react'
import s from './App.module.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route exact path="/profile" render={() => <ProfileContainer/>}/>
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route exact path="/users" render={() => <UsersContainer/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route exact path="/music" render={() => <Music/>}/>
                <Route exact path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
