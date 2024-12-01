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
      <table>
        <tr>
            <th>Alunno</th>
            <th>Presenza</th>
        </tr>
        {alunni
          .filter((item) => item.classe === classe) //filtro sulla classe
          .map((item, index) => (
            <tr>
                <td key={index}>
                {item.nome} {item.cognome}
                </td>
                <td><input type="checkbox"/></td>
            </tr>
          ))}
      </table>
    </div>
    </>
  );
}

export default GestionePresenze;
