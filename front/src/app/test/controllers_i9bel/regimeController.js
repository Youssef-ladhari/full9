import  axios from  'axios'
import * as constant from '../requests'
export default class regimeController {
Add(data) {
    return axios.post(constant.CREATE_REGIME_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(constant.GET_REGIME_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneregimeById(id) {
    return axios.get(constant.get+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateoneregimeById(id,data) {
    return axios.put(constant.UPDATEONE_REGIME_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    deleteoneregimeById(id) {
    return axios.delete(constant.UPDATEONE_REGIME_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}