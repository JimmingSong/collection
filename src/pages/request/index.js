/*
 * @Author: Jimmy
 * @Date: 2018/11/29
 * @Project: collection
 */
import axios from 'axios'

// axios.defaults.proxy = {
//     host:'http://120.78.201.156',
//     port:3000
// };
axios.defaults.headers = {
    // 'Access-Control-Allow-Origin':'*',
    // "Access-Control-Allow-Headers":"Authorization,Origin, X-Requested-With, Content-Type, Accept"
    // "Access-Control-Allow-Methods":"GET,POST"
    // 'X-Requested-With': 'XMLHttpRequest',
}
axios.defaults.baseURL = 'http://120.78.201.156';
// axios.defaults.withCredentials = true;


axios.interceptors.request.use((req)=>{
    console.log(req);
    return req;
})

const req = {
    getUserInfo: async()=>{
        const res = await axios.get('/user');
        return res.data;
    }
}
export default req;
