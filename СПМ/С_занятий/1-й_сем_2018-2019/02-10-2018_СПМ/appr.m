clc;
clear;
x = 1:0.1:150
y = 2*x.^3 - 3*x.^2 + 8*x+15;
figure('Name', 'Approximation', 'NumberTitle', 'off');
plot(x, y, 'o');
%tool, fitting, дальнейшие настройки