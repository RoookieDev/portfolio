window.addEventListener("scroll", scrollEffect);


function scrollEffect(){
    var midCon = this.document.querySelector(".midCon");
    var midConPosition = midCon.getBoundingClientRect().top;
    var screenPosition = this.window.innerHeight/2;

    var midCon = document.querySelectorAll(".midCon .card");
    if(midConPosition < screenPosition){
        midCon.forEach(
            (card)=>{
                card.style.top=0;
                card.style.opacity = 1;
        })
    }
    else{
        midCon.forEach(
            (card)=>{
                card.style.top="100px";
                card.style.opacity = 0;
        })
    }

    
    var aboutBx = document.querySelector(".aboutBx");
    var aboutBxPosition = aboutBx.getBoundingClientRect().top;

    var boxes = document.querySelectorAll(".aboutBx .col-md-6");
    
    if(aboutBxPosition < screenPosition){
        boxes[0].style.left =0;
        boxes[0].style.opacity=1;
        boxes[1].style.right =0;
        boxes[1].style.opacity=1;
    }


    else{
        boxes[0].style.left ="-100px";
        boxes[0].style.opacity=0;
        boxes[1].style.right ="-100px";
        boxes[1].style.opacity=0;
    }


    var projectBx = document.querySelector(".projects");
    var projectBxPos = projectBx.getBoundingClientRect().top;
    var proBox = document.querySelectorAll(".projects .col-md-4 .card img");

    if(projectBxPos < screenPosition){
        proBox.forEach((img)=>{
            img.style.top=0;
            img.style.opacity=1;
        });
    }

    else{
        proBox.forEach((img)=>{
            img.style.top="50px";
            img.style.opacity=0;
        });
    }


    var skillBox = document.querySelector(".skills");
    var skilBx_pos = skillBox.getBoundingClientRect().top;

    var flipCard = document.querySelectorAll(".flipCard");
    if(skilBx_pos < screenPosition){
        flipCard.forEach((card)=>{
            card.style.opacity = 1;
        });   
    }
    else{
        flipCard.forEach((card)=>{
            card.style.opacity = 0;
        });   
    }






}

    
