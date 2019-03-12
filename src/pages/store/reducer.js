/*
 * @Author: Jimmy
 * @Date: 2018/11/26
 * @Project: collection
 */
// 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux';
import defaultState from './store'

// 一个reducer就是一个函数
function DealName (state = defaultState.name, action) {
// 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'GET_NAME':
            return action.data;
        case 'SET_NAME':
            return action.data;
        default:
            return state;
    }
}
export default combineReducers({
    DealName,
})