import React, {Component, ComponentType} from 'react'
import s from './Profile.module.css'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus,} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        const {match, authorizedUserId, history, getUserProfile, getUserStatus} = this.props
        let userId = match.params.userId
        if (!userId) {
            userId = JSON.stringify(authorizedUserId)
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfile(userId)
        getUserStatus(userId)
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


//types
type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

