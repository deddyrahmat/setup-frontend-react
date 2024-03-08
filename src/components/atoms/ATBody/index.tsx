import React from 'react'

function ATBody({ data, bodyTable }: any) {
    
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
                        </tr>
                        )
                    })
                )
            }

        </tbody>
    )
}

export default ATBody