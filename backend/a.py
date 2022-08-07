import sys
sys.stdin=open('input.txt','r')

try:
# Enter your code here
	n = int(input())
	for i in range(n):
	    for j in range(i,-1,-1):
	        print("*")
except Exception as e:
	print([e,'error while compling'])