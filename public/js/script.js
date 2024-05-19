

//hamburger
const btn = document.querySelector('#hamburger');
const item = document.querySelector('#hamburger-item');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('hamburger-active')
    item.classList.toggle('hidden')
})

window.addEventListener('click',(e)=>{
    if (e.target !== item && e.target !== btn)  {
        btn.classList.remove('hamburger-active')
        item.classList.add('hidden')
    }
});


const body = document.querySelector("body");
const checkbox = document.querySelector("#darkmode");

  checkbox.addEventListener("click", () => {
    checkbox.checked
      ? body.classList.add("dark")
      : body.classList.remove("dark");
    // body.classList.toggle('dark');
  });