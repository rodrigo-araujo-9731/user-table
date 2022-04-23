import React, {useState, useContext} from 'react'
import TableHeader from './TableHeader'
import UserEntry from './UserEntry'
import UserModal from '../modal/UserModal'
import { UsersDataContext } from '../../utils/usersContext'

import './users-table.css'

const UsersTable = () => {
  
    const [selected, setSelected] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    const {usersData, setUsersData} = useContext(UsersDataContext)

    const deleteUser = (id) => {
        let newUsersData = [...usersData]
        const index = usersData.findIndex((user)=> user.id === id)

        newUsersData.splice( index, 1 );
        setUsersData(newUsersData)
    }

    const moreInfo = (id) => {
      setModalVisible(true)
      setSelected(id)
    }
  return (
    <div className='table-container'>
        <table>
            <TableHeader />
            <tbody>
            {usersData.map((user, index) => {
                return(
                  <UserEntry
                    key={index}
                    id={user.id}
                    username={user.username}
                    email={user.email}
                    city={user.address.city}
                    hasCompany={user.company.name}
                    selected={selected}
                    moreInfo={moreInfo}
                    deleteUser={deleteUser}
                  />
                )
            })}
            </tbody>
      </table>
      {  modalVisible &&
      <UserModal 
          id={selected}
          setSelected={setSelected}
          deleteUser={deleteUser}
          moreInfo={moreInfo}
          setModalVisible={setModalVisible}
      />}
    </div>
  )
}

export default UsersTable