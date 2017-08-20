from bs4 import BeautifulSoup
import requests

url = 'http://www.espn.com/nba/statistics/team/_/stat/team-comparison-per-game/sort/avgPoints'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
ppg = soup.find_all('tr')
myList = [0, 0, 0, 0, 0, 0, 0, 0]	
filename = "fourdata1.csv"
f = open(filename, "w")
headers = "category,val0,val1\n"
f.write(headers)
for eachItem in ppg:
	if(eachItem.find('a') is not None and eachItem.find('a').getText() == "Cleveland"):
		allStats = eachItem.find_all('td')
		x0=0
		myList[x0] = allStats[5].text
		myList[x0+2] = allStats[6].text
		myList[x0+4] = allStats[7].text
		myList[x0+6] = allStats[8].text
	if(eachItem.find('a') is not None and eachItem.find('a').getText() == "Golden State"):
		allStats = eachItem.find_all('td')
		x=1
		myList[x] = allStats[5].text
		myList[x+2] = allStats[6].text
		myList[x+4] = allStats[7].text
		myList[x+6] = allStats[8].text

for x2 in range(0,8,2):
	f.write("cat" + str(int(x2/2) + 1) + ",{0},{1}\n".format(float(myList[x2]),float(myList[x2 + 1])));
f.close()