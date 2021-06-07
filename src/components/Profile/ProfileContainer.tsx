import React from 'react'
import s from './Profile.module.css'
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

