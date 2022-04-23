import React from 'react'
import ActionButton from '../common/ActionButton';
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import './users-table.css'

const UserEntry = ({
    id,
    username, 
    email, 
    city,
    hasCompany, 
    deleteUser,
    moreInfo,
    selected
    }) => {

  const handleDelete = () => {
    deleteUser(id);
  };

  const handleModal = () => {
    moreInfo(id)
  }

  return (
        <tr className={selected === id ? "row active" : "row"} >
          <td>{id}</td>
          <td className={"textCol"}>{username}</td>
          <td className={"textCol"}>{email}</td>
          <td className={"textCol"}>{city}</td>
          <td className={"textCol"}>{hasCompany ? "yes" : "no"}</td>
          <td style={{display: "flex", justifyContent: "space-evenly"}}>
              <ActionButton onClick={handleModal} children={<FaPlus />} />
              <ActionButton
                    onClick={handleDelete}
                    children={<FaTrashAlt style={{fill: "red", width: "20px"}}/>}
                />
          </td>
      </tr> 
  )
}

export default UserEntry