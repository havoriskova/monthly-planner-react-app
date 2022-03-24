import "./Gallery.css";
import dino from "./img/dino.jpg";


export default function Gallery() {
    return(
        <aside className="Gallery" id="gallery">
            <h2>Get your inspiration</h2>
            
            <section className="grid-parent">
              <div className="img-grid">
                <img
                  src={dino}
                  alt="first planner for inspiration"
                />
              </div>
              <div className="img-grid"><img src="" alt="planner for inspiration" /></div>
              <div className="img-grid"><img src="" alt="planner for inspiration" /></div>
              <div className="img-grid"><img src="" alt="planner for inspiration" /></div>
              <div className="img-grid"><img src="" alt="planner for inspiration" /></div>
            </section>
       </aside>
    )
}