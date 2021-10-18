import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
    <div className={s.item}>
        <div className={s.content}>
            <img src='https://gtals.ru/wp-content/uploads/2015/07/gta5_franklin_clinton_list.jpg' />
            <div className={s.messageWrapper}>
                <div className={s.message}>{ props.message }</div>
                <span className={s.like}>like { props.likesCount }</span>
            </div>
        </div>
    </div>
    )
}

export default Post;