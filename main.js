 $(function(){
   $('#email').on('blur', function(){
     var mail = $(this).val();

     if (mail != '') {
       $.ajax({
         url: 'test.php',
         method: 'POST',
         data: 'email=' + encodeURIComponent(mail)
       }).done(function(data){
         alert(data);
       });
     }
   });
 });
