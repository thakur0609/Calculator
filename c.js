let string = ''
let buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.getElementsByClassName('input')[0].value = string;
        }
        else if(e.target.innerHTML == 'C' || e.target.innerHTML == 'AC'){
            string = ''
            document.getElementsByClassName('input')[0].value = string;
        }
        else{
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.getElementsByClassName('input')[0].value = string;
        }
    })
})