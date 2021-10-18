import React, {useEffect} from 'react';
import s from './Users.module.css';
import {connect} from "react-redux";
import UsersItem from "./UsersItem/UsersItem";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";
import * as axios from "axios";

const Users = ({setUsers,
                   users,
                   pageSize,
                   totalUsersCount,
                   currentPage,
                   follow,
                   unfollow,
                   setCurrentPage
               }) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            })
    }, [])

    const pages = [];

    for(let i = 1; i <= Math.ceil(totalUsersCount/pageSize); i++) {
        pages.push(i);
    }

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            })
    }

    return (
        <div className={s.usersContent}>
            <div className={s.pagination}>
                {pages.map(p => (
                    <span className={`${currentPage === p && s.selected} ${s.page}`}
                          onClick={(e) => handlePageChange(p)}
                    >
                        {p}
                    </span>
                ))}
            </div>
            <div className={s.usersWrapper}>
                {users.map(u => <UsersItem key={u.id}
                                           id={u.id}
                                           name={u.name}
                                           imgURL={u.photos.small}
                                           status={u.status}
                                           isFollow={u.followed}
                                           follow={follow}
                                           unfollow={unfollow}
                />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

const mapDispatchToProps = dispatch => ({
    follow: (userId) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);