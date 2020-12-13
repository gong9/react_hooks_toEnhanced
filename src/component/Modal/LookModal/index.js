import React from 'react';
import Modal from '../index'
const LookModal = (props) => {
    const { item, modalshow, closeModal } = props
    return (
        <Modal className="lookModal" modalshow={modalshow} modalTitle="查看事件">
            <div>时间：{item.id}</div>
            <div>内容：{item.content}</div>
            <div>状态：{item.status ? "已完成" : "未完成"}</div>
            <button onClick={() => { closeModal() }}>确定</button>
        </Modal>
    );
}

export default LookModal;