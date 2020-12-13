import React, { useRef } from 'react';
import './index.css'
const Input = (props) => {
    const { isShow, addItemData } = props,
        inputRef = useRef()

    const add = () => {
        // 将它放到外面的大数组对象中去
        addItemData(inputRef.current.value)
    }
    return (
        <>
            {
                isShow === true
                    ? (<div className="Input">
                        <input className="Input-input" type="text" ref={inputRef} placeholder="请输入待办事件" />
                        <button className="Input-add" onClick={add}>增加</button>
                        <div className="zhan"></div>
                    </div>)
                    : ''
            }
        </>

    );
}

export default Input;