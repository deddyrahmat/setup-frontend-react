import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAllUsers } from '../../redux/userSlice';
import TableAllUser from '../../components/organisms/TableAllUser';

function PageUser() {
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
      <h3 className='mb-10 text-blue-800 text-4xl'>All User</h3>
      <div>
      <Link to="/user/create" className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Tambah Data</Link>
      </div>
      <div className='mt-10'>
        <TableAllUser titleHead={titleTable} data={userAll.data} bodyTable={["name", "email", "roleId", "id"]} />
      </div>
    </div>
  )
}

export default PageUser