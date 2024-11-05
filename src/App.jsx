import React, { useState, useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    setLoading(false)
  }, [])
  
  

  const handleLogin = (email, password) => {
    if (authData[0] && authData[0].admin.find((e)=>e.email === email  && e.password === password)) {
      const admin = authData[0].admin.find((e)=>e.email === email  && e.password === password)
      console.log(admin);
      
      setUser('admin')
      setLoggedInUserData(admin)
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin', data: admin}))
    }
    else if(authData[0]){
      const employee = authData[0].employees.find((e)=>e.email === email  && e.password === password)
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}))

    }
    else {
      alert('Invalid credentials')
    }
  }
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>

    {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' && loggedInUserData  ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user == 'employee' && loggedInUserData ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      
    </>
  )
}

export default App
