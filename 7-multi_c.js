const times = prompt('how many times','');
const text = 'C is fun';
const nooc = parseInt(times);
if(!isNaN(nooc)){
    for(i = 0;  i < nooc; i++){console.log(text);}
}
else{console.log('Missing number of occurences');}
