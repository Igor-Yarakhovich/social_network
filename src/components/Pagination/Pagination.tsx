import React, {useEffect, useState} from 'react';
import styles from './Pagination.module.css'

type PageCountPropsType = {
    totalItemsCount: number,
    currentPage: number,
    pageSize: number
    onPageChanged: (p: number) => void
    portionSize: number
}

export default function Pagination({
                                       totalItemsCount,
                                       currentPage,
                                       pageSize,
                                       onPageChanged, portionSize
                                   }: PageCountPropsType) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage, portionSize]);

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span
                    className={currentPage === p ? `${styles.selectedActivePage} ${styles.selectedPage}` : styles.selectedPage}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }
                    }>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>
        }
    </div>
}
