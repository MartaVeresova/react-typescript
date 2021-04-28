import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
    state,
    addMessage,
    addPost,
    RootStateType,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from './redux/state';
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    appState={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updateNewPostText={updateNewPostText}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(state)
subscribe(() => {
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
