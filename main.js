// let button = document.querySelector("#button");


// button.addEventListener("mouseover", function changeImg(){

//     let img1 = document.querySelector("#img1");

//     if (img1.src.match("catAnimate/cat1.png")){
//         img1.src = "catAnimate/cat2.png"
//     } 
//     else if (img1.src.match("catAnimate/cat2.png")){
//             img1.src = "./catAnimate/cat3.png"
//     }
//     else if (img1.src.match("catAnimate/cat3.png")){
//             img1.src = "./catAnimate/cat1.png"
//     }
    
    
    
//     console.log(img1)
// })

let flag = 0;
function changeImg(){
    let img1 = document.querySelector("#img1");

    if (img1.src.match("catAnimate/cat1.png")){
        img1.src = "catAnimate/cat2.png"
    } 
    else if (img1.src.match("catAnimate/cat2.png") && (flag == 0)){
            img1.src = "./catAnimate/cat3.png";
            flag = 1;
            console.log(flag)
    }
    else if (img1.src.match("catAnimate/cat2.png") && (flag == 1)){
            img1.src = "./catAnimate/cat1.png";
            flag = 0;
            console.log(flag)
    }
    else if (img1.src.match("catAnimate/cat3.png")){
            img1.src = "./catAnimate/cat2.png"
    }
    console.log(img1)
}


setInterval(changeImg, 140)




function milkImgRotate(){
        let milkCat = document.querySelector("#milkCat");
        if (milkCat.style.transform == "rotate(0deg)"){
                milkCat.style.transform = "rotate(5deg)";
        }
        else{
                milkCat.style.transform = "rotate(0deg)"
        } 
        // milkCat.style.transform = "rotate(10deg)";
}
setInterval(milkImgRotate, 500)



let buyTicket = document.querySelector("#buyTicket");
buyTicket.addEventListener("click", function buy(){
        window.open("https://tickets.udnfunlife.com/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N03I0NBE");
        window.history.back(-1)
}
)


let logo = document.querySelector("#logo");
logo.addEventListener("click", function clickLogo(){
        window.location.reload();
})

let home = document.querySelector("#home");
home.addEventListener("click", function clickHome(){
        // window.scrollTo(0, 0);
        window.scroll({top: 0, left: 0, behavior: "smooth"})
        
})

let contact = document.querySelector("#contact");
let footer = document.querySelector("#footer");
let height = footer.offsetTop;
contact.addEventListener("click", function clickContact(){
        window.scroll({top:height, left:0, behavior: "smooth"})
})



let facebook = document.querySelector("#facebook");
let instagram = document.querySelector("#instagram");
let youtube = document.querySelector("#youtube");

facebook.addEventListener("click", function clickBottomLogo(){
        window.open("https://www.facebook.com/MEOWSEUMOFART/?locale=zh_TW");
        window.history.back(-1)
})
instagram.addEventListener("click", function clickBottomLogo(){
        window.open("https://www.instagram.com/meowseumofart1/");
        window.history.back(-1)
})

youtube.addEventListener("click", function clickBottomLogo(){
        window.open("https://www.youtube.com/watch?v=wRC2fv1Us9I");
        window.history.back(-1)
})







// 
// 
// 射出去的功能在這裡
// 
// 
let slide1 = document.querySelector("#slide1").style;
let slide2 = document.querySelector("#slide2").style;
let slide3 = document.querySelector("#slide3").style;
let slide4 = document.querySelector("#slide4").style;
let slide5 = document.querySelector("#slide5").style;
let slide6 = document.querySelector("#slide6").style;

let array = [slide1, slide2, slide3, slide4, slide5, slide6]

function changeImage(slide, array){
    array.forEach(element => {
        element.left =  "";
        element.top = "";
        element.width = "";
        element.height = "";
        element.backgroundSize = "";
        element.backgroundRepeat = "";
        element.backgroundColor = "";
    });
    
    slide.left =  "0";
    slide.top = "0";
    slide.width = "100%";
    slide.height = "100%";
    slide.backgroundSize = "contain";
    slide.backgroundRepeat = "no-repeat";
    slide.backgroundColor = "black";
    slide.transition =  "0.2s";
}