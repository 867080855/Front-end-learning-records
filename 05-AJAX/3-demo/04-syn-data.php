<?php

	$flag = $_GET['flag'];
	$book1 = '三国演义';
	$book2 = '水浒传';
	if($flag == 1){
		echo $book1;
	}else if($flag == 2){
		echo $book2;
	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script>
		window.onload = function () {
			var str = window.location.search;
			if(str){
				var flag = str.split('=');
				if(flag[1] == 1){
					document.getElementById('showInfo').innerHTML = 'success!';
				}
			}
		}
	</script>
</head>
<body>

	<div>
		<div id="showInfo"></div>
		<form action="04-syn-data.php" method="post">
			用户名：<input type="text" name="username"><br>
			密码：<input type="password" name="password"><br>
			<input type="submit" value="submit">
		</form>
	</div>	
</body>
</html>


<!-- <?php
	// $username = $_GET['username'];
	// $password = $_GET['password'];

	// $username = $_POST['username'];
	// $password = $_POST['password'];

	// echo '用户名:'.$username.', password:'.$password;

	// header("location:syn-login.html?flag=1");
?>

	<!-- utf-8可以编码世界所有的语言 --> 