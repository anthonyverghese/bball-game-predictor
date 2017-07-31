from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'http://www.nba.com/summerleague/2017/scores'

# Opening up connection. Grabbring the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")

# Grabs each product
containers = page_soup.findAll("div", {"class":"score"})
containersTwo = page_soup.findAll("div", {"class":"tri"})

filename = "data.csv"
f = open(filename, "w")
headers = "Team Initials, Score\n"
f.write(headers)

for containerTwo in containersTwo:
	teamName = containerTwo.text.strip()
	print("teamName" + teamName)

for container in containers: 
	scoreValue = container.text.strip()

	print("scoreValue" + scoreValue)

for Nam, Scor in zip(containersTwo, containers):
	teamNam = Nam.text.strip()
	scorVal = Scor.text.strip()
	f.write(teamNam + "," + scorVal + "\n")
f.close()

