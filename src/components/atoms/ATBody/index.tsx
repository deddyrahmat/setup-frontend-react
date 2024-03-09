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
                <td>
                  {editUrl && (
                    <FieldButton
                      classNames="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
