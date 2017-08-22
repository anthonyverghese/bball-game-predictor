from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import string

my_url = 'http://www.nba.com/summerleague/2017/scores'

# Opening up connection. Grabbring the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")

i4 = 0
link_text = ""
linksArray = ["", "", "", ""]
filename4 = "official1.csv"
f4 = open(filename4, "w")
headers4 = "category,val0,val1\n"
f4.write(headers4)
for a in page_soup.find_all('a', href=True):
    link_text = a['href']
    if ((link_text[-3:] == "NYK" or link_text[-6:-3] == "NYK") and (i4 < 4)):
    	linksArray[i4] = link_text
    	i4 = i4 + 1
for i5 in range(0,4):
	my_url2 = "http://www.nba.com" + linksArray[i5]+ "#/boxscore"
	print(my_url2)
	# Opening up connection. Grabbring the page
	uClient2 = uReq(my_url2)
	page_html2 = uClient2.read()
	uClient2.close()
	page_soup2 = soup(page_html, "html.parser")
	blocksArray = page_soup2.findAll("td", {"class":"columns"})
	print(blocksArray)
	# print("yo2")
	# print(blocksArray[0].children)
	# for oneBlock in blocksArray:
	# 	print(type(oneBlock))
	# 	print("yo")

# # Grabs each product
# containers = page_soup.findAll("div", {"class":"score"})
# containersTwo = page_soup.findAll("div", {"class":"tri"})

# filename = "data1.csv"
# f = open(filename, "w")
# headers = "category,val0,val1\n"
# f.write(headers)
# i = 0
# j = 0
# myList = [0,0,0,0,0,0,0,0]
# for Nam, Scor in zip(containersTwo, containers):
# 	teamNam = Nam.text.strip()
# 	scorVal = Scor.text.strip()
# 	if (teamNam == "CLE" and i < 4):
# 		print(teamNam)
# 		print("scorVal.type")
# 		print(scorVal)
# 		myList[2*i] = scorVal
# 		i=i+1
		
# 	if (teamNam == "GSW" and j < 4):
# 		myList[2*j+1] = scorVal
# 		j=j+1
		
# for x in range(0,8,2):
# 	print("Anthony: ", type(int(myList[x])), type(int(myList[x + 1])));
# 	f.write("cat" + str(int(x/2) + 1) + ",{0},{1}\n".format(int(myList[x]),int(myList[x + 1])));
# f.close()


# filename2 = "data2.csv"
# f2 = open(filename2, "w")
# headers2 = "category,val0,val1\n"
# f2.write(headers2)
# i2 = 0
# j2 = 0
# myList2 = [0,0,0,0,0,0,0,0]
# for Nam2, Scor2 in zip(containersTwo, containers):
# 	print("hi")
# 	teamNam2 = Nam2.text.strip()
# 	scorVal2 = Scor2.text.strip()
# 	print(teamNam2)
# 	print(i2)
# 	if (teamNam2 == "NYK" and i2 < 4):
# 		print("yoyoyo")
# 		myList2[2*i2] = scorVal2
# 		i2=i2+1
		
# 	if (teamNam2 == "TOR" and j2 < 4):
# 		myList2[2*j2+1] = scorVal2
# 		j2=j2+1
# for x2 in range(0,8,2):
# 	f2.write("cat" + str(int(x2/2) + 1) + "," + myList2[x2] + "," + myList2[x2+1] + "\n")
# f2.close()

# filename3 = "data3.csv"
# f3 = open(filename3, "w")
# headers3 = "category,val0,val1\n"
# f3.write(headers3)
# i3 = 0
# j3 = 0
# myList3 = [0,0,0,0,0,0,0,0]
# for Nam3, Scor3 in zip(containersTwo, containers):
# 	teamNam3 = Nam3.text.strip()
# 	scorVal3 = Scor3.text.strip()
# 	print(teamNam3)
# 	print(i3)
# 	if (teamNam3 == "NYK" and i3 < 4):
# 		print("yoyoyo")
# 		myList3[2*i3] = scorVal3
# 		i3=i3+1
		
# 	if (teamNam3 == "TOR" and j3 < 4):
# 		myList3[2*j3+1] = scorVal3
# 		j3=j3+1
# for x3 in range(0,8,2):
# 	f3.write("cat" + str(int(x3/2) + 1) + "," + myList3[x3] + "," + myList2[x3+1] + "\n")
# f3.close()

