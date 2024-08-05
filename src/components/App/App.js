import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postURL } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls()
      .then(fetchedUrls => {
        if (fetchedUrls) {
          setUrls(fetchedUrls)
        }
      })
  }, [])

  function shortenUrl(newUrl) {
    postURL(newUrl)
      .then(postedUrl => {
        setUrls([...urls, postedUrl])
      })
      .catch(error => {
        console.log('Error posting URL')
      })
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm shortenUrl={shortenUrl}/>
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
}

export default App;
