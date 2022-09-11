

import "./About.css";


export default function About() {

  function scrollToGallery(e) {
    let gallery = document.getElementById("gallery");
    gallery.scrollIntoView({behavior: "smooth"});
  }

    return(
        <aside className="About">
    
          <h2>About this webpage</h2>
          <article>
            <p>
              The most usefull thing for planning is definitely a monthly
              planner. I used to have very pretty large diaries, but soon during the
              year I´ve noticed that I hardly open them. I was also lazy to turn the
              pages to see if I haven´t forget something to do in the previous
              weeks. Monthly planner helped me a lot with organizing stuff, because
              it is simply just one page. It feels lighter and more fresh then just
              enormous amount of pages.
            </p>
        
            <p>
              If you strugle
              with your design, just look in the <span className="link-in-text" onClick={scrollToGallery}>gallery</span> for an
              inspiration! You can also find there possible ways how to use your
              monthly planner.
            </p>
          </article>
    </aside>
    )
}