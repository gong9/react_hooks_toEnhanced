import React, { useState } from 'react';
import './App.css';
import Headers from './component/Header/header.jsx'
import Input from './component/Input'
import TodoItem from './component/TodoItems';
import LookModal from './component/Modal/LookModal';
import EditModal from './component/Modal/EditModal';
function App() {
  const [isShow, setIsShow] = useState(true)
  const [items, setItems] = useState([{
    id: 1,
    status: true,
    content: '今天必须写完这个react-hooks的demo'
  },
  {
    id: 2,
    status: true,
    content: '今天下午必须要把这个写完'
  }])
  const [isShowModal, setShowModal] = useState(false)
  const [isShowEditModal,setShowEditModal]=useState(false)
  const [current, setCurrent] = useState({})

  const setStatus = (id) => {
    // 改变状态
    setItems(items.map(item => {
      if (item.id === id) {
        let obj = {}
        obj = {
          ...item,
          status: !item.status
        }
        return obj
      } else {
        return item
      }
    }))
  }
  // 保存新加数据
  const addItemData = (data) => {
    setItems([...items, {
      id: items[items.length - 1].id + 1,
      status: false,
      content: data
    }])

  }
  // 删除某条数据
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  // 更新某条数据
  const updataToData = (id, status, content) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          id: id,
          status: status,
          content: content
        }
      } else {
        return item
      }
    }))
  }
  // 打开查看弹框
  const lookModal = (item) => {
    setShowModal(!isShowModal)
    setCurrent({ ...item })

  }
  // 打开编辑弹框
  const openEditModal=(item)=>{
    setShowEditModal(true)
    setCurrent({ ...item })
  }
  // 关闭查看弹框
  const closemodal = () => {
    setShowModal(false)
  }
  // 关闭编辑弹框
  const closeEditModal=()=>{
    setShowEditModal(false)
  }

  return (
    <div className="mydotos">
      <LookModal item={current} modalshow={isShowModal} closeModal={closemodal} />
      <EditModal item={current} modalshow={isShowEditModal} updataToData={updataToData} closeModal={setShowEditModal} />
      <Headers isShow={() => { setIsShow(!isShow) }} />
      <Input isShow={isShow} addItemData={addItemData} />
      <ul>
        {items.map(item => {
          return (<TodoItem items={item}
            setStatus={setStatus}
            key={item.id}
            lookModal={lookModal}
            openEditModal={openEditModal}
            deleteItem={deleteItem}
          />)
        }
        )}
      </ul>
    </div>
  );
}

export default App;
