let data = [];
let persData = {};

window.onload = function(){

    (function(div, span){
        span.forEach( el => {
            el.addEventListener("click", function(e){
                
                this.parentElement.classList.contains("active") ?
                this.parentElement.classList.remove("active")   :
                this.parentElement.classList.add("active")
            });
        });
    })( [...document.querySelectorAll(".content .assignment")], [...document.querySelectorAll(".content .assignment span")] );


    (function(button,menu){

        button.addEventListener("click", function(e){
            menu.classList.contains("opened") ? menu.classList.remove("opened") : menu.classList.add("opened")
        });

    })( document.querySelector(".burger"), document.querySelector(".nav-wrapper .nav .nav-left ul") );



    /*
    https://raw.githubusercontent.com/GorkemOkur/CS412/main/Calendar.csv

    https://code.tutsplus.com/tutorials/parsing-a-csv-file-with-javascript--cms-25626

    https://stackoverflow.com/questions/8389646/send-post-data-on-redirect-with-javascript-jquery
    */

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    (function(btn, urlInput){
        if(btn != null){
            btn.addEventListener("click", function(event){

                try{
                    hhh(urlInput.value);
                }catch(er){
                    console.log("Error: "+er);
                }

            });
        }

    })(document.getElementById("fetch-btn"), document.getElementById("url") );

};


function hhh(url){
    try{
        let con = new XMLHttpRequest();

        con.open("GET", url,true);

        con.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                data = this.responseText.split("\n").slice(1);///    \r?\n|\r/
                
                data = data.filter(e => e.length > 2);

                persData["calendar"] = [];

                data.forEach(e => {
                    var ev = e.replaceAll('"',"").split(",");
                    console.log(e);
                    persData["calendar"].push({"date":(ev[0] +" - "+ ev[1]), "event":ev[2].split(/\r/)[0] });
                });

                window.localStorage.setItem("calendar", JSON.stringify( persData) );

                // redirect the user to the CALENDAR page
                // replace function delete the history, therefore user cannot use back butto to return previous page.
                // assign do not delete history. !!
                window.location.replace("/calendar.html");

            }else if(this.readyState == 4 && this.status == 404){
                throw(`The url you have entered(${url}) is wrong or deleted.`);
            }

        };

        con.send();
                
    }catch(er){
        console.log(er);
    }
}