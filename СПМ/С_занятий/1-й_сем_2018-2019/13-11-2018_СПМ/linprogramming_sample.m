f = [60 80];
A = [2 10; 20 40];
b = [50; 80];
Aeq = [1 2];
beq = [30];
lb = [0 0];
ub = [];
[x, fval] = linprog(f, A, b, Aeq, beq, lb, ub);
x
fval