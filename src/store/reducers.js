import {
    GET_DATA,
    ADD_VOTE,
    SET_TITLE,
    SET_TIME,
    SET_LIST
} from './types'
let defaultState = {
    list: [],
    title: '',
    time: '',
    voteList: [{
            title: "标题一",
            time: "创建于2019.09.20 21：28",
            chid: []
        },
        {
            title: "标题二",
            time: "创建于2019.10.20 09：10",
            chid: []
        }
    ]
}
export function data(state = defaultState, action) {
    switch (action.type) {
        case GET_DATA:
            {
                return {
                    list: action.list,
                    voteList: state.voteList,
                    time: state.time,
                    title: state.title
                }
            }
        case SET_LIST:
            {
                return {
                    list: action.list,
                    voteList: state.voteList,
                    time: state.time,
                    title: state.title
                }
            }
        case ADD_VOTE:
            {
                console.log(state.list)
                return {
                    list: [...state.list],
                    voteList: action.voteList,
                    time: state.time,
                    title: state.title
                }
            }
        case SET_TITLE:
            {
                return {
                    list: state.list,
                    voteList: state.voteList,
                    time: state.time,
                    title: action.title
                }
            }
        case SET_TIME:
            {
                return {
                    list: state.list,
                    voteList: state.voteList,
                    title: state.title,
                    time: action.time
                }
            }
        default:
            {
                return state
            }
    }
}