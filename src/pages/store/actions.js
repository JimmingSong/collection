/*
 * @Author: Jimmy
 * @Date: 2018/11/26
 * @Project: collection
 */

export function getName(data) {
    return (dispatch,getState)=>{
        dispatch({ type: 'GET_NAME', data: data })
    }
}
export function setName(data) {
    return (dispatch,getState)=>{
        dispatch({type:'SET_NAME',data:data})
    }
}