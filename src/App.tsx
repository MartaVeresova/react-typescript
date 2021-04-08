import React from 'react'
import s from './App.module.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogues} from './components/Dialogues/Dialogues'
import {Route} from 'react-router-dom'


function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route path='/profile' render={Profile}/>
                <Route path='/dialogues' render={Dialogues}/>
            </div>
        </div>
    )
}

export default App
