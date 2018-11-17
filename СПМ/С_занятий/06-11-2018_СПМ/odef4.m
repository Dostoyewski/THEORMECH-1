function [ dydt ] = odef4( t, y )
dydt = zeros(4, 1);
dydt(1) = y(2);
dydt(2) = y(3);
dydt(3) = y(4);
dydt(4) = 3*y(3)*y(1) - y(2) + 5*y(1) - 6;
end

