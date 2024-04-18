import {React} from 'react'
import {Button, message} from 'antd'
import {useUserToken} from '../hooks'
import { useSelector, useDispatch } from 'react-redux'
import {changeUsername} from '../store_hook/modulus/username'

function PageBottom () {
    const {username} = useSelector((state)=>{
        return {
            username: state.username.username
        }
    })
    const dispatch = useDispatch();

    function exit () {
        if (!username) {
            message.warning('还没登录呢');
        } else {
            dispatch(changeUsername('未登录'))
        }
    }

    return (
        <div className="bottom">
            <div>
                <div>react learn</div>
                <div>anthor from hz</div>
                <div>用于学习react的各种案例</div>
            </div>
            <div>
                <Button type="primary" onClick={() => {exit()}}>退出</Button>
            </div>
            
        </div>
    )
}

export default PageBottom