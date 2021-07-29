import {authReducer, InitialStateType, setAuthUserData} from './auth-reducer';


let startState: InitialStateType
beforeEach(() => {
    startState = {
        userId: 1,
        email: '',
        login: '',
        captcha: false,
        isAuth: false,
    }
});

test('initialized should be set', () => {
    const action = setAuthUserData(2, 'test@gmail.com', 'testLogin', false, true);

    const endState = authReducer(startState, action)

    expect(endState.userId).toBe(2);
    expect(endState.email).toBe('test@gmail.com');
    expect(endState.isAuth).toBe(true);
});