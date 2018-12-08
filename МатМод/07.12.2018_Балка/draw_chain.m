function [ res ] = draw_chain(X,Y,N,r,Width)
    for i = 1:N
        pos = [X(i)-r,Y(i)-r,2*r,2*r];
        rectangle('Position',pos,'Curvature',[1 1])
    end
    for i = 1:N-1
        line([X(i)+r,X(i+1)-r],[Y(i) Y(i+1)]);
    end
%     axis square
    axis([-2 Width*1.2 -r*20 r*20])
    pause(0.05);
    
end

