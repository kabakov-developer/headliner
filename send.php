<?php
	if(isset($_POST['submit'])){
	/* Устанавливаем e-mail Кому и от Кого будут приходить письма */
	$to = "kabakov0107@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
	$from = "admin@hardworkers.kz"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net

	/* Указываем переменные, в которые будет записываться информация с формы */
	$first_name = $_POST['first_name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$subject = "Форма отправки сообщений с сайта kabakov.kz";

	/* Проверка правильного написания e-mail адреса */
	// if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
	// {
	// show_error("<br /> Е-mail адрес не существует");
	// }

	/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
	$mail_to_myemail = "
		Было отправлена заявка с сайта!
		Имя: $first_name
		Номер телефона: $phone
		E-mail: $email
	";

	$headers = "From: $from \r\n";

	/* Отправка сообщения, с помощью функции mail() */
	mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
	echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='https://kabakov.kz'>Вернуться на сайт.</a>";
	}
?>