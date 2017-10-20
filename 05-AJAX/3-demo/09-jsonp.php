<?php 
	$callback = $_GET['_jsonp'];

	$arr = array("zhangsan","lisi","wangwu","zhaoliu");

	echo $callback."(".json_encode($arr).")";

 ?>