<?php
  $email = ['test@test.fr','bonjour@aurevoir.fr','toto@tata.fr'];

  if (isset($_POST['email'])) {
    if (in_array($_POST['email'], $email)) {
      echo 'Ok';
    } else {
      echo 'No';
    }
  }
