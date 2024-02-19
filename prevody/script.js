const cash = 25.45;
const  cash2 = 1.08;
const   cash3 = 0.93;
const   cash4 = 23.62;
const   cash5 = 0.04;
const Money = [
  { měna: "koruna česka" },
  { měna: "euro" },
  { měna: "dollar" }
];

function prevodnikMen() {
  let inPrevod = parseFloat(document.getElementById("prevod").value);
  let inMěna = document.getElementById("měna").value; 
  let inMěna2 = document.getElementById("měna2").value; 

  let vysledek;

  if (inMěna === "koruna česka" && inMěna2 === "euro") {
    vysledek = inPrevod / cash; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 

if (inMěna === "euro" && inMěna2 === "koruna česka") {
        vysledek = inPrevod * cash; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 

    if (inMěna === "euro" && inMěna2 === "dollar") {
        vysledek = inPrevod / cash3; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 

    if (inMěna === "dollar" && inMěna2 === "euro") {
        vysledek = inPrevod / cash2; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 

    if (inMěna === "dollar" && inMěna2 === "koruna česka") {
        vysledek = inPrevod * cash4; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 

    if (inMěna === "koruna česka" && inMěna2 === "dollar") {
        vysledek = inPrevod * cash5; 
    document.getElementById("pop").innerHTML =  vysledek.toFixed(2); } 
}

const investice = [
    { čas: "6 mesicu" },
    { čas: "rok" },
    { čas: "2 roky" },
    { čas: "5 let" },
    { čas: "10 let" },
    
  ];
  
function vypocetInvestic(){

let inInvestice = parseFloat(document.getElementById("vklad").value);
let inČas = document.getElementById("čas").value;

let result;


if (inČas === "6 mesicu" ) {
    result = inInvestice * 6
    document.getElementById("pup").innerHTML =  result.toFixed(2); } 

    if (inČas === "rok" ) {
        result = inInvestice * 12
        document.getElementById("pup").innerHTML =  result.toFixed(2); } 
   
       
       
    if (inČas === "2 roky" ) {
        result = inInvestice * 24
        document.getElementById("pup").innerHTML =  result.toFixed(2); } 
       
        
    if (inČas === "5 let" ) {
        result = inInvestice * 60
        document.getElementById("pup").innerHTML =  result.toFixed(2); } 
       
       
        if (inČas === "10 let" ) {
        result = inInvestice * 120
        document.getElementById("pup").innerHTML =  result.toFixed(2); }

    }
    let dph = 21
    function vypocetDPH(){
        let noDPH = parseFloat(document.getElementById("noDPH").value);
        let inDPH = parseFloat(document.getElementById("DPH").value);

        let vysledek = (1 + inDPH / 100);
            document.getElementById("pap").innerHTML =  vysledek.toFixed(2);
    }