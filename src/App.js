import React, {useEffect, useMemo, useState} from 'react'
import './App.css';
import UsersTable from './Components/users-table/UsersTable'
import { UsersDataContext } from './utils/usersContext';

function App() {

  const [usersData, setUsersData] = useState([])
  const providerUserData = useMemo(() => ({usersData, setUsersData}), [usersData, setUsersData])
  
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      setUsersData(response)
  }

  return (
    <div className="App">
      <UsersDataContext.Provider value={providerUserData}>
          <UsersTable />
      </UsersDataContext.Provider>
    </div>
  );
}

export default App;
