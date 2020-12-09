function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/article')
    .then(res => {
      return res.json()
    })
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }


//Function to send the data
const postData = async(url = '') => {
    const response = await fetch('http://localhost:8081/article', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
         'Content-Type': 'text/plain',
      },
      body: data,
    });
    
    try {
      const data = await response.json();
      console.log(data)
      return newData
    } catch (error) {
      console.log('error', error);
    }
  }
  
  //Update UI with the data from the Meaningcloud API
  function updateUI(data) {
    console.log(data)
    polarity.innerHTML = "Polarity: " + polarityText(data.score_tag);
    confidence.innerHTML = `Subjectivity: ${data.Subjectivity}`;
    subjectivity.innerHTML = `Irony: ${data.Irony}`;
  }