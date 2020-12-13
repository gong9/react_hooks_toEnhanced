import React from 'react';
const TodoItem = (props) => {
    const { items, setStatus, lookModal, deleteItem,openEditModal } = props
    return (
        <li className="todoitems">
            <input className="item-status" type="checkbox" checked={items.status} onChange={() => { setStatus(items.id) }} />
            <span className="todo-text" style={{ textDecoration: items.status ? "line-through" : "none" }}>{items.content}</span>
            <button className="look" onClick={() => {
                lookModal(items)
            }}>查看</button>
            <button className="edit" onClick={()=>{openEditModal(items)}}>编辑</button>
            <button className="delete" onClick={() => { deleteItem(items.id) }}>删除</button>

        </li>
    );
}

export default TodoItem;