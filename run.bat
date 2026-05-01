@echo off
setlocal
cd /d "%~dp0"

echo ==========================================
echo    Starting Website Development Server
echo ==========================================

if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
)

echo [INFO] Launching Vite...
call npm run dev

pause
