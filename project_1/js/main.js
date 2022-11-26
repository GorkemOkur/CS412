window.onload = function(){

    let mobileButton = document.querySelector(".navbar .nav .menu i");
    let nav = document.querySelector(".navbar .nav");
    
    mobileButton.addEventListener("click",function(){

        if( !nav.classList.contains("active") ){

            nav.classList.add("active");
            mobileButton.classList.remove("fa-bars");
            mobileButton.classList.add("fa-x");
            console.log("EVET");
        }else{
            nav.classList.remove("active");
            mobileButton.classList.remove("fa-x");
            mobileButton.classList.add("fa-bars");
            console.log("HAYIR");
        }

        
    });
//  fa-bars  fa-x  
};