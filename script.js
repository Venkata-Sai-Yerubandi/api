/**function loadapidata(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
} **/










function loadapidata(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data=> displayData(data))
}

function displayData(data){
   const span=document.getElementById("spantag");

   for(const user of data) {
    const p= document.createElement('p');
    p.innerText=user.name;
    span.appendChild(p);
    

   }
  }





let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit );

function handleSubmit(event) {
      event.preventDefault();
      let formData = new FormData(form);
      let data =Object.fromEntries(formData);
      let jsonData =JSON.stringify(data);

      fetch("https://jsonplaceholder.typicode.com/posts", {
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:jsonData   
      }).then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.log(err))
} 




      
