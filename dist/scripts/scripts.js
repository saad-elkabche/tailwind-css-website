const btn=document.getElementById('btn-menu');
const menu=document.getElementById('menu');

btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
})