function [ dydt ] = odef( t, y, a )
dydt = zeros(2, 1);
dydt(1) = y(2)
dydt(2) = a*y(2)*y(1) - y(1)^2;
% dydt = [y(2); 2*y(2)*y(1) - y(1)^2];
end

