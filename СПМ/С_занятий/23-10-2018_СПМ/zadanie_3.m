clear;
clc;
R = 1;
H = 5;
fun = @(u, r) r;
rmax = @(u) R*(1-u);
s = 2*pi*H*integral2(fun, 0, 1, 0, rmax);
v = pi*R.^2*H/3;