let total=1000000;
const displayForm=()=>{
    document.getElementById("checkBalance").style.display="none";
    document.getElementById("transfer").style.display="block";
}
const display=(check)=>{
    if(check==="negative"){
        document.getElementById("negative").style.display="block";
        document.getElementById("positive").style.display="none";
    }
    else{
        document.getElementById("negative").style.display="none";
        document.getElementById("positive").style.display="block";
    }
             
}
const cancel=(check)=>{
    if(check==="transfer")
        document.getElementById("transfer").style.display="none";
    if(check==="negative"){
        document.getElementById("negative").style.display="none";
    }
    if(check==="positive"){
        document.getElementById("positive").style.display="none";
    }
}
const sendData=()=>{
    
    // alert("sendData");
    const user=document.getElementById("name").value;
    const amount=parseInt(document.getElementById("amount").value);
    if(amount>total){
        display("negative");
    }
    else{
        const balance=parseInt(document.getElementById(user).innerText)+amount;
        // alert("sendData: "+user+" : "+balance);
        total-=amount;
        document.getElementById(user).innerText=balance;
        display("positive");
        if(user)
            cancel("transfer");
    }
    
    
}
// modal to check
const checkBalance=()=>{
    document.getElementById("negative").style.display="none";
    document.getElementById("positive").style.display="none";
    document.getElementById("checkBalance").style.display="block";
    document.getElementById("transfer").style.display="none";
    document.getElementById("total").innerText=total;
}
