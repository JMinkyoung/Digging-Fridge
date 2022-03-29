import requests
from bs4 import BeautifulSoup

url = 'https://www.10000recipe.com/recipe/6928540'

recipe_title = ""
recipe_image = ""
recipe_source = []
recipe_step = []
ingredientKey = ""

response = requests.get(url)

if response.status_code == 200:
  html = response.text
  soup = BeautifulSoup(html,'html.parser')
  recipe_title =  soup.select_one('#contents_area > div.view2_summary.st3 > h3').get_text()
  source_temp = soup.select_one("#divConfirmedMaterialArea")

  for n in source_temp.find_all('ul'):
    for tmp in n.find_all('li'):
      test = tmp.get_text().replace(' ', '').replace('\n', ' ')
      test = test[:-1]
      recipe_source.append(test)
  recipe_image = soup.select_one('#completeimgs > div > div.item.active > div > img').get('src')

  step = soup.find('div', 'view_step')
  i = 0
  for n in step.find_all('div', 'view_step_cont'):
    i = i+1
    recipe_step.append(str(i)+'. ' + n.get_text().replace('\n',' '))

  ingredientKey = "".join(recipe_source).replace(" ", "")

  print(recipe_title,
recipe_image,
recipe_source,
recipe_step,
ingredientKey)
else:
    print(response.status_code)
