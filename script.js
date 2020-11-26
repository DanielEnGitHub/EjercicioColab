function datos(){
  var nombre=document.getElementById("name").value;
  var edad=document.getElementById("age").value;
  var correo=document.getElementById("correo").value;
  var pass=document.getElementById("pass").value;
  if (pass==123){
    alert("Su nombre es: "+nombre+ " Su correo es: " + correo + " Su edad es: "+edad);
  }else{
    alert("Contraseña incorrecta, intente con: 123");
  }
  
}
