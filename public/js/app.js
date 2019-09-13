
/*fetch('http://puzzle.mead.io/puzzle').then((response) => {
response.json().then((data)=>
    {
    console.log(data.puzzle);
    })
})

fetch('http://localhost:3000/weather?address=fremont,ca').then(
    (response)=>{
        response.json().then((data)=>{
            if(data.error){
              console.log(data.error)
            } 
            else
            {
            console.log(data.forecast)
            console.log(data.location)
            }
        })
})*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then(
    (response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
            } 
            else
            {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;            
            }
        })
    })
    //console.log(location)
})
