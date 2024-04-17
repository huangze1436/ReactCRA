import React , { memo } from 'react'
// import {useSelector} from "react-redux"
import { useSelector , useDispatch} from 'react-redux';
import {increment, decrement} from '../store_hook/modulus/counter'

const reduxUseByHook = memo(()=>{
    // 获取数据 获取store中的数据 
    const {count} = useSelector((state)=>{
        return {
            count:state.counter.count
        }
    })
    const dispatch = useDispatch()
    function addNumberHandle (num , isAdd = true) {
        if (isAdd) {
            dispatch(increment(num))
        } else {
            dispatch(decrement(num))
        }   
    }
return (
    <div>
        <h1>redux-hook</h1>
        <h2>当前计数：{count}</h2>
        <button onClick={e=>{addNumberHandle(1)}}>1</button> 
        <button onClick={e=>{addNumberHandle(6)}}>6</button> 
        <button onClick={e=>{addNumberHandle(6,false)}}>-6</button> 
    </div>
)
})

export default reduxUseByHook