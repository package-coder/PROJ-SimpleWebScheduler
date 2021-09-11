document.addEventListener('DOMContentLoaded', main)

let date = new Date();

function main(){
    const dateElement = document.getElementById("datetime");

    const format = { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
    };

    const formatTime = {
        timeStyle: "short",
        hour12: true
    }

    setInterval(() => {
        let date = new Date();
        dateElement.innerHTML = 'Today : ' + date.toLocaleString("en-US", format) + ' ' + date.toLocaleString("en-US", formatTime);
        updateHeadElement(date);

    }, 1000);

    function updateHeadElement(date){
        const elements = document.querySelectorAll('.cards .card');


        elements.forEach(element => {
            if(element.dataset.day == date.getUTCDay()){
                const highlight = document.querySelector(".container--highlight .card");
                highlight.innerHTML = element.innerHTML;
                highlight.style.backgroundColor = element.dataset.color;
                
                const statusElement = document.getElementById('status');
                statusElement.innerHTML = getStatus(date, element.dataset.startTime, element.dataset.endTime);
            }
        })
    }

    function getStatus(date, startTime, endTime){
        const hours = date.getUTCHours();

        if(hours >= startTime && hours <= endTime)
            return 'Class Ongoing';
        
    }

}
