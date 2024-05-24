import { FC } from "react";
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";

interface IPDFDocumentProps {
  username: string;
  comment: string;
  picture: File;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const PDFDocument: FC<IPDFDocumentProps> = ({ comment, picture, username }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>

        <View style={styles.section}>{picture && <Image src={picture} />}</View>
      </Page>
    </Document>
  );
};
