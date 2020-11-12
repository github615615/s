import axios from 'axios';
let cancel_instance;
//let cancel2 = axios.CancelToken.source()
let instance = axios.create({ //接受一个参数config配置
    baseURL: 'https://api.apiopen.top/',
    params: {
        type: "image",
        page: 6,
        count: 2,
    },
    cancelToken: new axios.CancelToken(function(cancel) {
        cancel_instance = cancel
    })
    //cancelToken: cancel2.token  //这是新的取消请求，和上面的一样的
})
export default instance;
export {
    cancel_instance
}
/* export {
    cancel2
} */