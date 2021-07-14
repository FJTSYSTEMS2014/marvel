import axios from 'axios';

import {useState, useEffect} from 'react';
function App () {
  const [personajes, setPersonajes] = useState ([]);

  useEffect (() => {
    axios
      .get (
        'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=0f7ec6e9620a0aea41af082d03d7a88d&hash=804f04417964946af208ca3ab2546bb9'
      )
      .then (respuesta => {
        setPersonajes (respuesta.data.data.results);
      })
      .catch (error => console.log (error));
  }, []);
  console.log (personajes);

  return (
    <div className="App">
      <h1>Personajes de Marvel</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {personajes.map (per => (
          <div className="col">

            <div className="card" style={{width: '10rem', height: '18rem'}}>
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">{per.name}</p>

              </div>{' '}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
/*<div className="col" key={per.id}> */
