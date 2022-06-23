let demo=document.querySelectorAll(".demo1 .demo");
console.log(demo[0].innerHTML+","+demo[1].innerHTML+","+demo[2].innerHTML);

let demoA=document.querySelector(".demoA");
console.log(demoA.innerHTML);

let demo1=document.querySelector(".demo1");
let a=document.createElement("a");
a.setAttribute("href","https://github.com/patsicko/newcodes");
let link=document.createTextNode("this is the github link");
a.appendChild(link);
demo1.appendChild(a);
a.setAttribute("href","https://web.facebook.com/patrick.manibaho/");
a.innerHTML="The link has changed";

let background=document.getElementById("back");
let className=background.className;
console.log(className);
className="changed";
console.log(className);
background.innerHTML+=" ,ohh! the background color that we expectet didn't come! we don't kow why! can anyone help?";

let txt=document.getElementById("txt");
let content="";
content=txt.innerText + "[got from browser other than IE]" || txt.textContent || "";
console.log(content);
// if(txt.innerText){
// content=txt.innerText;
// }
// else if(txt.textContent){
//     content=txt.textContent + "[got via IE]"
// }
// else{
//     content="";
// }
// console.log(content);


// if(txt.textContent){
//     content=txt.textContent + "[got via IE]";
//     }
//     else if(txt.innerText){
//         content=txt.innerText;
//     }
//     else{
//         content="";
//     }
//     console.log(content);