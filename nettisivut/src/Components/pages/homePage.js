import React from 'react';


function HomePage() {
  return (
    <div className="container-fluid">
      <h1 className="homeH1">
        Projekti
      </h1>
      <p className="homeP">
      The core-objectives were to measure movement and illumination with components connected to a microprocessor, turn on a led light when movement is detected and illumination is low, and then feed this information to Raspberry Pi as serial data. Raspberry Pi then writes the data to a Google sheet, and the user can view this information from a website which collects the data from the sheet.
      </p>
    
     
    </div>
  );
}

export default HomePage;
