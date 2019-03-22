clc;
clear;
BirthData = [29 13 14 6 26];
y = sin(BirthData).^2 - cos(BirthData).^2;
% format compact;

BirthData = [y; BirthData]
BirthData = BirthData';
y = y'
T = table(BirthData, y)
