const body = document.querySelector('body');
const div1 = document.createElement('div');

const button = document.createElement('button');
button.textContent='Click me Baby';
button.addEventListener('click',()=>{
    let a = prompt('enter the no. of grids in each size(MAX LIMIT:100)');
    createGrid(a);

})
body.appendChild(button);


// const div2 = document.createElement('div');
// const div3 = document.createElement('div');

body.appendChild(div1);
div1.classList.add("bigdiv");
let div2;
// while(i<257){
//     div1.appendChild(div2);
//     div1.classList.add("smoldiv");
//     i++;
// }
function createGrid(num){
let j=0;

div1.innerHTML='';
while(j<num){
    let div2 = document.createElement('div');

    div1.appendChild(div2);

    div2.classList.add("meddiv");
    let i =0;
    while(i<num){
        let div3 = document.createElement('div');

        div2.appendChild(div3);
        div3.classList.add('smoldiv');
        // div3.style.padding=960/num;
        div3.addEventListener('mouseover',()=>{
            div3.style.backgroundColor = 'blue';
            
        })
        i++;
    }
    j++;
}

}
// const sdiv = document.querySelector('.smoldiv');
// sdiv.addEventListener('mouseover',()=>{
//     sdiv.style.backgroundColor = 'blue';
// })



