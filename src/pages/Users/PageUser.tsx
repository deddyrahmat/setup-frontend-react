import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAllUsers } from '../../redux/userSlice';
import TableAllUser from '../../components/organisms/TableAllUser';
import ApiUser from '../../config/Endpoints/users';


function PageUser() {
  const userAll = useAppSelector((state: any) => {
    return state.user;
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const titleTable = ["User ID", "Name", "Email", "Role ID", "Action"];
  
  const {token} = useAppSelector((state:any )=> state.auth )
  const handleDelete = async (id: string | number) => {
    Swal.fire({
        title: "Apa kamu yakin?",
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Hapus",
        cancelButtonText: "Batal",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
              const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            };
              const res = await ApiUser.deleteUser(config,id);
              console.log('res', res)
                toast.success(
                    `Berhasil menghapus data `
                );
                dispatch(fetchAllUsers());
            } catch (error) {
                toast.error(
                    "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi"
                );
            }
        }
    });
};


  return (
    <div className='flex items-center justify-center flex-col'>
      <h3 className='mb-10 text-blue-800 text-4xl'>All User</h3>
      <div>
        <Link to="/user/create" className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Tambah Data</Link>
      </div>
      <div className='mt-10'>
        <TableAllUser titleHead={titleTable} data={userAll.data} bodyTable={["name", "email", "roleId", "id"]} editUrl="/user/update" deleteAction={(id: string | number) => {
          return handleDelete(id);
        }} />
      </div>
    </div>
  )
}

export default PageUser