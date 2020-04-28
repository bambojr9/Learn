import * as Types from '../constants/ActionTypes'
const axios = require('axios');
export const actFetchDataRequest = () =>{
    return (dispatch)=>{
        return  axios
        .get('https://thedynamiteshop99.firebaseio.com/.json')
        .then((res) => {
          // this.setState({ data: res.data });
        dispatch(actFetchData(res.data))
        })
        .catch((err) => console.log(err));
    }
}
export const actFetchData = (database) =>{
    return {
        type: Types.FETCH_DATABASE,
        database
    }
}