
import React, { useEffect, useState, Fragment } from "react";
import Tabletop, {  } from "tabletop";




export default function Google() {
  const [data, setData] = useState([]);

  useEffect(() => {
      Tabletop.init({
      key: "1afr_9ZV1u1121UoNm1OJhRdEzE1v6YP5txBJTHAbUtY",
      simpleSheet: true,
    
    })
      .then((data) => {
        setData([...data]);
        
      })
      .catch((err) => console.warn(err));
  }, []);
  
  return (
    <div id="one">
    <ul className="gogle">
      {data.map((item, i) => (
        <Fragment key={i}>
          <li>Liikettä havaittu -- {item.lamppu_id}</li>
          <li>Valoisuus Lux -- {item.valoisuus}</li>
          <li>Lamppu sytytetty -- {item.lamppu_sytytetty}</li>
          <li>Pvm ja klo -- {item.date_time}</li>
          <br />
          
        </Fragment>
      ))}
    </ul>
    </div>
   
  );
}