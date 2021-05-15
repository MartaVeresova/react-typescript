import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {RootStateType} from './redux/store';
import {store} from './redux/redux-store';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    store={store}
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
