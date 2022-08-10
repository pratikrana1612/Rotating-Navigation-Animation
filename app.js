const navBtn = document.querySelector('.navbar');
const section = document.querySelector('section');
const lis = document.querySelectorAll('li');

navBtn.addEventListener('click',() =>
{
    navBtn.classList.toggle('toggle');
    section.classList.toggle('rotate');
    lis.forEach(li => li.classList.toggle('come'));
})