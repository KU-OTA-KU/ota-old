<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$isMobile = strpos($userAgent, 'Mobile') !== false || strpos($userAgent, 'Android') !== false;
if ($isMobile) {
  setcookie('mobileMode', 'true', time() + 3600, '/');
  return true;
} else {
  setcookie('mobileMode', 'false', time() + 3600, '/');;
  return false;
}
?>
