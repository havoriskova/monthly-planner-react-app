import {React, useRef, useState, useEffect, useCallback} from "react";
import "./Main.css";
import Submit from "./Submit";
import {yearsJS} from "./years.js";

export default function Main() {

//text - pak hodit do samostatného custom hooku

//console.log("1 window.matchMedia: " + window.matchMedia); //MediaQueryList - matches, media, onchange
//console.log("2 window.matchMedia(`(max-width:900px)`): " + window.matchMedia(`(max-width:900px)`));
//console.log("3 window.matchMedia(`(max-width:900px)`).matches: " + window.matchMedia(`(max-width:900px)`).matches);
let isMediaMatching = window.matchMedia(`(max-width:900px)`).matches;
//console.log(mediaMatchesTwo);
//konec textu

// výška mainu - pak hodit do samostatného custom hooku 
const [curHeight, setHeight] = useState("min-content"); /*() => initialHeight()*/

function handleResize() {
      if(window.innerWidth > 900) {
        setHeight(window.screen.availHeight - 110); 
      } else {
        setHeight("min-content");
      }
}


useEffect(() =>  { 
  window.addEventListener("resize", handleResize);
  return () => { window.removeEventListener("resize", handleResize)}
}, [])
// konec výšky mainu 

//------- prozatimní react věcičky:

const [selectedColor, setColor] = useState("#666aaa"); // default barva, musí být v Hex formátu

useEffect(() => { 
    //console.log(color);
    const root = document.querySelector(":root");
    root.style.setProperty(`--color-for-preview`, selectedColor);
}, [selectedColor]);

//----------------konec color

const language = {
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
          }



//console.dir(document.getElementById(selectedLanguage));
// možná je zapotřebí v tomhle případě asynchronní JS + nějaká spojitost s UseEffect
//document.getElementById(selectedLanguage).setAttribute("data-m", "true");
//document.getElementById(selectedLanguage).setAttribute("defaultChecked", "true");
//console.dir(document.getElementById(selectedLanguage));

//const [selectedLanguage, setLanguage] = useState("dutch"); // nastavení default language

const [chosenDays, setchosenDays] = useState(language.daysOfWeek.dutch);
const [chosenMonths, setchosenMonths] = useState(language.months.dutch);
const [notes, setnotes]= useState(language.notes.dutch);

const [chosenLanguage, setChosenLanguage] = useState("english");

useEffect(() => { 
  setchosenDays(language.daysOfWeek[chosenLanguage]); 
  setchosenMonths(language.months[chosenLanguage]); 
  setnotes(language.notes[chosenLanguage]); 
  }, [language]
);

//setchosenDays(language.daysOfWeek[e.target.value]); setchosenMonths(language.months[e.target.value]); setnotes(language.notes[e.target.value])

// useEffect(() =>  { // useRef místo effectu ??
// //console.log("ahoj z useEffectu " + selectedLanguage);
// //console.dir(daysOfWeek[selectedLanguage]);


// console.log(selectedLanguage);
// setchosenDays(language.daysOfWeek[selectedLanguage]); 
// setchosenMonths(language.months[selectedLanguage]);
// setnotes(language.notes[selectedLanguage]);
// }, [selectedLanguage])
// pokud do [dependencies] dám  language.daysOfWeek, language.months, language.notes, 
// jak si to přeje terminal, tak mám infinity loop - v console se mi furt zobrazují logy
// nemůžu dát ani "chosenDays, chosenMonths, notes" - při výběru jazyka mi to taky hází infinite loop

//------ konec language

//console.dir(document.getElementById("form-notes")); 
const [inputNotes, setinputNotes] = useState(true);

// ----------konec notes

const [inputFont, setInputFont] = useState("");


//----------------konec font

const [inputOrientation, setInputOrientation] = useState("landscape");

//----------konec orientation

const [inputYear, setInputYear] = useState(2022);
const calendarRef = useRef();

const generateNumbers = useCallback((i, isGray) =>{
                    
          let day = document.createElement("span");
          day.innerHTML = i;
          calendarRef.current.appendChild(day);
          day.classList.add("grid-child");

          if(isGray){
          day.classList.add("gray-numbers");
          } else if(!isGray) {
          day.classList.add("changing-color");
          }
  }, [calendarRef]);


const handleChangeYear = useCallback((years) => {

            let daysBefore = years[`${inputYear}`].january[1];
            let days = years[`${inputYear}`].january[2];
            let daysAfter = years[`${inputYear}`].january[3];

          // calendar = document.getElementById("calendar"); // useRef hook, value in .current property
        console.log("handleChangeYear callback");
        calendarRef.current.innerHTML = "";
        console.log(calendarRef.current);

                for(let i = daysBefore[0]; i <= daysBefore[1]; i++) {
                    generateNumbers(i, true);
                }

                for(let i = days[0]; i <= days[1]; i++) {
                    generateNumbers(i, false);
                }

                for(let i = daysAfter[0]; i <= daysAfter[1]; i++) {
                generateNumbers(i, true);
                }
}, [calendarRef, inputYear]);



useEffect(() => {
console.log(inputYear);

handleChangeYear(yearsJS);

console.log("tohle je po fetchnutí");

}, [inputYear]);



    return (
         <main className="Main" id="generator" style={{height: curHeight}}>
            <div className="mask"></div>
            <h2>Generate your own planner!</h2>
          
            <section id="generator-section">
            
              <form id="generator-form" onSubmit={(e) => {e.preventDefault(); console.log("submit")}}>
                <p>
                  Fill this form according to your preference - <span
                   className="text-change">{isMediaMatching ? "down below" : "on the left side"}</span> you can see a preview
                  of January:
                </p>
                <table>
                   <tbody>
                    <tr>
                    <th><label htmlFor="form-year">year:</label></th>
                    <td>
                      <select name="year" id="form-year" onChange={(e) => setInputYear(parseInt(e.target.value))}>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                    </td>
                  </tr>
                    </tbody>

                <tbody>
                  <tr>
                    <th><label htmlFor="input-color">color: </label></th>
                    <td>
                      <input type="color" name="color" id="input-color" 
                      onChange={(e) => setColor(e.target.value)} value={selectedColor}/>
                    </td>
                  </tr>
                  </tbody>

                  <tbody>
                  <tr>
                    <th><span>orientation:</span></th>
                    <td>
                      <input
                        type="radio"
                        id="landscape"
                        value="landscape"
                        name="orientation" onInput={(e)=> setInputOrientation(e.target.value)} defaultChecked={true}
                      /><label htmlFor="landscape" className="radio-label">landscape</label>
                      <input
                        type="radio"
                        id="portrait"
                        value="portrait"
                        name="orientation" onInput={(e)=> setInputOrientation(e.target.value)}
                      /><label htmlFor="portrait" className="radio-label">portrait</label>
                    </td>
                  </tr>
                  </tbody>

                <tbody>
                  <tr>
                    <th><span>font:</span></th>
                    <td className="td-font">
                      <input
                        type="radio"
                        id="bitter"
                        value="bitter"
                        name="font" onInput={(e) => {setInputFont(e.target.value)}} defaultChecked={true}
                      /><label htmlFor="bitter" className="radio-label">bitter</label>
                      <input
                        type="radio"
                        id="serif"
                        value="serif"
                        name="font" onInput={(e) => {setInputFont(e.target.value)}}
                      /><label htmlFor="serif" className="radio-label">serif</label>
                      <input
                        type="radio"
                        id="sans-serif"
                        value="sans-serif"
                        name="font" onInput={(e) => {setInputFont(e.target.value)}}
                      /><label htmlFor="sans-serif" className="radio-label">sans serif</label>
                    </td>
                  </tr>
                  </tbody>

                  <tbody>
                  <tr>
                    <th><span>language:</span></th>
                    <td>
                      <input
                        type="radio"
                        id="english"
                        value="english"
                        name="language" onInput={(e) => {setChosenLanguage(e.target.value); }}
                      /><label htmlFor="english" className="radio-label">english</label>
                      <input
                        type="radio"
                        id="czech"
                        value="czech"
                        name="language" onInput={(e) => {setChosenLanguage(e.target.value);}}
                      /><label htmlFor="czech" className="radio-label">czech</label>
                      <input
                        type="radio"
                        id="dutch"
                        value="dutch"
                        name="language" onInput={(e) => {setChosenLanguage(e.target.value);}} defaultChecked={true}
                      /><label htmlFor="dutch" className="radio-label">dutch</label>
                    </td>
                  </tr>
                  </tbody>

                <tbody>
                  <tr>
                    <th><label htmlFor="form-notes">extra space for notes:</label></th>
                    <td className="td-polygon">
                      <label htmlFor="form-notes"
                        ><input type="checkbox" id="form-notes" name="notes" onChange={() => setinputNotes(!inputNotes)} defaultChecked={true}/><span
                          className="polygon"
                        ></span
                      ></label>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </form>

              <section id="preview-container"> {/* template */}
                <section id="preview-orientation" className={inputOrientation === "landscape" ? "orientation-landscape" : "orientation-portrait"}>
                  <section id="preview" style={{fontFamily: inputFont}}>
                    <section id="date" className="changing-color">
                      <h3 id="name-of-month">{chosenMonths[0]}</h3>
                      <span id="name-of-year">{inputYear}</span>
                    </section>
                    <section id="days-of-week-container">
                      <span className="day-of-week">{chosenDays[0]}</span>
                      <span className="day-of-week">{chosenDays[1]}</span>
                      <span className="day-of-week">{chosenDays[2]}</span>
                      <span className="day-of-week">{chosenDays[3]}</span>
                      <span className="day-of-week">{chosenDays[4]}</span>
                      <span className="day-of-week">{chosenDays[5]}</span>
                      <span className="day-of-week">{chosenDays[6]}</span>
                    </section>
                    <section id="calendar" ref={calendarRef} className="grid-container"></section>
                    <section id="notes" className={inputNotes ? "changing-color" : "changing-color no-notes"}>{notes}:</section>
                  </section>
                </section>
              </section>
            </section>
            
            <Submit />
      </main>
    )
}