import { useState } from "react";
import "./home.css";

function Home() {
    // Array che contiene le voci del menu
    const menu = ["scelta1", "scelta2", "scelta3"];
    
    // Stato per tenere traccia della scelta corrente (0 indica che nessuna scelta è stata effettuata)
    const [scelta, setScelta] = useState(0);

    // Funzione per rendere il contenuto dinamico basato sulla scelta corrente
    const renderContent = () => {
        switch (scelta) {
            case "scelta1":
                return <div className="contenuto">Contenuto per Scelta 1</div>;
            case "scelta2":
                return <div className="contenuto">Contenuto per Scelta 2</div>;
            case "scelta3":
                return <div className="contenuto">Contenuto per Scelta 3</div>;
            default:
                return null; // Nessun contenuto se scelta non corrisponde a una voce valida
        }
    };

    return (
        <>
            {/* Contenitore del menu: visibile solo se scelta è 0 */}
            <div id="containerHome" style={{ display: scelta === 0 ? "" : "none" }}>
                {menu.map((item, index) => (
                    // Ogni voce del menu, con evento click per aggiornare lo stato "scelta"
                    <div key={index} className="sceltaMenu" onClick={() => setScelta(item)}>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Contenitore del contenuto: visibile solo se una scelta è stata effettuata (scelta != 0) */}
            <div id="contenutoScelta" style={{ display: scelta === 0 ? "none" : "" }}>
                <div>
                    {/* Pulsante per tornare alla home (reset dello stato scelta a 0) */}
                    <span onClick={() => setScelta(0)}>torna alla home</span>
                </div>
                {/* Chiamata alla funzione renderContent per mostrare il contenuto dinamico */}
                {renderContent()}
            </div>
        </>
    );
}

export default Home;
