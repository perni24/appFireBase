import { useState, useEffect } from "react";
import "./gestionePresenze.css";

function GestionePresenze() {
  const [alunni, setAlunni] = useState([]);
  const [classe, setClasse] = useState(1);

  useEffect(() => {
    let dati = [
      { nome: "Luca", cognome: "Bellini", classe: 1 },
      { nome: "Mirco", cognome: "Bellini", classe: 1 },
      { nome: "Valentina", cognome: "Bellini", classe: 1 },
    ];

    setAlunni(dati);
  }, []);

  return (
    <>
    <div id="containerApp">
      
      <select name="classe" id="selectClasse" onChange={(e) => setClasse(parseInt(e.target.value, 10))}>
        <option value="1">prima elemntare</option>
        <option value="2">seconda elemntare</option>
        <option value="3">terza elemntare</option>
        <option value="4">quarta elemntare</option>
        <option value="5">quinta elemntare</option>
      </select>
      
      <table>
        <thead>
        <tr>
            <th style={{width : "80%"}}>Alunno</th>
            <th>Presenza</th>
        </tr>
        </thead>
        <tbody>
        {alunni
          .filter((item) => item.classe === classe) //filtro sulla classe
          .map((item, index) => (
            <tr key={index}>
                <td key={index}>
                {item.nome} {item.cognome}
                </td>
                <td className="checkbox"><input type="checkbox"/></td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}><button>salva</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default GestionePresenze;
