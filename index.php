<?php


$datipresidatodolist = file_get_contents('to-do-list.json');

$datilista = json_decode($datipresidatodolist, true);

header('content-type: application/json');

echo json_encode($datilista)



?>
