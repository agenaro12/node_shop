function onLogin(){
    let user = document.getElementById("txtUser").value;
    let pass = document.getElementById("txtPass").value;
    //document.location.assign('index.html');
    if (user.trim()==='genaro' && pass.trim()==='1234'){
        //alert(`user: ${user} pass: ${pass}`);
        document.location.assign('index.html');
        
        
    }
    else{
        alert("User or Pass are incorret!!");
    }
    
}