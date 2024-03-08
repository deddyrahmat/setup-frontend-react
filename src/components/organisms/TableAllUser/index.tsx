import React from 'react'
import MTable from '../../molecules/MTable'

function TableAllUser({titleHead, data, bodyTable} : any) {
  return (
    <MTable titleHead={titleHead} data={data} bodyTable={bodyTable}  />
  )
}

export default TableAllUser