import React from "react";
import { useUserToken , useScroll} from "../hooks";
import { Button,message } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import {changeUsername} from '../store_hook/modulus/username'


function PageTop () {
    const [scrollX, scrollY] = useScroll()
    const {username} = useSelector((state)=>{
        return {
            username:state.username.username
        }
    })
    const dispatch = useDispatch();
    const logIn = function () {
        if (username == '未登录') {
           dispatch(changeUsername('黄泽黄泽'))
        } else {
            message.warning('登陆过了 点啥呀');
        }
       
    }
    return (
        <div className="header-top">
            <div className="top">
                Hi! {username} scrollX :{scrollX} - scrollY :{scrollY}
            </div>
            <Button onClick={()=>{logIn()}}>一键登录</Button>
        </div>
    )
}

export default PageTop