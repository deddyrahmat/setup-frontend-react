import React from 'react';
import MTable from '../../molecules/MTable';

function TableAllUser({
  titleHead,
  data,
  bodyTable,
  editUrl,
  deleteAction,
}: any) {
  return (
    <MTable
      titleHead={titleHead}
      data={data}
      bodyTable={bodyTable}
      editUrl={editUrl}
      deleteAction={deleteAction}
    />
  );
}

export default TableAllUser;
