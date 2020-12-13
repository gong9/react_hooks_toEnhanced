import React, { useRef, useState } from 'react';
import Modal from '..';
const EditModal = (props) => {
    const { item, modalshow, closeModal, updataToData } = props,
        inputRef = useRef(),
        checkRef = useRef()


    // 更新
    const updataItem = (item) => {
        // 应该是在这里将内容和状态进行改变
        let content = inputRef.current.value
        let status = checkRef.current.checked
        updataToData(item.id, status, content)
        closeModal()

    }
    return (
        <Modal modalshow={modalshow} modalTitle="编辑事件">
            <div>时间：{item.id}</div>
            <div>内容:
                <textarea ref={inputRef} defaultValue={item.content}></textarea>
            </div>
            <div>状态：<input ref={checkRef} type="checkbox" defaultChecked={item.status}
            /></div>
            <button onClick={() => { updataItem(item) }}>更新</button>
        </Modal>
    );
}

export default EditModal;