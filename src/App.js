import axios from 'axios';
import React from 'react';
import AlbumList from './component/AlbumList';
import Photo from './component/Photo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import './App.css';

function App() {
  const [albums, setAlbums] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);

  const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(albums=>setAlbums(albums.data))
    .catch(err=>console.log(err))

    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(photos=>setPhotos(photos.data))
    .catch(err=>console.log(err))
  }

  React.useEffect(()=>{
    getData()
  },[])

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <AlbumList albums={albums}/>
          </Route>
          <Router exact path="/photo">
            <Photo photos={photos}/>
          </Router>
          
        </Switch>
        
      </Router>
      

    </div>
  );
}

export default App;
