import ButtonMain from "../Button/ButtonMain"
import "./Main.css"
import main from "../../assets/main.png"

export default function Main(){
    return (
        <>
            <div className="main">

                <div className="mainFilha1">
                    <div >
                        <div className="neto">
                            <p>
                                <span>Melhores ofertas personalizadas</span>
                            </p>
                        </div>

                        <div className="neto">
                            <h1>
                                <strong>
                                    Queima  de<br />
                                    stoque Nike
                                </strong>
                            </h1>
                        </div>

                        <div className="neto">
                            <p>
                                Consequat culpa exercitation mollit nisi excepteur do <br />
                                do tempor laboris eiusmod irure consectetur
                            </p>
                        </div>

                        <div >
                            <ButtonMain/>
                        </div>
                    </div>

         
                </div>
            </div>
        </>
    )
}