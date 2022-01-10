import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch} from 'react-redux';
import {setCurrentPage, setTotalUsersCount} from "../../redux/usersReducer";

type PageCountPropsType = {
    totalUsersCount: number,
    currentPage: number,
    pageSize: number
}

export default function Pagination(props: PageCountPropsType) {

    const dispatch = useDispatch()

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setCurrentPage(newPage))
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(setTotalUsersCount(parseInt(event.target.value, 10)))
    };

    return (
        <TablePagination
            component="div"
            count={props.totalUsersCount}
            page={props.currentPage}
            onPageChange={handleChangePage}
            rowsPerPage={props.pageSize}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
