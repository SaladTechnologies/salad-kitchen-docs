#!/usr/bin/env pwsh
#Requires -Version 7
[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Path $PSScriptRoot -Parent
Push-Location -Path $projectRoot
try {
    . (Join-Path -Path $projectRoot -ChildPath '.azure-pipelines' -AdditionalChildPath 'utilities.ps1')

    # Build projects.
    Show-LogSection -Content 'Building projects...'
    Show-LogCommand -Content "npm run build "
    & npm run build
    Assert-LastExitCodeSuccess -LastExecutableName 'npm'

    # Attempt 404 copy
    Show-LogSection -Content 'Copying 404 page...'
    $source404Path = Join-Path -Path $projectRoot -ChildPath 'dist/client/404' -AdditionalChildPath 'index.html'
    $destination404Path = Join-Path -Path $projectRoot -ChildPath 'dist/client' -AdditionalChildPath '404.html'
    if (Test-Path -Path $source404Path) {
        Copy-Item -Path $source404Path -Destination $destination404Path -Force
        Show-LogSuccess -Content '404 page copied successfully.'
    }
    else {
        Show-LogWarning -Content '404 page not found; skipping copy.'
    }
}
catch {
    if (($null -ne $_.ErrorDetails) -and ($null -ne $_.ErrorDetails.Message)) {
        Show-LogError -Content $_.ErrorDetails.Message
    }
    elseif (($null -ne $_.Exception) -and ($null -ne $_.Exception.Message)) {
        Show-LogError -Content $_.Exception.Message
    }
    else {
        Show-LogError -Content $_
    }

    exit 1
}
finally {
    Pop-Location
}
