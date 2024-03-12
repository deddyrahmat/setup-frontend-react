import React from "react";
import * as XLSX from "xlsx";

function ReportUserExcel({ data }: any) {
  const handleDownload = () => {
    let manipulate: any = [["User ID", "Name", "Email", "Role ID"]];
    data.map((item: any) => {
      manipulate = [
        ...manipulate,
        [item.id, item.name, item.email, item.roleId],
      ];
    });

    // create new workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(manipulate);

    // add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // generate file xlsx
    XLSX.writeFile(wb, "user.xlsx");
  };
  return (
    <div>
      <button
        onClick={handleDownload}
        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        Download Excel
      </button>
    </div>
  );
}

export default ReportUserExcel;
