// USER REGISTRATION
function inputUser() {
    var name = document.getElementById("name").value;
    var birthplace = document.getElementById("birthplace").value;
    var birthday = document.getElementById('birthday').value;
    var timeofbirth = document.getElementById('timeofbirth').value;
    alert("Name: " + name + ", Birth place: " + birthplace + ", Birthday: " + birthday + ", Time of Birth: " + timeofbirth);
}

document.getElementById('userInput').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    const name = document.getElementById('name').value;
    const birthplace = document.getElementById('birthplace').value;
    const birthday = document.getElementById('birthday').value;
    const timeofbirth = document.getElementById('timeofbirth').value;
    

    // Add code to store 'name' and 'birthday' in your database (you can use localStorage for simplicity).
    localStorage.setItem('name', name);
    localStorage.setItem('birthplace', birthplace);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('timeofbirth', timeofbirth);

    fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, birthplace, birthday, timeofbirth })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});




// ALGORAND BLOCKCHAIN
    const web3 = new web3('https://127.0.0.1:5500/index1.html'); // Replace with your Algorand node URL



// Start server
PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// OPENAI
document.getElementById('generateText').addEventListener('click', function() {
    const apiKey = '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'
    const prompt = 'Once upon a time...'; // Add your desired prompt

    // Make a POST request to OpenAI's API
    fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        const generatedText = data.choices[0].text;
        document.getElementById('output').innerHTML = generatedText;
    })
    .catch(error => console.error('Error:', error));
});
  
