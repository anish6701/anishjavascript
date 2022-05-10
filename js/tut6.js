console.log('We are at tut6');
const name = 'Anish ';
const greeting='Good Morning';
// console.log(name+greeting);

let html;
html = "<h1> this is heading </h1>"+
        "<p> this is My para </p>";
html=html.concat(' this',' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html);
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html)
// console.log(html[8]);

// console.log(html.indexOf('>'))
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('str2'));
// console.log(html.includes('para'));
// console.log(html.substring(0,6));
// console.log(html.slice(0,4));
// console.log(html.replace('this','it'));

let fruit1='Orange\'';
let fruit2='Mango';

let myHtml=`Hello ${name}
            <h1> This is heading </h1>
            <p> You like ${fruit1}
            and ${fruit2}`;
//            console.log(myHtml);

document.body.innerHTML = myHtml;







