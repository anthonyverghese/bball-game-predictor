from bs4 import BeautifulSoup
import requests

url = 'http://www.nba.com/teams/celtics'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
ppg = soup.find_all('div', {'class': 'team_stat'})

url2 = 'http://www.nba.com/teams/wizards'
page2 = requests.get(url2)
soup2 = BeautifulSoup(page2.text, 'html.parser')
ppg2 = soup2.find_all('div', {'class': 'team_stat'})

filename = "twodata3.csv"
f = open(filename, "w")
headers = "category,val0,val1\n"
f.write(headers)
myList = [0, 0, 0, 0, 0, 0, 0, 0]
i=0
j=0
for item, item2 in zip(ppg, ppg2): 
	if (i < 4 and j < 4):
		myList[2*i] = ppg[i].find('span').text
		myList[2*j+1] = ppg2[j].find('span').text
		print(myList[2*i])
		print(myList[2*j+1])
		i = i + 1 
		j = j + 1

for x in range(0,8,2):
	f.write("cat" + str(int(x/2) + 1) + ",{0},{1}\n".format(float(myList[x]),float(myList[x + 1])));
f.close()