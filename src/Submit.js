export default function Submit(props) {

    function isClickWorking (e) {
        console.log("it is working " + props.info);
        /* submit jako takovej je napojenej na <form>, 
        takže submit event už nechat být, a pracovat jen s onClick funkcí tady - potřebné info budu mít z props komponentu
        
        Vytvořit celej soubor tady 
        - protože až tady v komponentu Submit chci natahat React-pdf komponent - potřebuje možná svůj vlastní soubor, neb je sám o sobě komponentem?
        - pokud to nebude fungovat, použít to stejné řešení, jak ve vanilaJS !!! */
    

    }

  
    
    return(
        <button id="submit-button" form="generator-form" onClick={isClickWorking}>Download your planner</button>
    )
}