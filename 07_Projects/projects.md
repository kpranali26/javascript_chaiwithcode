# Projects related to javascript
original code link :
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zrlq8wdx?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,2-BMICalculator%2Fchaiaurcode.js)
## project 1 - solution code

``` javascript 
console.log("hello world")

const buttons = document.querySelectorAll('.button');
// console.log(buttons); // nodeList
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
