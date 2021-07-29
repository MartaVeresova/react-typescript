import {
    addPost,
    InitialStateType,
    PostType,
    profileReducer,
    ProfileType,
    removePost,
    setStatus,
    setUserProfile
} from './profile-reducer';

let startState: InitialStateType
beforeEach(() => {
    startState = {
        postsData: [
            {id: '1', message: 'Hello', likesCount: 11},
            {id: '2', message: 'Buy', likesCount: 15},
            {id: '3', message: 'How are you?', likesCount: 7},
            {id: '4', message: 'I am fine, and you?', likesCount: 5},
        ] as Array<PostType>,
        profile: {
            aboutMe: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 1,
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            photos: {
                small: '',
                large: '',
            },
    } as ProfileType | null,
        status: '',
    }
});

test('new post should be added', () => {
    const newPostText = 'New Post'
    const action = addPost(newPostText);

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(5);
    expect(endState.postsData[4].message).toBe(newPostText);
    expect(endState.postsData[3].message).toBe('I am fine, and you?');
    expect(endState.postsData[4].likesCount).toBe(0);
});

test('user profile should be set the state', () => {
    const action = setUserProfile(startState.profile);

    const endState = profileReducer(startState, action)

    expect(endState.profile).not.toBe(null);
    expect(endState.profile).toBeDefined();
    expect(endState.profile).toStrictEqual(startState.profile);
    expect(endState.profile?.userId).toBe(1);
});

test('status profile should be set the state', () => {
    const status = 'new status'
    const action = setStatus(status);

    const endState = profileReducer(startState, action)

    expect(endState.status).toBe(status);
});

test('correct post should be removed', () => {
    const action = removePost('1');

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(3);
    expect(endState.postsData[3]).toBeUndefined();
    expect(endState.postsData[0].message).toBe('Buy');
    expect(endState.postsData[0].id).toBe('2');
    expect(endState.postsData[2].id).toBe('4');
});