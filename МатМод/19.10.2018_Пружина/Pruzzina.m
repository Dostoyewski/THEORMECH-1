% ��� ��� ����, �� ���, ��� ��� �� ���� ������� ��-�� ������������� ����������
c = 1 %�������� �������
m = 1
x0= 0 %��������� ����������
xn = -1
vn = 0 
X=[];
V=[];
dt = 0.1
b= -0.1
X=[X xn]
V=[V vn]

for it=1:1000;
    v=V(it)-(c/m)*(X(it)-x0)*dt;
    x=X(it)+v*dt+b*((c/m)*(X(it)-x0)*dt);
    X=[X x];
    V=[V v];
end
figure
plot(X)
plot(V)
plot(0:dt:1000*dt,X)

%figure
%axis([-5 5 -5 5])
%for it = 1:1000
 %   r=1
  %  pos = [X(it)-r, -r, 2*r, 2*r];
   % rectangle('Position', pos, 'Curvature', [1])
    %pause(0.05)
   % clf
   % axis([-5 5 -5 5])
%end


%���������� ������������
%���� ����� ������ ���� � ���=������ � ����� �� ������� �� ��������
%������ � ����� ��������� ������ ������ 
%� ����� � ������� ��������� 
%������� line � ������� �����


%�������� ��� ���� ������� � ������ ������� � ��������� ������ ������ "�"
%������� �� ������������ �������������  � ����=�����, ���� �� � ����
%������� ��������� �����
%���� ��������� ���� �� �������� �������� � ��������� �������, ���� ���
%������� 
    