const btn =document.querySelector(".btn");

btn.addEventListener("mouseover", (event) =>{

   const x= (event.pageX - btn.offsetTop);
   const y= (event.pageY - btn.offsetLeft);

   btn.style.setProperty("--xPos", x+ "px");
   btn.style.setProperty("--YPos", y+ "px");
});
