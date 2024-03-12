import { PDFViewer } from "@react-pdf/renderer";
import ReportUser from "../../reports/ReportUser";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

function PreviewUser() {
  const userAll = useAppSelector((state: any) => {
    return state.user;
  });
  return (
    <div className="m-5">
      <Link
        to="/user"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Kembali
      </Link>
      <div className="flex justify-center items-center m-10">
        <PDFViewer width="1000" height="650" className="app">
          <ReportUser data={userAll.data} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default PreviewUser;
