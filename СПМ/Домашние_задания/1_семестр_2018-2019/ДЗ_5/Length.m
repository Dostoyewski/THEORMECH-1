clc;
clear;
fun = @(x) x.^2 .* (-sinh(x)) + sinh(x) - 2.*x.*cosh(x);
dfun = @(x) (1 + fun(x).^2).^0.5;
l = integral(dfun, -1, 2);
fprintf('Длина линии: %f \n', l);