function [ z ] = fun1( x )
z = 3.*cos(x(1).^2).*sin(exp(-x(2).^2));


end

function [z] = fun11(x, y)
z = 3.*cos(x.^2).*sin(exp(-y.^2));
end
