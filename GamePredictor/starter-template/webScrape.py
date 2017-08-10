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

filename = "data1.csv"
f = open(filename, "w")
headers = "category, val0, val1\n"
f.write(headers)
i = 0
j = 0
myList = [0,0,0,0,0,0,0,0]
for Nam, Scor in zip(containersTwo, containers):
	teamNam = Nam.text.strip()
	scorVal = Scor.text.strip()
	if (teamNam == "CLE" and i < 4):
		print(teamNam)
		print("scorVal.type")
		print(scorVal)
		myList[2*i] = scorVal
		i=i+1
		
	if (teamNam == "GSW" and j < 4):
		myList[2*j+1] = scorVal
		j=j+1
		
for x in range(0,8,2):
	print("Anthony: ", type(int(myList[x])), type(int(myList[x + 1])));
	f.write("cat" + str(int(x/2) + 1) + ",{0}, {1} \n".format(int(myList[x]), int(myList[x + 1])));
f.close()


# filename2 = "data2.csv"
# f2 = open(filename2, "w")
# headers2 = "category, val0, val1\n"
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
# 	if (teamNam2 == "CHA" and i2 < 4):
# 		print("yoyoyo")
# 		myList2[2*i2] = scorVal2
# 		i2=i2+1
		
# 	if (teamNam2 == "SAC" and j2 < 4):
# 		myList2[2*j2+1] = scorVal2
# 		j2=j2+1
# for x2 in range(0,8,2):
# 	f2.write("cat" + str(int(x2/2) + 1) + "," + myList2[x2] + "," + myList2[x2+1] + "\n")
# f2.close()

# filename = "data3.csv"
# f = open(filename, "w")
# headers = "category, val0, val1\n"
# f.write(headers)
# i = 0
# j = 0
# myList = [0,0,0,0,0,0,0,0]
# for Nam, Scor in zip(containersTwo, containers):
# 	print("hi")
# 	teamNam = Nam.text.strip()
# 	scorVal = Scor.text.strip()
# 	print(teamNam)
# 	print(i)
# 	if (teamNam == "CHA" and i < 4):
# 		print("yoyoyo")
# 		myList[2*i] = scorVal
# 		i=i+1
		
# 	if (teamNam == "SAC" and j < 4):
# 		myList[2*j+1] = scorVal
# 		j=j+1
# for x in range(0,8,2):
# 	f.write("cat" + str(int(x/2) + 1) + "," + myList[x] + "," + myList[x+1] + "\n")
# f.close()

