%Параметры
c = 5;
c_fi = 5;
m = 1;
dt = 0.1;
N = 30;
L = 1;%Начальная длина пружинок
r = 0.1;
g = 0.05;
betta = 0.01;

X = 0:L:(N-1)*L;
Y = zeros(1,N);
Vx = zeros(1,N);
Vy = zeros(1,N);

%Начальные условия
% Y(N) = 0.4;
% X(N) = X(N) + 0.3;
figure
E_pol = [];
E_pot = [];
E_kin = [];
%Основной цикл
for it = 1:10000
   
   if mod(it,20)==0
        clf
    end
   %Пересчитаем скорость 1 частицы
   L_k = sqrt((X(1)-X(2))^2+(Y(1)-Y(2))^2);%Длина первой пружинки
   e12 = [(X(2)-X(1))/L_k; (Y(2)-Y(1))/L_k];
   F_g = [0;-m*g];
   F_dis = -betta.*[Vx(1);Vy(1)];
   F = c.*(L_k-L).*e12 + F_g + F_dis;
   Vx(1) = Vx(1)+F(1)*dt/m;
   Vy(1) = Vy(1) + F(2)*dt/m;
   %Пересчитаем скорость N частицы
   L_k = sqrt((X(N)-X(N-1))^2+(Y(N)-Y(N-1))^2);%Длина первой пружинки
   e12 = [(X(N-1)-X(N))/L_k; (Y(N-1)-Y(N))/L_k];
   F_dis = -betta.*[Vx(N);Vy(N)];
   F = c.*(L_k-L).*e12 + F_g + F_dis;
   Vx(N) = Vx(N)+F(1)*dt/m;
   Vy(N) = Vy(N) + F(2)*dt/m;
   %Пересчитаем скорости "центральных" частиц
   for i = 2:(N-1)
        L_k_left = sqrt((X(i-1)-X(i))^2+(Y(i-1)-Y(i))^2);
        e_left = [(X(i-1)-X(i))/L_k_left; (Y(i-1)-Y(i))/L_k_left];
        L_k_right = sqrt((X(i+1)-X(i))^2+(Y(i+1) - Y(i))^2);
        e_right = [(X(i+1)-X(i))/L_k_right;(Y(i+1)-Y(i))/L_k_right];
        F_dis = -betta.*[Vx(i);Vy(i)];
        F = c.*(L_k_left - L).*e_left + c.*(L_k_right-L).*e_right + F_g + F_dis;
        Vx(i) = Vx(i) + F(1)*dt/m;
        Vy(i) = Vy(i) + F(2)*dt/m;
   end
   %Считаем воздействие угловых пружинок
   for i = 2:N-1
       r_l = [X(i-1)-X(i);Y(i-1)-Y(i)];
       r_r = [X(i+1)-X(i);Y(i+1)-Y(i)];
       L_l = sqrt(r_l(1)^2+r_l(2)^2);
       L_r = sqrt(r_r(1)^2+r_r(2)^2);
       fi = acos((r_l(1)*r_r(1)+r_l(2)*r_r(2))/L_l/L_r);
       vect_z = r_l(1)*r_r(2)-r_l(2)*r_r(1);%компонента z вектора от векторного произведения 
       if vect_z < 0
           theta = pi/2;
       else
           theta = -pi/2;
       end
       %матрица поворота для левого вектора
       M = [cos(theta) -sin(theta);
           sin(theta) cos(theta)];
       e_l = (M*r_l)./L_l;
       %матрица поворота для правого вектора
       M = [cos(theta) sin(theta);
           -sin(theta) cos(theta)];
       e_r = (M*r_r)./L_r;
       F_mod = c_fi*(pi-fi);
       F_l = F_mod.*e_l;
       F_r = F_mod.*e_r;
       %Пересчитать скорость 
       %Левая частица
       Vx(i-1) = Vx(i-1) + F_l(1)*dt/m;
       Vy(i-1) = Vy(i-1) + F_l(2)*dt/m;
       %Правая частица
       Vx(i+1) = Vx(i+1) + F_r(1)*dt/m;
       Vy(i+1) = Vy(i+1) + F_r(2)*dt/m;
       %Центральная частица
       Vx(i) = Vx(i) - (F_l(1)+F_r(1))*dt/m;
       Vy(i) = Vy(i) - (F_l(2)+F_r(2))*dt/m;
   end
   
   %Закрепляем частицы
   Vx(1) = 0;
   Vx(N) = 0;
   Vy(1) = 0;
   Vy(N) = 0;
   Vx(10) = 0;
   Vy(10) = 0;
   Vx(20) = 0;
   Vy(20) = 0;
    %Добавляем диссипацию
    Vx = Vx - Vx.*betta.*dt./m;
    Vy = Vy - Vy.*betta.*dt./m;
   %Пересчитаем координаты
   X = X + Vx.*dt;
   Y = Y + Vy.*dt;
   %Посчитаем энергию
   pr = 0;
   for i = 1:N
       V = sqrt(Vx(i)^2+Vy(i)^2);
       pr = pr + m*V^2/2;
   end
%    E_kin = [E_kin;pr];
%    pr = 0;
%    for i = 1:N-1
%        L_k = sqrt((X(i)-X(i+1))^2 + (Y(i)-Y(i+1))^2);
%        pr = pr + c*(L_k-L)^2/2;
%    end
%    E_pot = [E_pot;pr];
%    E_pol = [E_pol;E_kin(it) + E_pot(it)];
   Width = (N+1)*L;
%    subplot(2,1,1)
    if mod(it,20)==0
        draw_chain(X,Y,N,r,Width);
    end
%    subplot(2,1,2);
%    hold on
%    axis([1 100 0,0.01])
%    plot(E_kin,'r');
%    plot(E_pot,'b');
%    plot(E_pol,'k');
%    pause(0.5);
%    E_kin = 0;
%    E_pot = 0;
%    E_pol = 0;
   
end
% figure
% hold on
% plot(E_kin,'r');
% plot(E_pot,'b');
% plot(E_pol,'k');