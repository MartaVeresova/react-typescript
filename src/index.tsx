import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {v1} from 'uuid';


export const postsData = [
    {id: v1(), message: 'Hello', likesCount: 11},
    {id: v1(), message: 'Buy', likesCount: 15},
]
export const dialoguesData = [
    {id: v1(), name: 'Marta'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Vera'},
    {id: v1(), name: 'Anton'},
    {id: v1(), name: 'Vanya'},
]
export const messagesData = [
    {id: v1(), messageContent: 'Hello'},
    {id: v1(), messageContent: 'How are you?'},
    {id: v1(), messageContent: 'Yo'},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postsData={postsData} dialoguesData={dialoguesData} messagesData={messagesData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
