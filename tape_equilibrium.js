let min = 0, max = 0, i = 0, j = 0, sum1 = 0, sum2 = 0;
let a = [0], total=[0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener('click', function( event ){
    max = document.getElementsByTagName("input")[0].value;

    for(i=0; i<max; i++){
        a[i] = getRandomInt(min, max);
    }

    document.getElementsByTagName("p")[0].innerHTML = a;

    for(i=0; i<max; i++){
        sum1 += a[i];
        for(j=i+1; j<max; j++){
            sum2 += a[j];
        }
        // Math.abs making value +ve.
        total[i] = Math.abs(sum1 - sum2);
        sum2 = 0;
    }

    document.getElementsByTagName("p")[1].innerHTML = "Total array = " + total;
    document.getElementsByTagName("p")[1].innerHTML += "<br>Smallest value in array = " + Math.min.apply(null, total);
});