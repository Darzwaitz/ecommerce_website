<?php

// start session if not already started 

if (!isset($_SESSION)) session_start();
// load environment variables
require_once __DIR__ . '/../app/config/_env.php';