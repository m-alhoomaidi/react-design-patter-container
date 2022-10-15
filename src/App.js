import React from "react";
import './app.css'
import { Movie } from "./Movie";
import { DataSource } from "./DataSouce";
import { Post } from "./Post";
import { Photo } from "./Photo";
function App() {
  return (
    <>
      {/* <DataSource resourceUrl='/movies' resourceName='movie'>
        <Movie />
        <Movie />
      </DataSource> */}
      {/* <DataSource resourceUrl='/posts' resourceName='post'>
        <Post />
      </DataSource> */}

      <DataSource resourceUrl='/photos' resourceName='photo'>
        <Photo />
      </DataSource>
    </>
  );
}

export default App;
