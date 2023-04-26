function validation(){
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email').value;
  const submitButton = document.querySelector('button');
  const message = document.getElementById('message');
     
  const filter = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  if (emailInput.match(filter)) {
    message.innerHTML = 'Valid email address';
    message.style.color = '#68ed7e';
  }
  else{
    message.innerHTML = 'Invalid email address';
    message.style.color = 'hsl(0, 93%, 68%)';
  }
  if (emailInput == '') {
    message.innerHTML = 'Please enter an email address';
    message.style.color = 'hsl(0, 93%, 68%)';
 }
}