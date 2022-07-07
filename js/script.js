var seconedHand=document.querySelector('[sec]');
var minHand=document.querySelector('[min]');
var hourHand=document.querySelector('[hour]');

console.log(hourHand)
setInterval(setClock,1000);

function setClock(){
    const currentDate=new Date();
    const seconed= currentDate.getSeconds ()/60 ;
    const min=( seconed + currentDate.getMinutes())/60 ;
    const hours=( min + currentDate.getHours())/12 ;

    setRotation(seconedHand,seconed);
    setRotation(minHand,min);
    setRotation(hourHand,hours);

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
  }
setClock()
