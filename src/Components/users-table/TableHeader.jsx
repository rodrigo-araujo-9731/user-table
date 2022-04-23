import React from 'react'
import './users-table.css'

const TableHeader = () => {
  return (
    <thead className='tab-header'>
        <tr>
            <th>ID</th>
            <th className={"textCol"}>Username</th>
            <th className={"textCol"}>Email</th>
            <th className={"textCol"}>City</th>
            <th className={"textCol"}>Has Company</th>
            <th>Actions</th>
        </tr>
    </thead>
    
  )
}

export default TableHeader