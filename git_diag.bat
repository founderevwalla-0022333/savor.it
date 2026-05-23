@echo off
echo Running Git diagnostics... > git_diagnostic.txt
echo =================================== >> git_diagnostic.txt
echo Git Status: >> git_diagnostic.txt
git status >> git_diagnostic.txt 2>&1
echo. >> git_diagnostic.txt
echo =================================== >> git_diagnostic.txt
echo Git Recent Commits (Log): >> git_diagnostic.txt
git log -n 10 --oneline >> git_diagnostic.txt 2>&1
echo. >> git_diagnostic.txt
echo =================================== >> git_diagnostic.txt
echo Git Remote URL: >> git_diagnostic.txt
git remote -v >> git_diagnostic.txt 2>&1
echo Done! >> git_diagnostic.txt
