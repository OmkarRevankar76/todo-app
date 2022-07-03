import React, { useEffect, useState } from 'react'
import './Table.css'
import UserDetails from './userDetails'

//importing icon for close button
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Table({ dataAll }) {
  const [name, setName] = useState('')
  // const [hidden,setHidden]=useState(false)

  const [showUserData, setShowUserData] = useState()
  const [userData, setUserData] = useState()
  const [order, setOrder] = useState(true) //  function hiddenFiles(){
  //   setHidden(true)
  const [data, setData] = useState(dataAll)

  console.log(data)
  //  }

  //  function closeButton(){
  //   setHidden(false)
  //  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      setUserData(await response.json())
    }
    fetchData()
  }, [])

  function changeRow() {
    const result = dataAll.sort((a, b) => a.name.localeCompare(b.name))
    // setDataAll(result)
  }
  useEffect(() => {}, [showUserData])

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value)
        }}
        className="inputSearch"
        type="text"
        placeholder="search...."
      />

      {!isNaN(showUserData) && (
        <>
          <UserDetails
            userData={userData[showUserData]}
            title={dataAll[showUserData].title}
            Allid={dataAll[showUserData].id}
          />
          <AiOutlineCloseCircle
            onClick={() => setShowUserData()}
            size={25}
            className="iconInRed"
          />
        </>
      )}

      <table className="table tableTopCustom">
        <thead>
          <tr>
            <th onClick={changeRow} scope="col">
              ToDo ID
            </th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {dataAll
            .filter((event) => {
              if (name === '') {
                return event
              } else if (
                event.title
                  .toLocaleLowerCase()
                  .includes(name.toLocaleLowerCase())
              ) {
                return event
              }
            })
            .map((item, index) => (
              <tr key={item.userId}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                {item.completed ? (
                  <td className="greenColor">Complete</td>
                ) : (
                  <td className="redColor">Incomplete</td>
                )}
                <td>
                  <button
                    onClick={() => setShowUserData(index)}
                    type="button"
                    class="btn btn-outline-light"
                  >
                    View User
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
