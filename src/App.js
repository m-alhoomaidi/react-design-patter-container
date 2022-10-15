import React from "react";
import './app.css'
import { Movie } from "./Movie";
import { DataSource } from "./DataSouce";
function App() {
  return (
    <>
      <DataSource resourceUrl='/movies' resourceName='movie'>
        <Movie />
        <Movie />
      </DataSource>
    </>
  );
}

export default App;
