"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('clicked' + message);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    // let userName = 'Max';  //"noUnusedLocals": true,      
    console.log("Clicked!!" + clickHandler.bind(null));
});
function add3(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
const button2 = document.querySelector('button2');
if (button2) {
    button.addEventListener('click', () => {
        console.log("Clicked!!");
    });
}
// const map = new Map();
// const button = document.querySelector('button')!;
// button.addEventListener('click', () => {
//   const selection = window.getSelection();
//   if (selection && selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     console.log(range.toString());
//   }
// });
