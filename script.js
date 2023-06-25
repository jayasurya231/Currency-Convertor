let select = document.querySelectorAll('.currency')
let input = document.getElementById("input")
let btn = document.getElementById("btn")

fetch( 'https://api.frankfurter.app/currencies')
.then(result=>result.json())
.then(result=>displyDropDown(result))

function displyDropDown(result){
    let currency=Object.entries(result)
    for(let i=0;i<currency.length;i++){
        let option =`  <option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
    }
}

btn.addEventListener("click",()=>{
    let currency1 = select[0].value
    let currency2 = select[1].value
    let inputValue = input.value

    if(currency1==currency2){
       
        let DivAlert =document.getElementById("alertDiv")

        let para=document.createElement("p")
        
        para.textContent="* Please try different currencies"
        
        DivAlert.append(para)
    }
    else{
        convert(currency1,currency2,inputValue)
    }
})
function convert(currency1,currency2,inputValue){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputValue}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  .then((data) => {
   document.getElementById('result').value=Object.values(data.rates)[0]
  });
}



