import { useState } from "react";
import "./home.css";
import GestionePresenze from "../gestionePresenze/gestionePresenze";

function Home() {
    // Array che contiene le voci del menu
    const menu = ["Nuova Attività", "Storico Attività", "Archivio"];
    
    // Stato per tenere traccia della scelta corrente (0 indica che nessuna scelta è stata effettuata)
    const [scelta, setScelta] = useState(0);

    // Funzione per rendere il contenuto dinamico basato sulla scelta corrente
    const renderContent = () => {
        switch (scelta) {
            case "Nuova Attività":
                return <GestionePresenze/>;
            case "Storico Attività":
                return <div className="contenuto">Storico Attività</div>;
            case "Archivio":
                return <div className="contenuto">Archivio</div>;
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
            <div id="containerBackHome" style={{ display: scelta === 0 ? "none" : "" }}>
                    {/* Pulsante per tornare alla home (reset dello stato scelta a 0) */}
                    <span onClick={() => setScelta(0)}>Torna alla Home</span>
            </div>
            <div id="contenutoScelta" style={{ display: scelta === 0 ? "none" : "" }}>
                {/* Chiamata alla funzione renderContent per mostrare il contenuto dinamico */}
                {renderContent()}
            </div>
        </>
    );
}

export default Home;
