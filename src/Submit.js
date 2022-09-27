import PDFtest from "./PDFtest"; 
import { PDFDownloadLink} from "@react-pdf/renderer";

 export default function Submit(props) {

    // function isClickWorking (e) {
    //     console.log("it is working " + props.info);
    //     console.dir(props.info);
    // }

        /* submit jako takovej je napojenej na <form>, 
        takže submit event už nechat být, a pracovat jen s onClick funkcí tady - potřebné info budu mít z props komponentu
        
         */

  
    
    return(<button id="submit-button">
        <PDFDownloadLink document={<PDFtest formInfo={props.info} testName={"nějaké jméno"}/>} fileName="TEST"
        >
{({loading}) => loading ? (
    <span>Loading document..</span>) : (
        <span>download</span> )
}
        </PDFDownloadLink>
</button>
    )
}

/*<button id="submit-button" form="generator-form" onClick={isClickWorking}>Download your planner</button>
 */