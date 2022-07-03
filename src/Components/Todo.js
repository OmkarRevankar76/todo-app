import React, { useEffect, useState } from 'react'
import './Todo.css'
import axios from 'axios'
//icon for header
import { AiFillAlipayCircle } from 'react-icons/ai'

import Table from './Table'

function Todo() {
  const [dataAll, setDataAll] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
      setDataAll(result.data)
    })
  }, [])

  return (
    <div>
      <h1 className="mainHeading">
        <AiFillAlipayCircle className="iconHeading" size={60} /> To-Do App
      </h1>

      <Table dataAll={dataAll} />
    </div>
  )
}

export default Todo
