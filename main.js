var proj=document.querySelector("#projects_1").children

proj[0].addEventListener("click",function()
{
    window.open("https://alamelu98.github.io/Bootstrap_project1/","_blank");

})
proj[1].addEventListener("click",function()
{
    window.open("https://mitraphoto.github.io/mitra_photography/index.html","_blank");

})
proj[2].addEventListener("click",function()
{
    window.open("https://alamelu98.github.io/todo-app/","_blank");

})
 var down=document.getElementsByClassName("down")
 
console.log(down[0])
 down[0].addEventListener("click",function()
{
    window.location="#skills"
})
down[1].addEventListener("click",function()
{
    window.location="#projects"
})
down[2].addEventListener("click",function()
{
    window.location="#contact"
})