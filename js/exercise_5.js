//Excercise 5

let subjet = "Math";
let mark = 60;

if(mark >= 80){
    console.log(`${subjet}%, Grade A`);
}else if(mark >= 60 && mark < 80 ){
    console.log(`${subjet}%, Grade B`);
}else if(mark >= 40 && mark < 60){
    console.log(`${subjet}%, Grade C`);
}else{
    console.log(`${subjet}%,No grade`);
}