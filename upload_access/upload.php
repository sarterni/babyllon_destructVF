<?php
// Check if files were uploaded
if(isset($_FILES['myFile'])) {
    $uploadDir = 'uploads/'; // Directory where files will be uploaded
    $uploadedFiles = [];

    // Loop through each uploaded file
    foreach($_FILES['myFile']['tmp_name'] as $index => $tmpName) {
        $fileName = $_FILES['myFile']['name'][$index];
        $uploadPath = $uploadDir . $fileName;

        // Move uploaded file to destination directory
        if(move_uploaded_file($tmpName, $uploadPath)) {
            $uploadedFiles[] = $fileName;
        }
    }

    // Send response to client
    echo json_encode(['uploadedFiles' => $uploadedFiles]);
}
?>
