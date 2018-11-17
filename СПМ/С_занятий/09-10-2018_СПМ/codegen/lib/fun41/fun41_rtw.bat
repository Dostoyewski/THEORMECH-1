@echo off

set MATLAB=D:\Program Files\MATLAB\R2017a


call  "\\FEDOR-1\D$\Program Files\MATLAB\R2017a\bin\win64\checkMATLABRootForDriveMap.exe" "\\FEDOR-1\D$\Program Files\MATLAB\R2017a"  > mlEnv.txt
for /f %%a in (mlEnv.txt) do set "%%a"\n
cd .

if "%1"=="" ("D:\Program Files\MATLAB\R2017a\bin\win64\gmake"  -f fun41_rtw.mk all) else ("D:\Program Files\MATLAB\R2017a\bin\win64\gmake"  -f fun41_rtw.mk %1)
@if errorlevel 1 goto error_exit

exit /B 0

:error_exit
echo The make command returned an error of %errorlevel%
An_error_occurred_during_the_call_to_make
