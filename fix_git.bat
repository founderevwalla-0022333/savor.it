@echo off
echo ===================================================
echo Savor.it Git Large Files Cleanup Script
echo ===================================================
echo.
echo [1/5] Removing .next cache from Git tracking...
git rm -r --cached .next 2>nul
if %errorlevel% neq 0 (
    echo Note: .next directory was not tracked or already removed.
)

echo.
echo [2/5] Removing node_modules from Git tracking...
git rm -r --cached node_modules 2>nul
if %errorlevel% neq 0 (
    echo Note: node_modules directory was not tracked or already removed.
)

echo.
echo [3/5] Removing .env.local from Git tracking...
git rm --cached .env.local 2>nul
if %errorlevel% neq 0 (
    echo Note: .env.local was not tracked or already removed.
)

echo.
echo [4/5] Re-adding files (respecting the updated .gitignore)...
git add .

echo.
echo [5/5] Creating new commit...
git commit -m "remove large files"

echo.
echo Pushing changes to GitHub (origin main)...
git push -u origin main

echo.
echo ===================================================
echo Git cleanup completed successfully!
echo ===================================================
pause
