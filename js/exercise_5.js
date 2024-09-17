//Excercise 5

let subjet = "Math";
let mark = 60;

if(mark >= 80){
    console.log(`${subjet} ${mark}%, Grade A`);
}else if(mark >= 60 && mark < 80 ){
    console.log(`${subjet} ${mark}%, Grade B`);
}else if(mark >= 40 && mark < 60){
    console.log(`${subjet} ${mark}%, Grade C`);
}else{
    console.log(`${subjet} ${mark}%,No grade`);
}