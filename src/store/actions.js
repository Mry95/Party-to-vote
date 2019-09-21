import {
    GET_DATA,
    SET_LIST,
    ADD_VOTE
} from './types'
import axios from 'axios'
export function getList(list) {
    return (dispatch) => {
        axios.get('/list').then(res => {
            dispatch({
                type: GET_DATA,
                list: res.data.data
            })
        })
    }
}
export function setList(list) {
    return {
        type: SET_LIST,
        list
    }
}
export function setVoteList(voteList) {
    return {
        type: ADD_VOTE,
        voteList
    }
}