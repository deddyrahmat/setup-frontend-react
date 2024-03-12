import React from "react";
import * as XLSX from "xlsx-js-style";

function ReportUserExcel({ data }: any) {
  const handleDownload = () => {
    let manipulate: any = [
      ["User ID", "Name", "Email", "Role ID"],
      [" ", " ", " ", " "],
    ];
    data.map((item: any) => {
      manipulate = [
        ...manipulate,
        [item.id, item.name, item.email, item.roleId],
      ];
    });

    // create new workbook
    const wb = XLSX.utils.book_new();

    const ws = XLSX.utils.aoa_to_sheet(manipulate);
    const colWidths = [{ wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 20 }];
    // console.log("ws", ws);
    ws["A1"].s = {
      font: {
        bold: true,
        // color: { rgb: "FFAA00" },
      },
      // fill: {
      //   bgColor: { rgb: "FF0269D8" }, // ARGB Hex Value
      //   fgColor: { rgb: "FF0269D8" }, // ARGB Hex Value
      // },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };
    ws["B1"].s = {
      font: {
        bold: true,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };
    ws["C1"].s = {
      font: {
        bold: true,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };
    ws["D1"].s = {
      font: {
        bold: true,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };

    ws["!cols"] = colWidths;
    const merge = [
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
      { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } },
      { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } },
      { s: { r: 0, c: 3 }, e: { r: 1, c: 3 } },
    ];
    ws["!merges"] = merge;

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
