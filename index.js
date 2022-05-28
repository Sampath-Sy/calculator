let dispaly=document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("button"));
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                dispaly.innerText='';
                break
            case '←':
                if(dispaly.innerText){
                    dispaly.innerText=dispaly.innerText.slice(0,-1);
                }
                break
            case '=':
                try{
                    dispaly.innerText=eval(dispaly.innerText);

                }catch{
                    dispaly.innerText="Error!"
                }
                
                break
            default:
                dispaly.innerText+=e.target.innerText;
        }
    })
})
