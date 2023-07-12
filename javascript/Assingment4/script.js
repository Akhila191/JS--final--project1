var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}
const content= document.body
const parentDiv= document.createElement('div')
content.appendChild(parentDiv)
parentDiv.setAttribute("class","mainDiv")
const leftDiv= document.createElement('div')
leftDiv.setAttribute("class","leftDiv")
const rightDiv= document.createElement('div')
rightDiv.setAttribute("class","rightDiv")
parentDiv.appendChild(leftDiv)
parentDiv.appendChild(rightDiv)
var productImg= document.createElement('img')
leftDiv.append(productImg)


function rightDetails(val){
  let a=document.createElement('h1')
  a.append(productData.name)
  val.appendChild(a)
  let b=document.createElement('h4')
  b.append(productData.brand)
  val.appendChild(b)
  let c1=document.createElement('h3')
  c1.append("Price: Rs ")
  let c2=document.createElement('span')
  c2.append(productData.price)
  c1.appendChild(c2)
  val.appendChild(c1)
  let d=document.createElement('h4')
  d.append("Description")
  val.appendChild(d)
  let e=document.createElement('p')
  e.append(productData.description)
  val.appendChild(e)
}

rightDetails(rightDiv)


const imagesDiv=document.createElement('div')
rightDiv.appendChild(imagesDiv)
imagesDiv.setAttribute("class","imagesDiv")
const heading= document.createElement('h4')
heading.append("Product Preview")
imagesDiv.appendChild(heading)
const imagesPreview=document.createElement('div')
imagesDiv.appendChild(imagesPreview)
imagesPreview.setAttribute("class","imagesPreview")
function imagesLoad(num){
  for(i=0;i<num;i++){
      let x= document.createElement('img')
      x.setAttribute("id","img"+[i])
      x.setAttribute("src",productData.photos[i])
      imagesPreview.appendChild(x)
  }
}
imagesLoad(6)

var photo0 = document.getElementById("img0");
photo0.src = productData.photos[0];

var photo1 = document.getElementById("img1");
photo1.src = productData.photos[1];

var photo2 = document.getElementById("img2");
photo2.src = productData.photos[2];

var photo3 = document.getElementById("img3");
photo3.src = productData.photos[3];


var photo4 = document.getElementById("img4");
photo4.src = productData.photos[4];

var photo5 = document.getElementById("img5");
photo5.src = productData.photos[5];

function changeImage() {

photo0.addEventListener("click", function() {
  productImg.src = productData.photos[0];
});

photo1.addEventListener("click", function() {
  productImg.src = productData.photos[1];
});

photo2.addEventListener("click", function() {
  productImg.src = productData.photos[2];
});

photo3.addEventListener("click", function() {
  productImg.src = productData.photos[3];
});

photo4.addEventListener("click", function() {
  productImg.src = productData.photos[4];
});

photo5.addEventListener("click", function() {
  productImg.src = productData.photos[5];
});

}
changeImage();

photo0.addEventListener("load",function(){
productImg.src = productData.photos[0];
const activeClass=document.getElementById("img0")
activeClass.classList.add("active")
})

const element= document.querySelectorAll(".imagesPreview img")
element.forEach((elm)=>{
elm.addEventListener("click",()=>{
  document.querySelector(".active").classList.remove("active")
  elm.classList.add("active")
})
})