from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import string
import requests

my_url = 'http://www.nba.com/summerleague/2017/scores'
# Opening up connection. Grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")

# Grabs each product
containers = page_soup.findAll("div", {"class":"score"})
containersTwo = page_soup.findAll("div", {"class":"tri"})
teamNames = ["CLE", "GSW", "NYK", "TOR", "BOS", "WAS"]

# Gets data for data1.csv, data2.csv, and data3.csv. 
# This data is the points scored in the last four games
# of the 6 teams in the three matchups displayed on the web page
i=1
for j in range(1,7,2):
	filename = "data" + i + ".csv"
	i = i + 1
	f = open(filename, "w")
	headers = "category,val0,val1\n"
	f.write(headers)
	firstTeamIndex = 0
	secondTeamIndex = 0
	myList = [0,0,0,0,0,0,0,0]
	for Nam, Scor in zip(containersTwo, containers):
		teamNam = Nam.text.strip()
		scorVal = Scor.text.strip()
		if (teamNam == teamNames[j-1] and firstTeamIndex < 4):
			print(teamNam)
			print("scorVal.type")
			print(scorVal)
			myList[2*firstTeamIndex] = scorVal
			firstTeamIndex=firstTeamIndex+1
			
		if (teamNam == teamNames[j] and secondTeamIndex < 4):
			myList[2*secondTeamIndex+1] = scorVal
			secondTeamIndex=secondTeamIndex+1
			
	for x in range(0,8,2):
		f.write("cat" + str(int(x/2) + 1) + ",{0},{1}\n".format(int(myList[x]),int(myList[x + 1])));
	f.close()

# Gets data for twodata1.csv, twodata2.csv, and twodata3.csv. This data 
# is the PPG, OPP PPG, RPG, and APG of the six teams of the three matchups
# listed on the web page. 
teamNames2 = ["cavaliers", "warriors", "knicks", "raptors", "celtics", "wizards"]
i2=1
for j2 in range(1, 7, 2):
	url1 = 'http://www.nba.com/teams/' + teamNames2[j2-1]
	page1 = requests.get(url1)
	soup1 = BeautifulSoup(page1.text, 'html.parser')
	ppg1 = soup1.find_all('div', {'class': 'team_stat'})

	url2 = 'http://www.nba.com/teams/' + teamNames2[j2]
	page2 = requests.get(url2)
	soup2 = BeautifulSoup(page2.text, 'html.parser')
	ppg2 = soup2.find_all('div', {'class': 'team_stat'})

	filename = "twodata" + i2 + ".csv"
	i2 = i2 + 1
	f = open(filename, "w")
	headers = "category,val0,val1\n"
	f.write(headers)
	myList2 = [0, 0, 0, 0, 0, 0, 0, 0]
	firstTeamIndex2=0
	secondTeamIndex2=0
	for item, item2 in zip(ppg1, ppg2): 
		if (firstTeamIndex2 < 4 and secondTeamIndex2 < 4):
			myList2[2*firstTeamIndex2] = ppg1[firstTeamIndex2].find('span').text
			myList2[2*secondTeamIndex2+1] = ppg2[secondTeamIndex2].find('span').text
			firstTeamIndex2 = firstTeamIndex2 + 1 
			secondTeamIndex2 = secondTeamIndex2 + 1

	for x in range(0,8,2):
		f.write("cat" + str(int(x/2) + 1) + ",{0},{1}\n".format(float(myList2[x]),float(myList2[x + 1])));
	f.close()

# Gets data for fourdata1.csv, fourdata2.csv, and fourdata3.csv. This data 
# is the FG PCT, OPP FG PCT, 3 PT PCT, and OPP 3 PT PCT of the six teams of the three matchups
# listed on the web page. 
teamNames3 = ["Cleveland", "Golden State", "New York", "Toronto", "Boston", "Washington"]
i3=1
for j3 in range(1,7,2):
	url = 'http://www.espn.com/nba/statistics/team/_/stat/team-comparison-per-game/sort/avgPoints'
	page = requests.get(url)
	soup = BeautifulSoup(page.text, 'html.parser')
	stats = soup.find_all('tr')
	myList3 = [0, 0, 0, 0, 0, 0, 0, 0]	
	filename = "fourdata" + i3 + ".csv"
	i3 = i3 + 1
	f = open(filename, "w")
	headers = "category,val0,val1\n"
	f.write(headers)
	for eachItem in stats:
		if(eachItem.find('a') is not None and eachItem.find('a').getText() == teamNames3[j3-1]):
			allStats = eachItem.find_all('td')
			x0=0
			myList3[x0] = allStats[5].text
			myList3[x0+2] = allStats[6].text
			myList3[x0+4] = allStats[7].text
			myList3[x0+6] = allStats[8].text
		if(eachItem.find('a') is not None and eachItem.find('a').getText() == teamNames3[j3]):
			allStats = eachItem.find_all('td')
			x1=1
			myList3[x1] = allStats[5].text
			myList3[x1+2] = allStats[6].text
			myList3[x1+4] = allStats[7].text
			myList3[x1+6] = allStats[8].text

	for x2 in range(0,8,2):
		f.write("cat" + str(int(x2/2) + 1) + ",{0},{1}\n".format(float(myList3[x2]),float(myList3[x2 + 1])));
	f.close()
