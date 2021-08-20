$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
      
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   
                   email: {
                     required: true,
                     email: true
                   },
                   password: {
                     required: true,
                     
                   }
                 },
                  messages: {
                   email: "Espacio Obligatorio",
                  
                   password: {
                     required: "Ingrese Contraseña",
                    
                   }

                },
                submitHandler: function(form) {
                  form.submit();
                }
              });
            });
            
   
   
   $(function() {
     
     $("form[name='registration']").validate({
       rules: {
         firstname: "required",
         lastname: "required",
         email: {
           required: true,
           email: true
         },
         password: {
           required: true,
           minlength: 5
         }
       },
       
       messages: {
         firstname: "Por Favor Ingrese un Nombre",
         lastname: "Proporcione un Apellido",
         password: {
           required: "Ingrese una Contraseña",
           minlength: "Tu contraseña debe tener al menos 5 caracteres"
         },
         email: "Por favor ingresar una direccion de correo electronico Valido"
       },
     
       submitHandler: function(form) {
         form.submit();
       }
     });
   });
   
