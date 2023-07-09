var tl = gsap.timeline;

   gsap.to("#hero5>#f",{
        scrollTrigger:{
            trigger:"#hero5>#f",
            scrub:1,
            scroller:"body",
            start:"top 30%",
            end:"bottom 70%"
        },
        y: "50%",
        x:"50%",
        duration:2,
        ease:Expo.easeIn,
    })
    gsap.to("#hero5>#s",{
        scrollTrigger:{
            trigger:"#hero5>#f",
            scrub:1,
            scroller:"body",
            start:"top 30%",
            end:"bottom 70%"
        },
        y: "-50%",
        x:"-50%",
        duration:3,
        ease:Expo.easeIn,
    })
    gsap.to("#hero6>h1",{
        scrollTrigger:{
            trigger:"#hero6>h1",
            scrub:1,
            scroller:"body",
            start:"top 60%",
            end:"bottom 70%",
        },
        y:"-30%",
        duration:2,
        ease:Expo.easeIn,
    })
    gsap.to("#nav",{
        scrollTrigger:{
            trigger:"#hero1",
            scrub:1,
            scroller:"body",
            start:"top 30%",
            end:"bottom 70%",
        },
        backgroundColor:"black",
        duration:2,
        ease:Expo.easeIn,
    })
    gsap.to("#overlay",{
        scrollTrigger:{
            trigger:"#hero1",
            scrub:1,
            scroller:"body",
            start:"top -15%",
            end:"bottom 70%",
        },
        backgroundColor:"black",
        duration:4,
        ease:Expo.ease,
    })
    var icon = document.querySelectorAll("i")
    var h4all = document.querySelectorAll("h4")
    var h2all = document.querySelectorAll("h2");
    var h3all = document.querySelectorAll("h3");
    var cursor = document.querySelector("#cursor");
    var blob = document.querySelector("#blob");
    var main = document.querySelector("#main");
    var cards = document.querySelector("#cards");
   var card = document.querySelector("#c1");
   var card2 = document.querySelector("#c2");
   var card3 = document.querySelector("#c3");
   main.addEventListener("mousemove",function(dets){
    const rotx = dets.x/40;
    const roty = dets.y/40;
    card.style.transform = `rotateX(${rotx}deg) rotateY(${roty}deg)`
    card2.style.transform = `rotateX(${rotx}deg) rotateY(${roty}deg)`
    card3.style.transform = `rotateX(${rotx}deg) rotateY(${roty}deg)`
   })
   main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x - 15 + "px"
    cursor.style.top = dets.y - 15 + "px"


   })
   function hover(d){
    d.addEventListener("mouseenter",function(){
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "1px solid #fff"
        cursor.style.scale = 2
        blob.style.opacity = 0
        
        })
        d.addEventListener("mouseleave",function(){
        cursor.style.backgroundColor = "#95C11E"
        cursor.style.border = "0px solid #95C11E"
        cursor.style.scale = 1
        blob.style.opacity = 0.3
        blob.style.scale = 1
        })
   }
   h2all.forEach(function(elem){
    hover(elem)
   })
   h3all.forEach(function(elem){
    hover(elem)
   })
   h4all.forEach(function(elem){
    hover(elem)
   })
    icon.forEach(function(elem){
    hover(elem)
   })

