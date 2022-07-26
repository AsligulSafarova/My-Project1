const info=[
 {
  id:1,
  title:"Goal",
  text:`1lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus aperiam facilis hic aliquam necessitatibus fugit eos odio ipsa expedita natus. illum neque ex nulla, praesentium alias minus suscipit rerum delectus cupiditate, fugiat beatae. Voluptatibus vitae totam eveniet cupiditate illo!
  lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus aperiam facilis hic aliquam necessitatibus fugit eos odio ipsa expedita natus. illum neque ex nulla, praesentium alias minus suscipit rerum delectus cupiditate, fugiat beatae. Voluptatibus vitae totam eveniet cupiditate illo!.
  1lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus aperiam facilis hic aliquam necessitatibus fugit eos odio ipsa expedita natus. illum neque ex nulla, praesentium alias minus suscipit rerum delectus cupiditate, fugiat beatae. Voluptatibus vitae totam eveniet cupiditate illo!
  `
 },
 {
  id:2,
  title: "Task ",
  text: " 2lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore 1lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus aperiam facilis hic aliquam necessitatibus fugit eos odio ipsa expedita natus. illum neque ex nulla, praesentium alias minus suscipit rerum delectus cupiditate, fugiat beatae. Voluptatibus vitae totam eveniet cupiditate illo!lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus aperiam facilis hic aliquam necessitatibus fugit eos odio ipsa expedita natus. illum neque ex nulla, praesentium alias minus suscipit rerum delectus cupiditate, fugiat beatae. Voluptatibus vitae totam eveniet cupiditate illo!."
  
 },
 {
  id:3,
  title: "Mathods",
  text: "  3lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tempore pariatur. Porro repudiandae, laudantium cupiditasimilique velit labore "
 },

];
 const root_elem= document.querySelector(".root");
 
const container= document.querySelector("div");
container.classList.add("container");

const photo_elem=document.createElement("div");
photo_elem.classList.add("photo");
const img_elem= document.createElement("img");
const texts_elem= document.createElement("div");
texts_elem.classList.add("texts");

img_elem.src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/02/28151102/web-developers.jpg";

photo_elem.append(img_elem);


const  getInfos= info.map(({title,text})=>{
 const button_elem= document.createElement("button");
 button_elem.addEventListener("click", event=>{
  [...event.target.parentNode.children].forEach(btn=>btn.classList.remove("active"));
 event.target.classList.add("active");
 root_elem.innerText=text;
 });
 button_elem.innerText=title;
 return button_elem;

});
texts_elem.append(...getInfos);
container.append(photo_elem, texts_elem, root_elem);


