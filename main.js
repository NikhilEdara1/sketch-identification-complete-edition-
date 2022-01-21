function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(release);
x=window.speechSynthesis;
}
function preload(){
    Y=ml5.imageClassifier('DoodleNet');
}
function release(){
    Y.classify(canvas,getresult);
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function getresult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
 document.getElementById("label").innerHTML="label:"+result[0].label;
 document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";  
 z=new SpeechSynthesisUtterance(result[0].label); 
 x.speak(z);
}

function Clear(){
    background("white");
}
