import React, {FC, useState} from 'react';
import s from './Pagination.module.css';


export const Pagination: FC<UsersPropsType> = (props) => {

    const {totalItemsCount, currentPage, pageSize, onPageChanged, portionSize} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)
    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pagination}>
            {
                portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return (
                        <span key={p} className={currentPage === p ? s.selectedPage : s.pageNumber}
                              onClick={e => onPageChanged(p)}>
                                {p}
                            </span>
                    )
                })
            }
            {
                portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </div>
    )
}


//types
type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}