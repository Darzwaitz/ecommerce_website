<?php
echo "<h2>workn!</h2>";

require_once __DIR__ . '/../app/config/_env.php';

$app_name = getenv('APP_NAME');
echo $app_name;
