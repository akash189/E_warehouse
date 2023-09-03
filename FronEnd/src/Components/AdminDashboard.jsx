import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import AdminNav from './AdminNav';

function AdminDashboard() {
  const Navigate = useNavigate();
  return (
    <>  
    <AdminNav/>

    </>
  )
}

export default AdminDashboard