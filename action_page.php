<!-- /** CHAT GPT */ -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "karolineprimdahl94@gmail.com"; // Din e-mail
    $subject = "Ny besked fra portfolio";
    
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $message = htmlspecialchars($_POST['subject']);
    
    $body = "Navn: $firstname $lastname\n\nBesked:\n$message";
    
    $headers = "From: noreply@karolineprimdahl.dk\r\n"; // Skift 'dinwebside.dk' til dit domæne
    $headers .= "Reply-To: noreply@karolineprimdahl.dk\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Din besked er sendt!";
    } else {
        echo "Noget gik galt. Prøv igen.";
    }
}
?>
