import React from 'react';
import { useMemo } from 'react';
// import ReactDOM from 'react-dom';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


     /*   Vytvořit celej soubor tady 
        - protože až tady v komponentu Submit chci natahat React-pdf komponent - potřebuje možná svůj vlastní soubor, neb je sám o sobě komponentem?
        - pokud to nebude fungovat, použít to stejné řešení, jak ve vanilaJS !!!
        -   1) npm 
            2) import {} from @react-pdf... 
            3) stylesheet a to zároveň const styles= styleSheet.create({page: {},
            section: {}}); a z props style dát do inlines, tj.:
            <View style={[styles.section, {color: "red"}]},...
            + units jen % a mm !!!!
            4) const MyDocument = () => ( 
                <Page>
                    <View>
                    <Text></Text>
                    </View>
                </Page>
             
                jakožto KOMPONENT)
            5) <PDFDownloadLink /> 
         */
    
            /*props.formInfo.language / notes / orientation .. */

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'lightblue'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  month: {
    fontSize: '2cm',

  }
});


// Create Document Component
const PDFtest = (props) => {
    console.log("Hele zkouška!" + props.formInfo);
    console.dir(props.formInfo);
    

const language = useMemo(() => {
  return {
 daysOfWeek: {
            czech: ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"],
            dutch: ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"],
            english: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
            },

 months: {
            czech: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"] ,
            dutch:  ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            english: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
            },

  notes: { czech: "Poznámky",
           dutch: "Notities",
           english: "Notes"}
          }}, []);




return (
  <Document>
    <Page size="A4" style={styles.page} orientation={props.formInfo.orientation}>
        <Text style={[styles.month, {color: props.formInfo.color}]}>{props.formInfo.language}
        {language.months[props.formInfo.language[0]]}
        {language.months.english[0]}</Text>
      <View style={[styles.section, {}]}>
        <Text>Section #1 {props.formInfo.year}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2 {props.testName}</Text>
      </View>
    </Page>
    <Page size="A4" style={[styles.page, {color: props.formInfo.color}]} orientation={props.formInfo.orientation}>
        <View style={styles.section}>
            <Text>Page 2 {props.formInfo.font} a taky {props.formInfo.language}</Text>
        </View>
    </Page>
    <Page>

    </Page>
  </Document>)
};

export default PDFtest;