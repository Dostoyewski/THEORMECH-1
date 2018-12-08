%Параметры
c = 1;
m = 1;
dt = 0.3;
N = 10;
L = 1;%Начальная длина пружинок
r = 0.3;
g = 0.0;
betta = 0.00;

X = 0:L:(N-1)*L;
Y = zeros(1,N);
Vx = zeros(1,N);
Vy = zeros(1,N);

%Начальные условия
Y(N/2) = 0.4;
% X(N) = X(N) + 0.3;
figure
E_pol = [];
E_pot = [];
E_kin = [];
%Основной цикл
for it = 1:100
   clf
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
   %Закрепляем частицы
   Vx(1) = 0;
   Vx(N) = 0;
   Vy(1) = 0;
   Vy(N) = 0;
   %Пересчитаем координаты
   X = X + Vx.*dt;
   Y = Y + Vy.*dt;
   %Посчитаем энергию
   pr = 0;
   for i = 1:N
       V = sqrt(Vx(i)^2+Vy(i)^2);
       pr = pr + m*V^2/2;
   end
   E_kin = [E_kin;pr];
   pr = 0;
   for i = 1:N-1
       L_k = sqrt((X(i)-X(i+1))^2 + (Y(i)-Y(i+1))^2);
       pr = pr + c*(L_k-L)^2/2;
   end
   E_pot = [E_pot;pr];
   E_pol = [E_pol;E_kin(it) + E_pot(it)];
   Width = (N+1)*L;
   subplot(2,1,1)
   draw_chain(X,Y,N,r,Width);
   subplot(2,1,2);
   hold on
   axis([1 100 0,0.01])
   plot(E_kin,'r');
   plot(E_pot,'b');
   plot(E_pol,'k');
   pause(0.5);
%    E_kin = 0;
%    E_pot = 0;
%    E_pol = 0;
   
end
% figure
% hold on
% plot(E_kin,'r');
% plot(E_pot,'b');
% plot(E_pol,'k');