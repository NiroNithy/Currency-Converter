let select=document.querySelectorAll('.currency');
let btn=document.getElementById('btn');
let input=document.getElementById('input');
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayCurr(res))

function displayCurr(res){
    let curr=Object.entries(res);
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`;
        select[0].innerHTML+=opt;
        select[1].innerHTML+=opt;
    }
} 
btn.addEventListener('click',()=>{
     let c1=select[0].value;
     let c2=select[1].value;
     let inputValue=input.value;

     if(c1===c2){
        alert("Please choose different Currency Type");
     }else{
        convert(c1,c2,inputValue);
     }
})
 function convert(c1,c2,inputValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${c1}&to=${c2}`)
     .then(resp => resp.json())
     .then((data) => {
          document.getElementById('result').value=Object.values(data.rates)[0];
  });
 }