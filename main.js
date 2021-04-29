 const hambut=document.getElementById('hambut')
const links=document.getElementById('links')
let error=document.getElementById('error')
const go=document.getElementById('go')
const email=document.getElementById('email')
const radiobtn=document.querySelectorAll('.butradio')
const testimonal=document.querySelectorAll('.subtesti')
const spancheck=document.querySelectorAll('.spanceck')
let toggle=false
const showlink=()=>{
    if (toggle===false) {
        hambut.src='./images/icon-close.svg';
        links.classList.add('mobilelink');
        links.classList.remove('desk');
    }
    else{
        hambut.src='./images/icon-hamburger.svg';
        links.classList.add('desk');
        links.classList.remove('mobilelink');
    }
    toggle= !toggle
}

const handlesubmit=(e)=>{
  e.preventDefault();
  
  if (email.value==='') {
    error.innerText='The email field is empty'
  }
  else{
    if (ValidateEmail(email)===false ) {
      error.innerText='The email address is not formatted correctly'
    }
  }
}


function ValidateEmail(mail) 
{
    h=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (h.test(mail.value))
  {
    return (true)
  }
    
    return (false)
}


const manualtestimonial=(i)=>{
   testimonal.forEach(test=>test.classList.add('desk'))
  spancheck.forEach(span=>{span.classList.remove('red')})
 
  testimonal[i].classList.add('mobile')
   testimonal[i].classList.remove('desk')
   spancheck[i].classList.add('red')
  
  
}
function changetesti() {
  spancheck.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{manualtestimonial(i)})
   })
}
hambut.addEventListener('click',showlink);
go.addEventListener('click',handlesubmit);
changetesti();

