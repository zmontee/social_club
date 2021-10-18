import React from 'react';
import s from './UsersItem.module.css'

const UsersItem = (props) => {
    const followClick = () => {
        debugger;
        props.follow(props.id);
    }

    const unfollowClick = () => {
        props.unfollow(props.id);
    }

    return (
        <div className={s.userCard}>
            <img src={props.imgURL === null ?  'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png' : props.imgURL} alt="avatar" />
            <h3>{props.name}</h3>
            <p>{props.status}</p>
            {props.isFollow ?
                <button className={s.follow} onClick={unfollowClick}>
                    unfollow
                </button>
                :
                <button className={s.follow} onClick={followClick}>
                    follow
                </button>
            }

            <p className={s.location}>{props.location}</p>
        </div>
    )
}

export default UsersItem;