import { useState, useEffect } from "react";
import "./gestionePresenze.css";

function GestionePresenze() {
  const [alunni, setAlunni] = useState([]); // Stato per memorizzare gli alunni
  const [classe, setClasse] = useState(1); // Stato per memorizzare la classe selezionata

  useEffect(() => {
    // Simula il recupero dei dati degli alunni
    let dati = [
      { id : 1, nome: "Luca", cognome: "Bellini", classe: 1, presenza: false},
      { id : 2, nome: "Mirco", cognome: "Bellini", classe: 1, presenza: true},
      { id : 3, nome: "Valentina", cognome: "Bellini", classe: 1, presenza: false},
    ];

    setAlunni(dati); // Imposta i dati degli alunni nello stato
  }, []); // L'array vuoto come secondo argomento fa sì che l'effetto venga eseguito solo una volta al montaggio del componente

  const changePresenza = (id, stato) => {
    // Funzione per cambiare lo stato della presenza di un alunno
    let ris = []

    alunni.map(element => {
      if(element.id === id ){
        ris.push({ ...element, presenza: stato });
      }
      else{
        ris.push(element);
      }
    });
  
    // Aggiorna lo stato della classe con il nuovo array
    setAlunni(ris);
  };

  return (
    <>
      <div id="containerApp">
        {/* Select per scegliere la classe */}
        <select name="classe" id="selectClasse" onChange={(e) => setClasse(parseInt(e.target.value, 10))}>
          <option value="1">prima elementare</option>
          <option value="2">seconda elementare</option>
          <option value="3">terza elementare</option>
          <option value="4">quarta elementare</option>
          <option value="5">quinta elementare</option>
        </select>
        
        {/* Tabella per visualizzare gli alunni e le loro presenze */}
        <table>
          <thead>
            <tr>
              <th style={{ width: "80%" }}>Alunno</th>
              <th>Presenza</th>
            </tr>
          </thead>
          <tbody>
            {alunni
              .filter((item) => item.classe === classe) // Filtra gli alunni in base alla classe selezionata
              .map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.nome} {item.cognome}
                  </td>
                  <td className="checkbox">
                    <input type="checkbox" checked={item.presenza} onChange={(e) => changePresenza(item.id, e.target.checked)}/>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GestionePresenze;
