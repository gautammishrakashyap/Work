<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $solution = filter_var($_POST['solution'], FILTER_SANITIZE_STRING);

    // Example: Save to database or process further
    // Replace with your actual database or processing logic

    // Example response
    $response = [
        'status' => 'success',
        'message' => 'Solution submitted successfully!',
        'data' => [
            'name' => $name,
            'solution' => $solution
        ]
    ];

    // Respond with JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Method not allowed
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}
?>
