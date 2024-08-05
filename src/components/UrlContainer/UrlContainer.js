import React from 'react';
import './UrlContainer.css';
import '../Card/Card'

function UrlContainer({urls}){
  const urlCards = urls.urls.map(url => {
    return (
      <Card
        long_url={url.long_url}
        short_url={url.short_url}
        title={url.title}
        id={url.id}
        key={url.id}
      />
    )
  });

  return (
    <section className="urls-container">
      { urlCards.length ? urlCards : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
