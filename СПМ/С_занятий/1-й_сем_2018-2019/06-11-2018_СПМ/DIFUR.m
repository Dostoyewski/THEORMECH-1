tspan = [0 1];
y0 = [1; 0];
a = 5;
% [t, y] = ode23(@odef, tspan, y0);     если два параметра
[t, y] = ode23(@(t, y) odef(t, y, a), tspan, y0);
figure('Name', 'ДифУР', 'NumberTitle', 'off');
hold on;
grid on;
plot(t, y(:, 1), '--', 'Color', 'blue');
plot(t, y(:, 2), 'Color', 'red');