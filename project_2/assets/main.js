window.onload = function(){

    (function(div, span){
        span.forEach( el => {
            el.addEventListener("click", function(e){
                //div.forEach(divEl => divEl.classList.remove("active"));
                
                this.parentElement.classList.contains("active") ?
                this.parentElement.classList.remove("active")   :
                this.parentElement.classList.add("active")
            });
        });
    })( [...document.querySelectorAll(".content .assignment")], [...document.querySelectorAll(".content .assignment span")] );


    (function(button,menu){

        console.log(button);
        button.addEventListener("click", function(e){
            console.log(this);
            menu.classList.contains("opened") ? menu.classList.remove("opened") : menu.classList.add("opened")
        });

    })( document.querySelector(".burger"), document.querySelector(".nav-wrapper .nav .nav-left ul") );

};