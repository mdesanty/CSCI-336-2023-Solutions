import { useState, useEffect } from "react";
import axios from "axios";

function Pun(props) {
  const [pun, setPun] = useState("");

  useEffect(() => {
    axios.get("https://www.punapi.rest/api/pun")
      .then(response => {
        setPun(response.data.pun);
      })
      .catch(error => {
        console.log(`There was an error getting the pun: ${error.message}.`);
      });
  }, []);

  return (
    <div id="pun-container">
      <h2>{ props.header }</h2>
      <p id="pun">{pun}</p>
    </div>
  );
}

export default Pun;