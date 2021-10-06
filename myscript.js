function ChangeBG(){
    day = new Date();
    hour = day.getHours();
    if(document.body){
        if(hour >=4 && hour < 12){
            document.getElementById('body').style.background='url(images/morning.jpg)';
            document.getElementById('body').style.backgroundSize = "cover";
            document.getElementById('body').style.backgroundRepeat = "no-repeat";
        } 
        else if(hour >=12 && hour < 18)
        {
            document.getElementById('body').style.background='url(images/afternoon.jpg)';
            document.getElementById('body').style.backgroundSize = "cover";
             document.getElementById('body').style.backgroundRepeat = "no-repeat";
        } 
        else if(hour >=18 && hour < 21)
        {
            document.getElementById('body').style.background='url(images/sunset.jpg)';
            document.getElementById('body').style.backgroundSize = "cover";
            document.getElementById('body').style.backgroundRepeat = "no-repeat";
        }
        else
         {
            document.getElementById('body').style.background='url(images/night.jpg)';
            document.getElementById('body').style.backgroundSize = "cover";
            document.getElementById('body').style.backgroundRepeat = "no-repeat"
         }
    }
}

let number = 1;
function changeImage(){
    document.getElementById('image').src='images/'+number+'.jpg';
    if (number==5) {
        number = 1
    } else{
        number++;
    }
}

let intervals;
function SpeedIMG(){
    clearInterval(intervals);
    intervals = setInterval(changeImage, document.getElementById('speed').value);  
}