let times = prompt('how many times','');
let text = 'C is fun';
let nooc = parseInt(times);
if(!isNaN(nooc)){
    for(i = 0;  i < nooc; i++){console.log(text);}
}
else{console.log('Missing number of occurences');}
