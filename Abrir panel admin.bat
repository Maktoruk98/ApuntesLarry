@echo off
cd /d "%~dp0"
start "ApuntesLarry admin server" python admin-server.py
timeout /t 1 /nobreak >nul
start "" http://localhost:8090
