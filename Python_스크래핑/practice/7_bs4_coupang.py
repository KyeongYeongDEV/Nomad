import requests
import re
from bs4 import BeautifulSoup

url = "https://www.coupang.com/np/search?q=%EB%85%B8%ED%8A%B8%EB%B6%81&channel=user&component=&eventCategory=SRP&trcid=&traid=&sorter=scoreDesc&minPrice=&maxPrice=&priceRange=&filterType=&listSize=36&filter=&isPriceRange=false&brand=&offerCondition=&rating=0&page=2&rocketAll=false&searchIndexingToken=1=5&backgroundColor="
headers = {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"}
 
res = requests.get(url, headers=headers)
res.raise_for_status()
soup = BeautifulSoup(res.text,"lxml")

items = soup.find_all("li", attrs={"class":re.compile("^search_product")})

for item in items:
    #광고 제품은 제외
    ad_badge = item.find("span",attrs={"class": "ad-badge-text"})
    if ad_badge:
        print(" <광고 상품 제외합니다.>")
        continue

    #리뷰 100개이상, 평점 4.5이상 되는 것만 조회
    rate = item.find("em",attrs={"class":"rating"})#평점
    if rate:
        rate = rate.get_text()
    else:
        rate = "평점없음"
        print(" <평점 없는 상품 제외합니다.>")
        continue

    name = item.find("div", attrs={ "class":"name"}).get_text() #제품명

    #애플 상품 제외
    if "Apple" in name:
        print("    <Apple 상품 제외합니다.>")
        continue

    price = item.find("strong", attrs={"class":"price-value"}).get_text() #가격 정보
    rate = item.find("em", attrs={"class":"rating"}) #평점
    if rate:
        rate = rate.get_text()
    else:
        rate = "평점 없음"


    rate_cnt = item.find("span", attrs={"class":"rating-toal-count"})
    if rate_cnt:
        rate_cnt = rate.get_text()
        rate_cnt = rate_cnt[1:-1]
    else:
        rate_cnt = "    <평점 수 없음 상품 제외합니다.>"
        continue
     
    if float(rate) >= 4.5 and int(rate_cnt) >= 50:
        print(name, price, rate, rate_cnt)
    
