window.onload = function(){

    (function(calWrapper){
        if(calWrapper != null){
            //console.log("calWrapper: "+calWrapper);

            let calData = JSON.parse(window.localStorage.getItem("calendar"))["calendar"];
            //console.log(calData);

            let calEvent = "<div class=\"calender\">";

            calData.forEach((e,i) => {
                var calDate = new Date(e["date"]);
                var hasMore = e["event"].length > 54;
                
                calEvent += '<div class="cal-item'+( hasMore ? ' hasMore': '')+'" onclick=\"deneme(event)\">' ;
                    calEvent += "<span class=\"cal-date\">"+ e["date"] +"</span>";
                    calEvent += "<span class=\"cal-event event-id-"+i+"\">" + e["event"].slice(0,54).trim() + ( hasMore ?"<b class=\"more\">&rArr;</b>":"") + "</span>";
                calEvent += '</div>';

            });

            calEvent += '</div>';
            calWrapper.innerHTML += calEvent;
        }
    })(document.querySelector("#calendarPage .calendarWrapper"));


    (function(items,evWrapper, eDate, eText){
        items.forEach(el => {
            el.addEventListener("click",function(ev){
                var id = [...el.lastChild.classList].filter(e => e.startsWith("event-id-"))[0].replace("event-id-","")
                //console.log(id);
                let calData = JSON.parse(window.localStorage.getItem("calendar"))["calendar"];
                eDate.innerHTML = calData[id]["date"];
                eText.innerHTML = calData[id]["event"];
            });
        });
    })([...document.querySelectorAll(".cal-item")],document.querySelector(".event"),document.querySelector(".event .event-date"),document.querySelector(".event .event-text"));




    (function(button,menu){

        button.addEventListener("click", function(e){
            menu.classList.contains("opened") ? menu.classList.remove("opened") : menu.classList.add("opened")
        });

    })( document.querySelector(".burger"), document.querySelector(".nav-wrapper .nav .nav-left ul") );

};



function deneme(ev){

    setTimeout(()=>{
        document.querySelector(".event-details-hr").classList.add("active");
    },300);
    

    evWrapper = document.querySelector(".event");

    evWrapper.style.fontSize = "0px";

    setTimeout(()=>{
        evWrapper.style.opacity = "1";
        evWrapper.style.fontSize = "24px";
    },300);

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Example
    window.scrollTo({ top: 0, behavior: 'smooth' });

}