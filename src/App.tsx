import React, {Component, ComponentType} from 'react'
import s from './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/store';
import {Preloader} from './components/common/Preloader/Preloader';


class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route exact path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
})

//types
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType


const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


export const SamuraiJSApp = () => {
   return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}