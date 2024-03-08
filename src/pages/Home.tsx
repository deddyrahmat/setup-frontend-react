import axios from 'axios';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchAllUsers } from '../redux/userSlice';
import TableAllUser from '../components/organisms/TableAllUser';

function Home() {
  const userAll = useAppSelector((state: any) => {
    return state.user;
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const titleTable = ["User ID","Name", "Email", "Role ID"];

  return (
    <div className='flex items-center justify-center flex-col'>
      <h3 className='mb-10 text-red-800 text-4xl'>All User</h3>
      <div>
        <TableAllUser titleHead={titleTable} data={userAll.data} bodyTable={["name", "email", "roleId", "id"]} />
      </div>
    </div>
  )
}

export default Home