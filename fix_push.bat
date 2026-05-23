@echo off
echo =================================================== > fix_push_log.txt
echo Savor.it Git Push Force Fixer Log >> fix_push_log.txt
echo =================================================== >> fix_push_log.txt
echo. >> fix_push_log.txt

echo [1/5] Deleting any existing temporary branch... >> fix_push_log.txt
git branch -D temp_branch >> fix_push_log.txt 2>&1

echo. >> fix_push_log.txt
echo [2/5] Creating a new clean branch with no history... >> fix_push_log.txt
git checkout --orphan temp_branch >> fix_push_log.txt 2>&1

echo. >> fix_push_log.txt
echo [3/5] Staging files (respecting the new .gitignore)... >> fix_push_log.txt
git add . >> fix_push_log.txt 2>&1

echo. >> fix_push_log.txt
echo [4/5] Committing clean files... >> fix_push_log.txt
git commit -m "initial commit" >> fix_push_log.txt 2>&1

echo. >> fix_push_log.txt
echo [5/5] Overwriting main branch and force pushing to GitHub... >> fix_push_log.txt
git branch -M main >> fix_push_log.txt 2>&1
git push -f origin main >> fix_push_log.txt 2>&1

echo. >> fix_push_log.txt
echo =================================================== >> fix_push_log.txt
echo Done! >> fix_push_log.txt

echo Git push fix completed. Check fix_push_log.txt for detailed logs.
pause
