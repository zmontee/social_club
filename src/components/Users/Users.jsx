import React, {useEffect} from 'react';
import s from './Users.module.css';
import {connect} from "react-redux";
import UsersItem from "./UsersItem/UsersItem";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";
import * as axios from "axios";

const Users = (props) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            })
    }, [])

    const users = props.users.map(u => <UsersItem key={u.id}
                                                    id={u.id}
                                                    name={u.name}
                                                    imgURL={u.photos.small}
                                                    status={u.status}
                                                    isFollow={u.followed}
                                                    follow={props.follow}
                                                    unfollow={props.unfollow}
    />)

    return (
        <div className={s.usersContent}>
            {users}
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.usersPage.users
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);