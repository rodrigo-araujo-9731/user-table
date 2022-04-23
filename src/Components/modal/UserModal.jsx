import React, {useContext, useState, useEffect} from 'react'
import "./user-modal.css";
import {UsersDataContext} from '../../utils/usersContext'
import EditUser from './EditUser'
import ActionButton from '../common/ActionButton';

import {FaTrashAlt, FaPencilAlt, FaTimesCircle, FaUndoAlt, FaCheck} from "react-icons/fa";


const UserModal = ({id, setModalVisible, deleteUser, setSelected}) => {
    const {usersData, setUsersData} = useContext(UsersDataContext)
    const [isEdit, setIsEdit] = useState(false)
    const [todos, setTodos] = useState([])
    const [currentUser, setCurrentUser] = useState(
        Object.values(usersData).find((obj) => {
            return obj.id === id
        })
    )

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then(res => res.json())
            const todosCompleted = response.filter(item => item.completed === true).length
            setTodos(todosCompleted)
        }
        return fetchTodos
      }, [])

    const handleDelete = () => {
        deleteUser(id);
        setModalVisible(false)
      };
      
    const handleSubmit = () => {
        deleteUser(id)
        setUsersData([...usersData, currentUser])
        setIsEdit(false)
    }

    const handleCloseBtn = () => {
        setModalVisible(false)
        setSelected([])
    }
    
    
  return (
    <>
      <div className="darkBG" onClick={() => setModalVisible(false)} />
      <div className="centered">
        <div className="modal">
            <button className="actionBtn closeBtn" onClick={handleCloseBtn}>
                <FaTimesCircle style={{fill: "red", width: "20px"}} />
            </button>
            <div className="modalContent">
            {isEdit ? 
                <EditUser currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              :
            <div>
                <h1>All User Info</h1>
                <p><strong>User Id:</strong> {currentUser.id}</p>
                <p><strong>Name:</strong> {currentUser.name}</p>
                <p><strong>Username:</strong> {currentUser.username}</p>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Address:</strong> {currentUser.address.street} {currentUser.address.suite}, </p>
                <p>{currentUser.address.city} {currentUser.address.zipcode}</p>
                <p><strong>Geolocation:</strong> {currentUser.address.geo.lat}, {currentUser.address.geo.lng}</p>
                <p><strong>Phone:</strong> {currentUser.phone}</p>
                <p><strong>Website:</strong> {currentUser.website}</p>
                <p><strong>Company Name:</strong> {currentUser.company.name}</p>
                <p><strong>Catch Phrase:</strong> {currentUser.company.catchPhrase}</p>
                <p><strong>Business:</strong> {currentUser.company.bs}</p>
                <p><strong>Nº of TODOS Completed:</strong> {todos}</p>
            </div>
            }
        </div>
          <div className="modalActions">
            <div className="actionsContainer">
            {isEdit ? 
              <>
                <ActionButton
                    onClick={() => handleSubmit(id)}
                    children={<FaCheck style={{fill: "green", width: "20px"}}/>}
                />
                <ActionButton
                    onClick={() => setIsEdit(false)}
                    children={<FaUndoAlt style={{fill: "blue", width: "20px"}}/>}
                />
              </>
            :
              <>
                <ActionButton
                    onClick={() => setIsEdit(true)}
                    children={<FaPencilAlt style={{fill: "green", width: "20px"}}/>}
                />
                <ActionButton
                    onClick={handleDelete}
                    children={<FaTrashAlt style={{fill: "red", width: "20px"}}/>}
                />
              </>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserModal