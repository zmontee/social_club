import {FOLLOW, SET_USERS, UNFOLLOW} from "../types";

const initialState = {
    users: [
/*        {
            id: 1,
            name: 'Andrey',
            imgURL: 'https://img.gta5-mods.com/q95/images/trevor-meth-face-no-more/70a568-1.png',
            location: 'Kyiv',
            status: 'cool',
            isFollow: false
        },
        {
            id: 2,
            name: 'Alexandr',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0RG6yfru4nx0adZ_g5o1PcuWAQphb1bsQKJWxDX4p63UkrQSytICp3T8iOi8uG2SRQo&usqp=CAU',
            location: 'Kyiv',
            status: 'this is me',
            isFollow: true
        },
        {
            id: 3,
            name: 'Elsa',
            imgURL: 'https://i.pinimg.com/originals/6e/00/45/6e0045b251e705cf39fa691943898e2b.jpg',
            location: 'LA',
            status: 'enjoy',
            isFollow: true
        },
        {
            id: 4,
            name: 'Dean',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4vOcot_DOPoDCRRJJNYKUvfjWQzNJMTsZtoAhu0sxhg4rKRsYPKeMgATH4xL51PBSI0&usqp=CAU',
            location: 'Kansas',
            status: 'I am a supernatural',
            isFollow: false
        },
        {
            id: 5,
            name: 'Vasyliy',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztsDhvUtj-dnYZ3YiMsDWfzklvZ5gnR-da0kFvsymkp41Y9y8x_NpI99Mhb79ilmmaDA&usqp=CAU',
            location: 'Monte',
            status: "Let's go",
            isFollow: true
        },
        {
            id: 6,
            name: 'Kate',
            imgURL: null,
            location: 'Odessa',
            status: 'Drink vodka and play dotka',
            isFollow: false
        }*/
    ]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;