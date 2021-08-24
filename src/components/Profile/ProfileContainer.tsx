import React, {Component, ComponentType} from 'react'
import s from './Profile.module.css'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    getUserProfile,
    getUserStatus,
    ProfileType,
    savePhoto,
    saveProfile,
    updateUserStatus,
} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends Component<PropsType> {

    refreshProfile() {
        const {match, authorizedUserId, history, getUserProfile, getUserStatus} = this.props
        let userId: number | null = Number(match.params.userId)
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                history.push('/login')
            }
        }
        if (userId) {
            getUserProfile(userId)
            getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
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
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

