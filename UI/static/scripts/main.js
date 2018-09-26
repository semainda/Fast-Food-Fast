
// sign in redirect 

var btn = document.getElementsByName("sign_in_button");
var role = document.getElementById("role");

btn[0].onclick = function(){
    if (role[role.selectedIndex].value == "admin"){
        document.location.href="admin/orders.html";
    }
    else if (role[role.selectedIndex].value == "customer"){
        document.location.href="users/my_orders.html";
  
    }else{
        
    }
};
