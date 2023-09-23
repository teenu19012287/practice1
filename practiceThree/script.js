

const btn=document.querySelector("#throttle");

const throttleFunction=(func, delay)=>{
 
  let prev = 0;
  return (...args) => {
   
    let now = new Date().getTime();
 
    console.log(now-prev, delay);

    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
};

document.querySelector('#center').addEventListener("mousemove",
throttleFunction((dets) => {
    //less repetetion code
  var div = document.createElement("div");
  div.classList.add("imagediv");
  div.style.left = dets.clientX+'px';
  div.style.top = dets.clientY+'px';

  var img = document.createElement("img");
  img.setAttribute("src","https://media.istockphoto.com/id/1433211776/photo/woman-silhouette-in-front-of-the-ocean-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=xGzw_4wTjK0uKJLS42lR7xPsD7tGRTrx-mWBl0ylih4=");
  div.appendChild(img);
 
   gsap.to(img , {
    y: "0",
    ease: Power1,
    duration: .6
   });
   gsap.to(img, {
    y:"100%",
    delay: .6,
    ease: Power2,

   });



   document.body.appendChild(div);
  setTimeout(function(){
    div.remove();
  },2000)
},400)

);