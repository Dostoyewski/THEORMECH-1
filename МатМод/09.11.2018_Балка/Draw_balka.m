function [ resalt ] = Draw_balka(X,rad,L,N)
%рисуем частицы
for i = 1:N
    pos = [X(i)-rad,-rad,2*rad,2*rad]
    rectangle('Position',pos,'Curvature',[1 1])
end
%рисуем пружинки
for i = 1:N-1
    line([X(i)+rad,X(i+1)-rad],[0 0],'Color','blue')
end
%рисуем область
axis([-1,L+1,-4,4])
axis square
pause(0.005)
clf
end