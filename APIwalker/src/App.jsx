import Carts from "../Componentes/Carts";

import { useState } from "react";
import axios from 'axios';


const Luke = () => {
  const [inputs, setInputs] = useState("");
  const [opciones, setopciones] = useState("people");
  const [datos, setdatos] = useState({});


  function handleSubmit(event) {
    event.preventDefault();

    const url = 'https://swapi.dev/api/' + opciones + '/' + inputs;
    axios.get(url)
      .then(function (response) {
        setdatos(response.data);
      })
      .catch((error) => {
        console.log('Error', error)
        setopciones('')
      });
    setInputs('')
  }

  return (
    <>
      <div className="container mt-5 ">
        <form className="d-flex align-items-center justify-content-center gap-2" onSubmit={handleSubmit}>
          <label> Search for:</label>
          <select
            value={opciones}
            className="form-select"
            onChange={(e) => setopciones(e.target.value)}
          >
            <option value="people">people</option>
            <option value="planets">planets</option>
            <option value="films">films</option>
            <option value="species">species</option>
            <option value="vehicles">vehicles</option>
            <option value="starships">starships</option>
          </select>
          <label className="">ID:</label>
          <input
            type="number"
            value={inputs}
            className="form-control"
            placeholder="Enter id"
            onChange={(e) => setInputs(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
      </div>

      <Carts Opciones={opciones} datos={datos} />

    </>
  );
}
export default Luke;