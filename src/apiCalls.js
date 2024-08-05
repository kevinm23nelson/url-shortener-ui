export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
    .then(data => data.urls)
    .catch(error => {
      console.log(error.message)
      return []
    })
}

export const postURL = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUrl)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Error with POST')
    }
    return response.json()
  })
  .catch(error => {
    console.log(error.message)
    throw error
  })
}