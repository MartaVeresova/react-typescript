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
import {dialoguesData, messagesData, postsData} from './index';
import {PostPropsType} from './components/Profile/MyPosts/Post/Post';
import {MessageItemPropsType} from './components/Dialogues/Message/Message';
import {DialogItemPropsType} from './components/Dialogues/DialogItem/DialogItem';

export type AppPropsType = {
    postsData: Array<PostPropsType>
    dialoguesData: Array<DialogItemPropsType>
    messagesData: Array<MessageItemPropsType>
}


function App(props: AppPropsType) {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route exact path="/profile" render={() => <Profile postsData={postsData}/>}/>
                <Route exact path="/dialogues" render={() => <Dialogues dialoguesData={dialoguesData} messagesData={messagesData}/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route exact path="/music" render={() => <Music/>}/>
                <Route exact path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
