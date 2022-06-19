<?php 
date_default_timezone_set('America/Sao_Paulo');
$respostaLidera = [];

// CONFIGURAÇÕES PARA CONEXÃO SMTP SERVER
define("HOST_SERVER", 'smtp.titan.email');
define("HOST_USER", 'no-reply@lideraskills.com.br');
define("HOST_PASS", 'K604UR0iaC');
define("HOST_PORT", 587);
define("HOST_MSG_SUCESSO", "Sua mensagem foi enviada com sucesso");
define("HOST_MSG_ERRO", "Opa! Ocorreu um erro tentando enviar sua mensagem");

// DADOS PARA PREPARAR OS ENVIOS PARA OS RESPECTIVOS EMAILS
$tituloEmail = 'FORMULÁRIO DE CONTATO - Lidera.Skills';
$emailServidorRemetente = 'no-reply@lideraskills.com.br';
$emailNomeRemetente = "Formulário de Contato - Lidera.Skills";
$emailServerDestino = 'contato@lideraskills.com.br';
$emailNomeServerDestino = "Formulário de Contato - Lidera.Skills";

// DADOS DO FORMULÁRIO
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

// CORPO DA MENSAGEM EM HTML PARA SER ENVIADO AO ADMINISTRADOR
$htmlEmail = "<h3>Olá Administrador</h3>";
$htmlEmail .= "<p>Você recebeu uma nova mensagem através do Formulário de Contato do site (".$_SERVER['SERVER_NAME'].")<br />";
$htmlEmail .= "Essa mensagem foi enviada em ".date('d/m/Y - H:i:s')."</p>";
$htmlEmail .= "Veja os detalhes da mensagem:<br />";
$htmlEmail .= "NOME: ".$nome."<br />";
$htmlEmail .= "E-MAIL: ". $email."<br />";
$htmlEmail .= "TELEFONE: ".$telefone."<br />";
$htmlEmail .= "MENSAGEM:"."<br />";
$htmlEmail .= "<p>".$mensagem."</p>";
$htmlEmail .= "<p>Você poderá responder esse email diretamente da sua caixa de entrada, basta clicar em RESPONDER</p>";

// INICIANDO O PHPMAILER
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer(true);

// BLOCO TRY PARA ENVIAR A MENSAGEM
try {

    $mail->isSMTP();                                            
    $mail->Host       = HOST_SERVER;                    
    $mail->SMTPAuth   = true;                              
    $mail->Username   = HOST_USER;                     
    $mail->Password   = HOST_PASS;                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
    $mail->Port       = HOST_PORT;
    $mail->setFrom($emailServidorRemetente, $emailNomeRemetente);
    $mail->addAddress($emailServerDestino, $emailNomeServerDestino);
    $mail->addReplyTo($email, $nome);  
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';  
    $mail->Subject = $tituloEmail;
    $mail->Body    = $htmlEmail;
    $mail->send();
    $respostaLidera['return'] = 'ok';
    $respostaLidera['mensagem'] = HOST_MSG_SUCESSO;
} catch (Exception $e) {

    // TRATANDO ALGUM ERRO QUE POSSA OCORRER
    $respostaLidera['return'] = 'erro';
    $respostaLidera['mensagem'] = HOST_MSG_ERRO."<br /> {$mail->ErrorInfo}";
}

// RETORNANDO O OBJETO EM JSON PARA O FORM AJAX/JQUERY
echo json_encode($respostaLidera);
