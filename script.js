const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp= document.querySelector('.btnLogin-popup');
const iconClose= document.querySelector('.login-close');

registerLink.addEventListener("click",()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener("click",()=>{
    wrapper.classList.remove('active')
})

btnPopUp.addEventListener("click",()=>{
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove('active-popup')
})
