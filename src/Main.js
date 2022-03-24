import {useState} from "react";
import MediaMatches from "./MediaMatches";
import "./Main.css";


export default function Main() {

  let mediaMatches = MediaMatches(`(max-width:900px)`); // true nebo false hodnota


// function changeWidth() {

// const main = document.querySelector("main");

// let myHeight = window.screen.availHeight;

// if(window.innerWidth > 900) {
// main.style.height= `${myHeight-110}px`;
// } else {
//     main.style.height= "min-content";
// }
// }

// window.addEventListener("resize", changeWidth);

// changeWidth();


// // začátek

// const root = document.querySelector(":root");
// const preview = document.getElementById("preview");
// const generatorForm = document.getElementById("generator-form");
// const calendar = document.getElementById("calendar");
// const formYear = document.getElementById("form-year");
// let previewYear = document.getElementById("name-of-year");
// let orientationForm = document.querySelectorAll(`input[name="orientation"]`);
// const previewOrientation = document.querySelector("#preview-orientation");
// let formLanguages = document.querySelectorAll(`input[name="language"]`);
// let daysOfWeekPreview = document.querySelectorAll(".day-of-week");
// let previewMonth = document.getElementById("name-of-month");
// const color = document.getElementById("input-color");
// const formNotes = document.getElementById("form-notes");
// const notes = document.getElementById("notes");
// const formFonts = document.querySelectorAll(`input[name="font"]`);



// let previewLook = { 
    
//         defaultYear: 2025,
//         defaultColor : "#008800", // value color inputu vyžaduje hexa formát
//         defaultOrientation : "portrait",
//         defaultFont : "bitter",
//         defaultLanguage : "czech",
//         defaultNotes : "on",

//         setDefaultForm: function() {
//             this.changeLanguage();
//             //this.changeYear();
//             this.changeColor();
//             this.changeNotes();
//             this.changeFont();
//             this.changeOrientation();
//         },


//         changeYear: function(e) {
//             let selectedYear; 

//             if (!e) {
//                 selectedYear = previewLook.defaultYear;
//                 previewYear.innerText = selectedYear;
//                 fetching(true); // = načíst kalendář
//                 let option = document.querySelector(`option[value="${previewLook.defaultYear}"]`);
//                 option.setAttribute("selected", "");
            
//             } else {
//             selectedYear = parseInt(e.target.value);
//             previewYear.innerText = selectedYear;
//             fetching(false); // = znovu načíst kalendář
//             }


//             function fetching(isItFirstTime) {

//             fetch("http://localhost:3000/years.json")   // netlify https://hungry-mirzakhani-0f7c44.netlify.app/years.json // http://127.0.0.1:8887/years.json "200 ok" // 5500 live server // app.js 3000
//             .then(response => {
//                 return response.json();
//             })
//             .then(jsondata => useData(jsondata, isItFirstTime));
//             }


//             function useData(years, isItFirstTime) {
           
//             let daysBefore = years[`${selectedYear}`].january[1];
//             let days = years[`${selectedYear}`].january[2];
//             let daysAfter = years[`${selectedYear}`].january[3];

//             if (!isItFirstTime) {calendar.innerHTML= ``;}

//                 for(let i = daysBefore[0]; i <= daysBefore[1]; i++) {
//                     generateNumbers(i, true);
//                 }

//                 for(let i = days[0]; i <= days[1]; i++) {
//                     generateNumbers(i, false);
//                 }

//                 for(let i = daysAfter[0]; i <= daysAfter[1]; i++) {
//                 generateNumbers(i, true);
//                 }
//             }

//                 function generateNumbers (i, isGray){
                
//                     let day = document.createElement("span");
//                     day.innerHTML = i;
//                     calendar.appendChild(day);
//                     day.classList.add("grid-child");

//                     if(isGray){
//                     day.classList.add("gray-numbers");
//                     } else if(!isGray) {
//                     day.classList.add("changing-color");
//                     }
//             }
//         },

//         changeLanguage: function(e) {

//             const months = {
//             czech: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"] ,
//             dutch:  ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
//             english: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
//             }

//             const daysOfWeek = {
//             czech: ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"],
//             dutch: ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"],
//             english: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
//             }


//             let language;
//             if (!e) {language = previewLook.defaultLanguage;
//             let lang = document.getElementById(previewLook.defaultLanguage);
//             lang.setAttribute("checked", "");

//             }  else {language = e.path[0].id} // -> string
            
//             changeMonth(language);
//             changeWeek(language);

//                 function changeMonth(language) {
//                 previewMonth.innerHTML =  months[language][0]; 
//                 }

//                 function changeWeek(language) {
//                 for(let i = 0; i < 7; i++) {
//                 daysOfWeekPreview[i].innerHTML = daysOfWeek[language][i];
//                 }
//                 }       

//         },

//         changeColor: function(e) {
//             if(!e) {
//                 root.style.setProperty(`--color-for-preview`, previewLook.defaultColor);
//                 color.setAttribute("value", `${previewLook.defaultColor}`);
//             } else {
//                 root.style.setProperty(`--color-for-preview`, e.target.value);
//             color.setAttribute("value", e.target.value)}
//         },

//         changeOrientation: function(e) {
//             if (!e && previewLook.defaultOrientation === "landscape") {
//                 // v CSS mám defaultně nastavený class landscape na preview

//                 let orient = document.getElementById(previewLook.defaultOrientation);
//                 orient.setAttribute("checked", "");

//             } else if (!e && previewLook.defaultOrientation === "portrait") {

//                 let orient = document.getElementById(previewLook.defaultOrientation);
//                 orient.setAttribute("checked", "");

//                 previewOrientation.classList.toggle("orientation-landscape");    
//                 previewOrientation.classList.toggle("orientation-portrait"); 
            
//             } else {

//                 previewOrientation.classList.toggle("orientation-landscape");    
//                 previewOrientation.classList.toggle("orientation-portrait"); 
//             }
//         },

//         changeFont: function(e) {

//             if(!e) {
//                 let font = document.getElementById(previewLook.defaultFont);
//                 font.setAttribute("checked", "");
//                 preview.style.fontFamily = previewLook.defaultFont;

//             } else {

//                 if (formFonts[1].checked) {
//                     preview.style.fontFamily = `serif`;
//                 } else if (formFonts[2].checked) {
//                     preview.style.fontFamily = `sans-serif`;
//                 }
//                 else if (formFonts[0].checked) {
//                     preview.style.fontFamily = `bitter`;
//                 } }
//         },

//         changeNotes: function(e){
//             if(!e && previewLook.defaultNotes == "on") {
//             formNotes.setAttribute("checked", "");
//             notes.classList.remove("no-notes");
//             } else {
            
//             notes.classList.toggle("no-notes");}
//         }

//         }


//  //--------------


// previewLook.setDefaultForm(); // ten zahrnuje všechny initial calls

// //formYear.addEventListener("input", previewLook.changeYear);
// formLanguages.forEach(formLang => formLang.addEventListener("input", previewLook.changeLanguage));
// orientationForm.forEach(orient => orient.addEventListener("input", previewLook.changeOrientation));
// color.addEventListener("input", previewLook.changeColor);
// formNotes.addEventListener("input", previewLook.changeNotes);
// formFonts.forEach(font => font.addEventListener("input", previewLook.changeFont));


// // ---------------- konec





// function handleSubmit(e) {
//  e.preventDefault();
//  console.log("tadá event objekt" ,  e);

// const formEntries = new FormData(generatorForm).entries();
// const json = Object.assign(...Array.from(formEntries, ([x,y]) => ({[x]:y})));
// // console.log(new FormData(generatorForm)); // objekt, prototyp FormData
// // console.log(formEntries); // objekt, prototype Interator
// // console.log(Array.from(formEntries));
// console.log("json", json); // objekt, prototype Object

// generatePlanner(json);
// }

// generatorForm.addEventListener("submit", handleSubmit);



// function generatePlanner(json) {

// //console.log(json.color);
// //console.log(Object.keys(json).length); // když 5, tak to znamená, že není Notes // underfined v class OOP


//     class Planner { // na pořadí u constructoru záleží
//         constructor(year, color, orientation, font, language, notes) {
//             this.year = year;
//             this.color = color;
//             this.orientation = orientation;
//             this.font = font;
//             this.language = language;
//             this.notes = notes;
//         }

//         createPlanner() {
//             console.log(this.year);
//         }

  
//     }

//     let newPlanner = new Planner(...Object.values(json));
//     console.log("newPlanner", newPlanner);
//     newPlanner.createPlanner(); // po vytvoření planneru můžu vyvolat funkci create
//     // můžu další funkci "stáhnout" vyvolat buď dalším řádkem, a nebo přímo v té funkci create

    
//     // a nakonec funkce na download vytvořeného souboru
// }

    return (
         <main className="Main" id="generator">
            <div className="mask"></div>
            <h2>Generate your own planner!</h2>
          
            <section id="generator-section">
            
              <form id="generator-form">
                <p>
                  Fill this form according to your preference -
                  <span className="text-change">{mediaMatches ? "down below" : "on the left side"}</span> you can see a preview
                  of January:
                </p>
                <table>
                  <tr>
                    <th><label for="form-year">year:</label></th>
                    <td>
                      <select name="year" id="form-year">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th><label for="input-color">color: </label></th>
                    <td>
                      <input type="color" name="color" id="input-color" />
                    </td>
                  </tr>

                  <tr>
                    <th><span>orientation:</span></th>
                    <td>
                      <input
                        type="radio"
                        id="landscape"
                        value="landscape"
                        name="orientation"
                      /><label for="landscape" className="radio-label">landscape</label>
                      <input
                        type="radio"
                        id="portrait"
                        value="portrait"
                        name="orientation"
                      /><label for="portrait" className="radio-label">portrait</label>
                    </td>
                  </tr>

                  <tr>
                    <th><span>font:</span></th>
                    <td className="td-font">
                      <input
                        type="radio"
                        id="bitter"
                        value="bitter"
                        name="font"
                      /><label for="bitter" className="radio-label">bitter</label>
                      <input
                        type="radio"
                        id="serif"
                        value="serif"
                        name="font"
                      /><label for="serif" className="radio-label">serif</label>
                      <input
                        type="radio"
                        id="sans-serif"
                        value="sans-serif"
                        name="font"
                      /><label for="sans-serif" className="radio-label">sans serif</label>
                    </td>
                  </tr>

                  <tr>
                    <th><span>language:</span></th>
                    <td>
                      <input
                        type="radio"
                        id="english"
                        value="english"
                        name="language"
                      /><label for="english" className="radio-label">english</label>
                      <input
                        type="radio"
                        id="czech"
                        value="czech"
                        name="language"
                      /><label for="czech" className="radio-label">czech</label>
                      <input
                        type="radio"
                        id="dutch"
                        value="dutch"
                        name="language"
                      /><label for="dutch" className="radio-label">dutch</label>
                    </td>
                  </tr>

                  <tr>
                    <th><label for="form-notes">extra space for notes:</label></th>
                    <td className="td-polygon">
                      <label for="form-notes"
                        ><input type="checkbox" id="form-notes" name="notes" /><span
                          className="polygon"
                        ></span
                      ></label>
                    </td>
                  </tr>
                </table>
              </form>

              <section id="preview-container">
                <section id="preview-orientation" className="orientation-landscape">
                  <section id="preview">
                    <section id="date" className="changing-color">
                      <h3 id="name-of-month">January</h3>
                      <span id="name-of-year">2022</span>
                    </section>
                    <section id="days-of-week-container">
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                      <span className="day-of-week"></span>
                    </section>
                    <section id="calendar" className="grid-container"></section>
                    <section id="notes" className="changing-color">Notes:</section>
                  </section>
                </section>
              </section>
            </section>
            
            <button id="submit-button" form="generator-form">
              Download your planner
            </button>
      </main>
    )
}