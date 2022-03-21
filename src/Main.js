import "./Main";


export default function Main() {
    return (
         <main className="Main">
         <div className="mask"></div>
      <h2>Generate your own planner!</h2>
     
      <section id="generator-section">
       
        <form id="generator-form">
          <p>
            Fill this form according to your preference -
            <span id="text-change">on the left side</span> you can see a preview
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