function [ dydt ] = func( t, y)
dydt = zeros(2, 1);
dydt(1) = y(2)
dydt(2) = -5*y(2) - 1000*y(1);
% dydt = [y(2); 2*y(2)*y(1) - y(1)^2];
end
