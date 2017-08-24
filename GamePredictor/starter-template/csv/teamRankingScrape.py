from bs4 import BeautifulSoup
import requests

url = 'http://www.hoopshype.com/2017/07/05/nba-power-rankings-2017-free-agency-gordon-hayward/'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
ppg = soup.find_all('h1')
myList = [0, 0, 0, 0, 0, 0]
for x in range(3,33,1):
	if(ppg[x].text[8:13] == "Cleve" or ppg[x].text[9:14] == "Cleve"):
		myList[0] = x-2
	if (ppg[x].text[8:13] == "Golde" or ppg[x].text[9:14] == "Golde"):
		myList[1] = x-2
	if (ppg[x].text[8:13] == "New Y" or ppg[x].text[9:14] == "New Y"):
		myList[2] = x-2
	if (ppg[x].text[8:13] == "Toron" or ppg[x].text[9:14] == "Toron"):
		myList[3] = x-2
	if (ppg[x].text[8:13] == "Bosto" or ppg[x].text[9:14] == "Bosto"):
		myList[4] = x-2
	if (ppg[x].text[8:13] == "Washi" or ppg[x].text[9:14] == "Washi"):
		myList[5] = x-2


for x2 in range(0, 6, 2):
	filename = "threedata" + str(int((x2/2)+1))+ ".csv"
	f = open(filename, "w")
	headers = "category,val0,val1\n"
	f.write(headers)
	f.write("cat1" + ",{0},{1}\n".format(int(myList[x2]),int(myList[x2+1])));	
	f.close()