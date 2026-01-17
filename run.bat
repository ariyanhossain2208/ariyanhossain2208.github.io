@echo off
echo Starting Next.js Portfolio Project...
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo node_modules not found. Installing dependencies...
    echo.
    call npm install
    echo.
    echo Dependencies installed!
    echo.
)

echo Starting development server...
echo.
call npm run dev

pause


