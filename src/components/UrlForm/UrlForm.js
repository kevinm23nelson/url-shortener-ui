import React, { useState } from 'react';


function UrlForm({ shortenUrl }) {
  const [title, setTitle] = useState('');
  const [long_url, setLong_Url] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (title && long_url) {
      const newUrl = {
        id: Date.now(),
        title,
        long_url
      }
      shortenUrl(newUrl)
      clearInputs()
      setErrorMessage('')
    } else {
      setErrorMessage('All input fields need to be filled out.')
    }
  }

  const clearInputs = () => {
    setTitle('');
    setLong_Url('');
  }

  return (
    <form className="url-form">
      <input
        required
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type='text'
        placeholder='URL to Shorten...'
        name='long_url'
        value={long_url}
        onChange={event => setLong_Url(event.target.value)}
      />
      <button onClick={handleSubmit}>
        Shorten Please!
      </button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  )
}

export default UrlForm;
