<?
header('Content-Type: application/json');
$data = 'error';
$post = json_decode(file_get_contents('php://input'), true);
if ($post['action'] == 'get-storage'){
  $data = file_get_contents('storage.storage');
}
if ($post['action'] == 'set-storage'){
  $data_storage = json_decode($post['data-storage']);
  if ($data_storage!==false && $data_storage!==NULL){
    if (file_put_contents('storage.storage', $post['data-storage'])){
      $data = 'success';
    }
  }
}
echo $data;
?>