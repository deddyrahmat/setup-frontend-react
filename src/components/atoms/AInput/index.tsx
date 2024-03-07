import React from 'react'

type Data = {
    onChange :React.ChangeEventHandler<HTMLInputElement>,
    value : string,
    type : string,
    name : string,
    id : string,
    placeholder : string,
}

function AInput({onChange, value, type, name, id, placeholder} : Data) {
  return (
    <input onChange={onChange} value={value} type={type} name={name} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
  )
}

export default AInput