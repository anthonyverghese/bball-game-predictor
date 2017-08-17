from bs4 import BeautifulSoup
import requests

url = 'http://www.nba.com/teams/cavaliers'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
ppg = soup.find_all('div', {'class': 'team_stat'})

url2 = 'http://www.nba.com/teams/warriors'
page2 = requests.get(url2)
soup2 = BeautifulSoup(page2.text, 'html.parser')
ppg2 = soup2.find_all('div', {'class': 'team_stat'})

filename = "twodata1.csv"
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
# #! /usr/bin/env python3
# import requests
# from sbs4 import BeautifulSoup

# response = requests.get('http://www.nba.com/teams/cavaliers')
# if response.status_code != 200:
#     return 

# soup = BeautifulSoup(response.text, 'html.parser')

# div_list = soup.findAll('div', _class='team_stat')
# ppg = soup.find('div', {'class': 'team_stat'}).find('span').text


# from urllib.request import urlopen as uReq
# from bs4 import BeautifulSoup as soup
# import string


# # teamsArray = ["cavaliers", "warriors", "knicks", "raptors", "celtics", "wizards"]
# # for team in teamsArray:
# my_url = 'http://www.nba.com/cavaliers/standings'
# print(my_url)
# # Opening up connection. Grabbring the page
# uClient = uReq(my_url)
# page_html = uClient.read()
# uClient.close()
# page_soup = soup(page_html, "html.parser")
# blocksArray2 = page_soup.find_All("span", {"class": "badge"})
# print(blocksArray2[0].text.strip())
# # print(blocksArray)