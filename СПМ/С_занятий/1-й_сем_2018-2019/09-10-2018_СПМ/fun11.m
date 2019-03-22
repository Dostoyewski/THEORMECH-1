function [z] = fun11(x, y)
z = 3.*cos(x.^2).*sin(exp(-y.^2));
end