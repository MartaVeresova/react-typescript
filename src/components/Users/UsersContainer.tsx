import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';


type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)