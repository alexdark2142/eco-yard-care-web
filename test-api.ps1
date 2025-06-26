$body = @{
    name = "Test User"
    email = "test@example.com"
    phone = "+1234567890"
    service = "Lawn Mowing"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3001/api/contact" -Method POST -ContentType "application/json" -Body $body
    Write-Host "Success: $($response | ConvertTo-Json)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "Response: $($_.Exception.Response)"
} 