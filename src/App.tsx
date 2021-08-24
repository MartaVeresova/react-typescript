import React, {Component, ComponentType} from 'react'
import s from './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {HashRouter, Route, withRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/store';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);


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
                    <Route exact path="/profile/:userId?" render={() => withSuspense(<ProfileContainer/>)}/>
                    <Route exact path="/dialogs" render={() => withSuspense(<DialogsContainer/>)}/>
                    <Route exact path="/users" render={() => withSuspense(<UsersContainer/>)}/>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}