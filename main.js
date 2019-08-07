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
   var xhr = new XMLHttpRequest();
   // true : requete asynchrone
   xhr.open('POST','test.php',true);
   xhr.send();
   // à chaque changement on appel la fonction traitement;
   xhr.onreadystatechange = traitement;

    function traitement (){
      // Si on arrive à l'étape 4
      if (xhr.readyState === 4) {
      // si  ok (code 200)
        if (xhr.status === 200) {
          // On affiche le retour du serveur
          alert(xhr.responseText);
        }
     }
   }
 });
