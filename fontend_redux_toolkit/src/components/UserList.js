import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/user/userSlice';
import Table from './DataTableUsers';

function UserList() {
  const dispatch = useDispatch();
  const AllUsers = () => {
    dispatch(getUsers());
  };
  const allUsers = useSelector(state=>state?.users?.allusers);
  console.log(allUsers);

  useEffect(()=>{
    AllUsers();
  },[]);
  

  return (
    <>
      <div className="container-sm">
        {
          allUsers && allUsers.length > 0 && <Table data={allUsers} />
        }
        
      </div>
    </>
  )
}

export default UserList