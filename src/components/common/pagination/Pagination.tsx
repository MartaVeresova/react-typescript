import React, {FC} from 'react';
import s from './Pagination.module.css';


export const Pagination: FC<UsersPropsType> = (props) => {

    const {totalUsersCount, currentPage, pageSize, onPageChanged} = props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(p => {
                    return (
                        <span key={p} className={currentPage === p ? s.selectedPage : ''}
                              onClick={e => onPageChanged(p)}>
                                {p}
                            </span>
                    )
                })
            }
        </div>
    )
}


//types
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}