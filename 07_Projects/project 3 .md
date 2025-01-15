## Project 3
Solution code 

``` javascript

const clock = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```