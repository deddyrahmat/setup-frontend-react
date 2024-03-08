import React from 'react'

function ATHead({titleHead} : any) {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {titleHead.length > 0 && (
                    titleHead.map((title: any, index: any) => (
                        <th scope="col" className="px-6 py-3" key={`title-${index}`}>
                            {title}
                        </th>
                    ))
                )}
            </tr>
        </thead>
    )
}

export default ATHead