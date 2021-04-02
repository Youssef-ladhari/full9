import axios from 'axios';
import * as Constant from '../pages/constant';

export default class ClientContoller{

    authentificate(data){
        return axios.post(Constant.SIGNIN_CLIENT_URL, data).then(res =>{
            return res
        }).catch(err =>{
            return err
        })
    }

    AddClient(data){
        return axios.post(Constant.SIGNUP_CLIENT_URL, data).then(res =>{
            return res
        }).catch(err =>{
            return err
        })
    }

    LogOut(){
        return axios.post(Constant.SIGNOUT_CLIENT_URL).then(res =>{
            return res
        }).catch(err =>{
            return err
        })
    }
    ForgetPass(data){
        return axios.post(Constant.FORGETPASSWORD_CLIENT_URL, data).then(res =>{
            return res
        }).catch(err =>{
            return err
        })
    }
    
    ResetPass(data){
        return axios.post(Constant.RESETPASSWORD_CLIENT_URL, data).then(res =>{
            return res
        }).catch(err =>{
            return err
        })
    }
















}