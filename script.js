const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
    const time = new Date();

    // Seconds Hand
    const seconds = time.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    console.log(seconds);
    secondHand.style.transform = `rotate(${secondsDeg}deg)`

    // Minute Hand
    const minutes = time.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    // Hour Hand
    const hours = time.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(setTime, 1000);