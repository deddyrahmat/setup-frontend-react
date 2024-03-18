import { BlobProvider, pdf } from "@react-pdf/renderer";
import ReportUser from "../../reports/ReportUser";
import { useAppSelector } from "../../redux/hooks";

function PreviewUser() {
  const userAll = useAppSelector((state: any) => {
    return state.user;
  });

  const data = (url: any) => {
    window.open(url, "_blank");
  };
  return (
    <BlobProvider document={<ReportUser data={userAll.data} />}>
      {({ blob, url, loading, error }: any) => {
        console.log("blob", blob);
        console.log("url", url);
        // Do whatever you need with blob here
        return <button onClick={() => data(url)}>down</button>;
        // return <a href={url}>downo</a>;
      }}
    </BlobProvider>
  );
}

export default PreviewUser;
