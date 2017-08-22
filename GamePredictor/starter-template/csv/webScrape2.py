from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import string


teamsArray = ["cavaliers", "warriors", "knicks", "raptors", "celtics", "wizards"]
for team in teamsArray:
	my_url = 'http://www.nba.com/teams/' + team
	print(my_url)
	# Opening up connection. Grabbring the page
	uClient = uReq(my_url)
	page_html = uClient.read()
	uClient.close()
	page_soup = soup(page_html, "html.parser")
	blocksArray = page_soup.find("div", {"class": "team_stat percentage"})
	blocksArray2 = page_soup.find_All("div", {"class": "team_stat"})
	print(blocksArray2[0].text.strip())
	# print(blocksArray)