import React from "react";
import MTable from "../../molecules/MTable";

function TableAllUser({
  titleHead,
  data,
  bodyTable,
  editUrl,
  deleteAction,
  detailAction,
}: any) {
  return (
    <MTable
      titleHead={titleHead}
      data={data}
      bodyTable={bodyTable}
      editUrl={editUrl}
      deleteAction={deleteAction}
      detailAction={detailAction}
    />
  );
}

export default TableAllUser;
