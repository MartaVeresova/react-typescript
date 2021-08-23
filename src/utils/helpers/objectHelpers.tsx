import {UsersType} from '../../redux/users-reducer';

export const updateObjectInArray = (items: Array<UsersType>, itemId: string,  newObjProps: boolean) => {
    return items.map(u => u.id === itemId ? {...u, followed: newObjProps} : u)
}