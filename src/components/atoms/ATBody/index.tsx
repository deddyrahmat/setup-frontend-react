import React from "react";
import { setLocalStorage } from "../../../utils/localstorage";
import { useNavigate } from "react-router-dom";
import FieldButton from "../FieldButton";

function ATBody({
  data,
  bodyTable,
  editUrl,
  deleteAction,
  actionNotDisplay,
  detailAction,
}: any) {
  const navigate = useNavigate();
  return (
    <tbody>
      {data.length > 0 &&
        data.map((item: any, index: any) => {
          return (
            <tr
              key={`data-${index}`}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {Object.keys(item).map(
                (nameKey: any, index: any) =>
                  bodyTable.indexOf(nameKey) > -1 && (
                    <td className="px-6 py-4" key={`body-${index}`}>
                      {item[nameKey]}
                    </td>
                  )
              )}

              {!actionNotDisplay && (
                <td className="flex flex-col justify-center md:justify-between md:items-end md:flex-row  px-6 py-4">
                  {detailAction && (
                    <FieldButton
                      type="button"
                      classNames="mx-3 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={() => {
                        return detailAction(item.id);
                      }}
                    >
                      Detail
                    </FieldButton>
                  )}
                  {editUrl && (
                    <FieldButton
                      classNames="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                      onClick={() => {
                        setLocalStorage("user", {
                          name: item.name,
                          roleId: item.roleId,
                          email: item.email,
                          password: item.password,
                        });
                        return navigate(`${editUrl}/${item.id}`);
                      }}
                    >
                      Edit
                    </FieldButton>
                  )}
                  {deleteAction && (
                    <FieldButton
                      type="button"
                      classNames="mx-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => {
                        return deleteAction(item.id);
                      }}
                    >
                      Hapus
                    </FieldButton>
                  )}
                </td>
              )}
            </tr>
          );
        })}
    </tbody>
  );
}

export default ATBody;
