import React from 'react'
import AButton from '../AButton';
import { setLocalStorage } from '../../../utils/localstorage';
import { useNavigate } from 'react-router-dom';


function ATBody({ data, bodyTable, editUrl, deleteAction, actionNotDisplay, }: any) {
    const navigate = useNavigate();
    return (
        <tbody>
            {
                data.length > 0 && (
                    data.map((item: any, index: any) => {
                        return (
                            <tr key={`data-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {
                                    Object.keys(item).map((nameKey: any, index: any) => (
                                        bodyTable.indexOf(nameKey) > -1 && (
                                            <td className="px-6 py-4" key={`body-${index}`}>
                                                {item[nameKey]}
                                            </td>
                                        )
                                    ))
                                }

                                {!actionNotDisplay && (
                                    <td>
                                        {editUrl && (
                                        <AButton
                                            onClick={() => {
                                                setLocalStorage("user", {
                                                    name: item.name,
                                                    roleId: item.roleId,
                                                    email: item.email,
                                                    password: item.password,
                                                });
                                                return navigate(
                                                    `${editUrl}/${item.id}`
                                                );
                                            }}
                                        >
                                            Edit
                                        </AButton>
                                    )}
                                        {deleteAction && (
                                            <AButton
                                                type="button"
                                                classNames="mx-2"
                                                variant="danger"
                                                size="sm"
                                                onClick={() => {
                                                    return deleteAction(item.id);
                                                }}
                                            >
                                                Hapus
                                            </AButton>
                                        )}
                                    </td>
                                    )}
                                
                        </tr>
                        )
                    })
                )
            }

        </tbody>
    )
}

export default ATBody