// loading
$(document).ready(function () {
    $("#loading").fadeOut(3000, function () {
        $("body").css("overflow", "auto")
    })
})
// side bar
let colorItems = $(".color-item");
colorItems.eq(0).css("backgroundColor", "orange");
colorItems.eq(1).css("backgroundColor", "#09c");
colorItems.eq(2).css("backgroundColor", "teal");
colorItems.eq(3).css("backgroundColor", "tomato");
colorItems.eq(4).css("backgroundColor", "#333");
colorItems.click(function () {
    let myColor = $(this).css("backgroundColor");
    $("p,h3,h4,h5").css("color", myColor);
})

$(document).ready(function () {
    let colorBoxWidth = $(".color-box").outerWidth(true); ///240

    if ($(".sideBar").css("left") == "0px") {                                    ///240
        $(".sideBar").animate({ left: `-${colorBoxWidth}` }, 0)
    }
})

$("#sidebarToggle").click(function () {
    let colorBoxWidth = $(".color-box").outerWidth(true); ///240

    if ($(".sideBar").css("left") == "0px") {                                    ///240
        $(".sideBar").animate({ left: `-${colorBoxWidth}` }, 1000)
    }
    else {
        $(".sideBar").animate({ left: `0px` }, 1000)
    }
})
// header
let header = document.getElementById("header")
window.onscroll = function () {
    if (scrollY >= 300) {
        header.classList.add("header_2")
    }
    else {
        header.classList.remove("header_2")
    }
}



$("#sidebarToggle2").click(function () {
    let colorBoxWidth = $(".bookToggle").outerWidth(true); ///240

    if ($(".book").css("right") == "0px") {                                    ///240
        $(".book").animate({ right: `-${colorBoxWidth}` }, 1000)
    }
    else {
        $(".book").animate({ right: `0px` }, 1000)
    }
})
/// addProduct /////////

const container = [
    {
        id: 0 ,
        imgSrc: "./IMG/sp5.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 1 ,
        imgSrc: "./IMG/sp6.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 2 ,
        imgSrc: "./IMG/sp7.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 3 ,
        imgSrc: "./IMG/sp8.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 4 ,
        imgSrc: "./IMG/sp9.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 5 ,
        imgSrc: "./IMG/sp10.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 6 ,
        imgSrc: "./IMG/sp11.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 7 ,
        imgSrc: "./IMG/sp1.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 8 ,
        imgSrc: "./IMG/sp2.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 9 ,
        imgSrc: "./IMG/sp3.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 10 ,
        imgSrc: "./IMG/sp4.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,
    {
        id: 11 ,
        imgSrc: "./IMG/sp5.png" ,
        name: "sony" , 
        desc: "4K TV Game Mini Arcade Rocker Console 32GB/64GB" ,
        sale:"$22.51",
        price:"$29.5"
    } ,

]

function showProduct() {
    let rowProduct = "" ;
    for (let i = 0; i < container.length; i++) {
        rowProduct += `
        <div class="col-lg-3 col-md-6 col-sm-12">         
            <div class="tecket">             
              <img src="${container[i].imgSrc}" alt="" class="imgSrc" id="addProduct">
              <div class="text">
                <span>${container[i].name}</span>
                <h5>${container[i].desc}</h5>
                <span class="para">${container[i].sale}</span>
                <del>${container[i].price}</del>
                <button class="btn btn-info addProduct" onclick="addProduct(${i})">Add +</button>
              </div>
            </div>
        </div>
        `
    }
    document.getElementById("bodyCard").innerHTML = rowProduct ;
}
showProduct()

const product = [] ;
function addProduct(id) {
    const item = container.find((ele) => ele.id === id)
    product.push(item)
    displayProduct()
}
function displayProduct(){  
    let rowProduct2 = "" ;
    for (let i = 0; i < product.length; i++) {
        rowProduct2 += `
        <div class="media">
            <img src="${product[i].imgSrc}" alt="">
            <div class="text4">
            <span>${product[i].name}</span>
            <span>${product[i].sale}</span>
            <i class="fa-solid fa-circle-xmark" onclick="deleteProduct(${i}) " ></i>
            </div>
        </div>

        `
    }
    document.getElementById("marketShop").innerHTML = rowProduct2 ;
}
function deleteProduct(i) {
     product.splice(i,1)
     displayProduct()
}


/////photo ///////////// 
var imgs = Array.from(document.getElementsByClassName("imgs-item"))
var lightBoxContainer = document.getElementById("lightbox-container")
var lightBoxItem = document.getElementById("lightboxitem")
var nextBtn = document.getElementById("nextBtn")
var prevBtn = document.getElementById("prevBtn")
var closeBtn = document.getElementById("closeBtn")
var currentSlideIndex = 0

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", openLightBox)
    function openLightBox(eventInfo) {
        var imgSrc = eventInfo.target.src
        lightBoxContainer.style.display = "flex"
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
    }
}

nextBtn.addEventListener("click", nextSlide)
function nextSlide() {
    currentSlideIndex++
    if (currentSlideIndex > imgs.length - 1) {
        currentSlideIndex = 0
    }
    var imgSrc = imgs[currentSlideIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

prevBtn.addEventListener("click", prevSlide)
function prevSlide() {
    currentSlideIndex--
    if (currentSlideIndex < 0) {
        currentSlideIndex = imgs.length - 1
    }
    var imgSrc = imgs[currentSlideIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

closeBtn.addEventListener("click", closeSlide)
function closeSlide() {
    lightBoxContainer.style.display = "none"
}

document.addEventListener("keyup", function (eventInfo) {
    if (eventInfo.keyCode == 39) {
        nextSlide()
    }
    else if (eventInfo.keyCode == 37) {
        prevSlide()
    }
    else if (eventInfo.keyCode == 27) {
        closeSlide()
    }
})

function nextSlide2() {
    currentSlideIndex++
    if (currentSlideIndex > imgs.length - 1) {
        currentSlideIndex = 0
    }
    var imgSrc = imgs[currentSlideIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
