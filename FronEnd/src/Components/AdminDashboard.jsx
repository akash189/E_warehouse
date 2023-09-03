import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import AdminNav from './AdminNav';
import Product_List from './Product_List';

function AdminDashboard() {
  const Navigate = useNavigate();
  return (
    <>  
    
    <Product_List/>
    </>
  )
}

export default AdminDashboard