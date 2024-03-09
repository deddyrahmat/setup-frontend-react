import React from "react";
import ATHead from "../../atoms/ATHead";
import ATBody from "../../atoms/ATBody";

function MTable({
  titleHead,
  data,
  bodyTable,
  editUrl,
  deleteAction,
  detailAction,
}: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <ATHead titleHead={titleHead} />
        <ATBody
          data={data}
          bodyTable={bodyTable}
          editUrl={editUrl}
          deleteAction={deleteAction}
          detailAction={detailAction}
        />
      </table>
    </div>
  );
}

export default MTable;
