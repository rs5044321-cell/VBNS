@echo off
echo =========================================
echo       Starting Nexus School CRM
echo =========================================
echo.
echo Starting local server...

:: Start python server in the background
start /b python -m http.server 8080 >nul 2>&1

:: Wait 1 second to ensure server is running
timeout /t 1 >nul

echo Opening App...
:: Open the default web browser to the local server
start http://localhost:8080

echo.
echo Application is running! 
echo Close the Edge window when you are done.
echo Keep this terminal open to maintain the server, or press any key to kill it.
pause >nul

:: Clean up server process when batch script is closed
taskkill /F /IM python.exe /T >nul 2>&1
