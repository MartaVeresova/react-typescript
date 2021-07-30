import {
    followSuccess,
    InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollowSuccess,
    usersReducer,
    UsersType
} from './users-reducer';

let startState: InitialStateType
beforeEach(() => {
    startState = {
        users: [
            {
                id: '5',
                followed: false,
                name: '',
                status: '',
                uniqueUrlName: '' as string | null,
                location: {
                    city: '',
                    country: '',
                },
                photos: {
                    small: '',
                    large: '',
                }
            },
            {
                id: '6',
                followed: false,
                name: '',
                status: '',
                uniqueUrlName: '' as string | null,
                location: {
                    city: '',
                    country: '',
                },
                photos: {
                    small: '',
                    large: '',
                }
            },
            {
                id: '7',
                followed: true,
                name: '',
                status: '',
                uniqueUrlName: '' as string | null,
                location: {
                    city: '',
                    country: '',
                },
                photos: {
                    small: '',
                    large: '',
                }
            },
        ] as Array<UsersType>,
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 2,
        isFetching: true,
        followingInProgress: [] as string[],
    }
});

test('follow for user should be set', () => {
    const action = followSuccess('5');

    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(true);
    expect(endState.users[1].followed).toBe(false);
});

test('unfollow for user should be set', () => {
    const action = unfollowSuccess('7');

    const endState = usersReducer(startState, action)

    expect(endState.users[2].followed).toBe(false);
    expect(endState.users[0].followed).toBe(false);
});

test('users should be set the state', () => {
    const action = setUsers(startState.users);

    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(3);
    expect(endState.users[0].id).toBe('5');
});

test('current page should be set the state', () => {
    const action = setCurrentPage(3);

    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(3);
});

test('total users count should be set the state', () => {
    const action = setTotalUsersCount(2);

    const endState = usersReducer(startState, action)

    expect(endState.totalUsersCount).toBe(2);
});

test(`fetching don't should be set`, () => {
    const action = toggleIsFetching(false);

    const endState = usersReducer(startState, action)

    expect(endState.isFetching).toBe(false);
});

test('value must be written to the followInProgress array', () => {
    const action = toggleIsFollowingProgress(true, '5');

    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress.length).toBe(1);
    expect(endState.followingInProgress[0]).toBe('5');
});

test(`value don\'t must be written to the followInProgress array`, () => {
    const action = toggleIsFollowingProgress(false, '7');

    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress.length).toBe(0);
});