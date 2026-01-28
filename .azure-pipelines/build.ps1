#!/usr/bin/env pwsh
#Requires -Version 7
[CmdletBinding()]
param(
    [Parameter(Mandatory = $True)]
    [string]$SiteName,
    [Parameter(Mandatory = $True)]
    [string]$Context
)

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
