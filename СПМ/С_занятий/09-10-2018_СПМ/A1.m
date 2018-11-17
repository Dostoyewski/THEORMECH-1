% Функция 1
figure('Name', 'fminsearch1', 'NumberTitle', 'off');
fsurf(@fun11);
hold on;
grid on;
xlabel('X');
ylabel('Y');
zlabel('Z');
colormap('jet');
title('Минимум функции от двух переменных');
view([-25 14]);
[xmin, fmin] = fminsearch(@fun1, [0.5; 0.5]);
fmin = [fmin; fmin];
plot3(xmin(1), xmin(2), fmin(1), '*', 'Color', 'r');
legend('f1(x, y)', 'Минимум');
t = table(xmin, fmin);
t

% Функция 2
figure('Name', 'fminsearch2', 'NumberTitle', 'off');
fsurf(@fun21);
hold on;
grid on;
xlabel('X');
ylabel('Y');
zlabel('Z');
colormap('jet');
title('Минимум функции от двух переменных');
view([-25 14]);
[xmin, fmin] = fminsearch(@fun2, [3; 5]);
fmin = [fmin; fmin];
plot3(xmin(1), xmin(2), fmin(1), '*', 'Color', 'r');
legend('f2(x, y)', 'Минимум');
t = table(xmin, fmin);
t

% Функция 3
figure('Name', 'fminsearch3', 'NumberTitle', 'off');
fsurf(@fun31);
hold on;
grid on;
xlabel('X');
ylabel('Y');
zlabel('Z');
colormap('jet');
title('Минимум функции от двух переменных');
view([-25 14]);
[xmax, fmax] = fminsearch(@fun3, [0; 0]);
fmax = [abs(fmax); abs(fmax)];
plot3(xmax(1), xmax(2), abs(fmax(1)), '*', 'Color', 'b');
legend('f2(x, y)', 'Максимум');
t = table(xmax, fmax);
t

% Функция 4
figure('Name', 'fminsearch4', 'NumberTitle', 'off');
fsurf(@fun41);
hold on;
grid on;
xlabel('X');
ylabel('Y');
zlabel('Z');
colormap('jet');
title('Минимум функции от двух переменных');
view([-15 23]);
[xmax, fmax] = fminsearch(@fun4, [0; 0]);
fmax = [abs(fmax); abs(fmax)];
plot3(xmax(1), xmax(2), abs(fmax(1)), '*', 'Color', 'b');
legend('f2(x, y)', 'Минимум');
axis([-1 1 -1 1 -2 2]);
t = table(xmax, fmax);
t

%Функция 5
r = -100:0.1:100;
t = -100:0.1:100;
x = r.*cos(t);
y = r.*sin(t);
z = exp(-r.^2);
fun51 = @(x, y) x.*cos(y);
fun52 = @(x, y) x.*sin(y);
fun53 = @(x) exp(-x.^2);
figure('Name', 'Функции по x, y, z', 'NumberTitle', 'off');
xlabel('X');
ylabel('Y');
zlabel('Z');
title('Фигура по f(x), f(y), f(z)');
legend('f(x), f(y), f(z)');
fsurf(fun51, fun52, fun53);
a = [0 0 0];
for i = 1:2001
    if((x(i) == y(i)) && (y(i) == z(i)))
        a(1) = r(i);
        a(2) = t(i);
        a(3) = z(i);
    end
end
figure('Name', 'Решение', 'NumberTitle', 'off');
hold on;
grid on;
plot3(r, t, x);
plot3(r, t, y);
plot3(r, t, z);
plot3(a(1), a(2), a(3), '*', 'Color', 'r');
plot3(0, 0, 1, '*', 'Color', 'b');
view([-132 16]);
axis([-20 20 -20 20 -20 20]);
legend('x(r, t)', 'y(r, t)', 'z(r, t)', 'ROOT');
xlabel('X');
ylabel('Y');
zlabel('Z');
table(a(1), a(2), a(3))