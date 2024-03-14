import { Fragment } from "react";
import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "/logo_psg.png";

// Create Document Component
const ReportUser = ({ data }: any) => {
  const styles = StyleSheet.create({
    descLogo: {
      paddingTop: 15,
    },
    descCompany: {
      fontSize: 10,
    },
    infoFile: {
      fontSize: 11,
      fontWeight: "bold",
      paddingTop: 10,
    },
    logo: { width: 90 },
    page: {
      fontSize: 11,
      paddingTop: 20,
      paddingLeft: 40,
      paddingRight: 40,
      lineHeight: 1.5,
      flexDirection: "column",
    },

    spaceBetween: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      color: "#3E3E3E",
    },

    titleContainer: { flexDirection: "row", marginTop: 24 },

    reportTitle: { fontSize: 16, textAlign: "center" },

    theader: {
      marginTop: 20,
      fontSize: 10,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

    tbody: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    tbody2: { flex: 2, borderRightWidth: 1 },
  });

  const ReportTitle = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <View>
          <Image style={styles.logo} src={logo} />
          <View style={styles.descLogo}>
            <Text style={styles.descCompany}>
              Desa Air Tawar, Kateman, Riau, 29255, Indonesia
            </Text>
            <Text style={styles.descCompany}>www.sambugroup.com</Text>
          </View>
        </View>
        <View>
          <Text style={styles.infoFile}>Nama: Deddy Rahmat</Text>
          <Text style={styles.infoFile}>
            Information: menggunakan percobaan gak tau. coba aja cuy
          </Text>
          <Text style={styles.infoFile}>Date: 20 Feb 2024</Text>
        </View>
      </View>
    </View>
  );

  const TableHead = () => (
    <View fixed style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={styles.theader}>
        <Text>User ID</Text>
      </View>
      <View style={styles.theader}>
        <Text>Name</Text>
      </View>
      <View style={styles.theader}>
        <Text>Email</Text>
      </View>
      <View style={styles.theader}>
        <Text>Role Id</Text>
      </View>
    </View>
  );

  const TableBody = () =>
    data.map((item: any) => (
      <Fragment key={item.id}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.tbody}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.name} </Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.email}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.roleId}</Text>
          </View>
        </View>
      </Fragment>
    ));
  const TableHead2 = () => (
    <View
      fixed
      // break
      // wrap={false}
      style={{ width: "100%", flexDirection: "row", marginTop: 10 }}
    >
      <View style={styles.theader}>
        <Text>User ID</Text>
      </View>
      <View style={styles.theader}>
        <Text>Name</Text>
      </View>
      <View style={styles.theader}>
        <Text>Email</Text>
      </View>
      <View style={styles.theader}>
        <Text>Role Id</Text>
      </View>
    </View>
  );

  const TableBody2 = () =>
    data.map((item: any) => (
      <Fragment key={item.id}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.tbody}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.name} </Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.email}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{item.roleId}</Text>
          </View>
        </View>
      </Fragment>
    ));

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <ReportTitle />
        <TableHead />
        <TableBody />
        <TableHead2 />
        <TableBody2 />
      </Page>
    </Document>
  );
};

export default ReportUser;
