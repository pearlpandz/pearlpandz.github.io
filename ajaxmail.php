<?php
if(isset($_POST) && isset($_POST['email']))
{
    $to = "pearlpandzz@gmail.com";
                
        $from = $_POST['email'];
        $subject = "Contact Mail from pearlpandz.github.io | Lead Contacts";
        
        $htmlcontent = "<b>Name :</b>".$_POST['name']."<br><br>";
        
        $htmlcontent .= "<b>Email :</b>".$_POST['email']."<br><br>";

        $htmlcontent .= "<b>Phone :</b>".$_POST['mobile']."<br><br>";

        $htmlcontent .= "<b>Subject :</b>".$_POST['subject']."<br><br>";
        
        $htmlcontent .= "<b>Message :</b>".$_POST['message']."<br><br>";

        $message = $htmlcontent;

        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: '.$from."\r\n".
            'Reply-To: '.$from."\r\n" .
            'X-Mailer: PHP/' . phpversion();

        if(mail($to, $subject, $message, $headers)) {
            echo "done";exit;
        }
        else {
            echo 0;
        }
 }
?>