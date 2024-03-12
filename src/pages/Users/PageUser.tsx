import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllUsers } from "../../redux/userSlice";
import TableAllUser from "../../components/organisms/TableAllUser";
import ApiUser from "../../config/Endpoints/users";
import AModal from "../../components/atoms/AModal";
import ReportUser from "./../../reports/ReportUser";
import ReportUserExcel from "../../reports/ReportUserExcel";

function PageUser() {
  const userAll = useAppSelector((state: any) => {
    return state.user;
  });

  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [dataDetailUser, setDataDetailUser]: any = useState([]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const titleTable = ["User ID", "Name", "Email", "Role ID", "Action"];

  const { token } = useAppSelector((state: any) => state.auth);
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
              Authorization: `Bearer ${token}`,
            },
          };
          const res = await ApiUser.deleteUser(config, id);
          toast.success(`Berhasil menghapus data ${res.data.name}`);
          dispatch(fetchAllUsers());
        } catch (error) {
          toast.error(
            "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi"
          );
        }
      }
    });
  };

  const handleDetailUser = async (id: string | number) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await ApiUser.detailUser(config, id);
      setDataDetailUser(res.data);
      setShowModal(true);
    } catch (error) {
      toast.error(
        "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi"
      );
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex justify-around items-center w-full mt-10">
        <h3 className=" text-slate-900 text-2xl">All User</h3>
        <div className="flex justify-center items-center gap-4">
          <div>
            <Link
              to="/user/create"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Data
            </Link>
          </div>
          <div>
            <PDFDownloadLink
              document={<ReportUser data={userAll.data} />}
              fileName="report-user.pdf"
            >
              <div className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                Report All User
              </div>
            </PDFDownloadLink>
          </div>
          <div>
            <ReportUserExcel data={userAll.data} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <TableAllUser
          titleHead={titleTable}
          data={userAll.data}
          bodyTable={["name", "email", "roleId", "id"]}
          editUrl="/user/update"
          deleteAction={(id: string | number) => {
            return handleDelete(id);
          }}
          detailAction={(id: string | number) => {
            return handleDetailUser(id);
          }}
        />
      </div>
      <AModal showModal={showModal} setShowModal={setShowModal}>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col divide-y text-left">
            <div className="pt-3">Nama : {dataDetailUser?.name}</div>
            <div className="pt-3">Email : {dataDetailUser?.email}</div>
            <div className="pt-3">Role : {dataDetailUser?.role?.name}</div>
            <div className="pt-3">
              Inactive :{" "}
              {dataDetailUser?.role?.inactive ? "Aktif" : "Nonactive"}
            </div>
          </div>
        </div>
      </AModal>
    </div>
  );
}

export default PageUser;
