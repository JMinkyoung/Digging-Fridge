
require('dotenv').config();
const len = 1357;
var request = require('request');
const Main = require('../back/models/recipe');

var options = {
  'method': 'GET',
  'url': `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/${len}`,
  'headers': {
    'Cookie': 'elevisor_for_j2ee_uid=6ws1hfdppcbc3'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  const reg = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

  for(let i=0; i<357; i++){
    const data = JSON.parse(response.body).COOKRCP01.row[i];
    const title = data.RCP_NM;
    const image = data.ATT_FILE_NO_MK;
    const type = data.RCP_PAT2;
    let nutriment = {};
    let ingredient = data.RCP_PARTS_DTLS.replace(/\n/gi,",").split(",");
    let ingredientKey = ingredient.join("").replace(reg,"");
    let recipe = [];

    nutriment["eng"] = data.INFO_ENG;
    nutriment["car"] = data.INFO_CAR;
    nutriment["pro"] = data.INFO_PRO;
    nutriment["fat"] = data.INFO_FAT;
    nutriment["na"] = data.INFO_NA;

    for(let idx = 1; idx<10; idx++){
        if(!data[`MANUAL0${idx}`]) break;
        recipe.push(data[`MANUAL0${idx}`]);
    }
    for(let idx=10; idx<21; idx++){
        if(!data[`MANUAL${idx}`]) break;
        recipe.push(data[`MANUAL${idx}`]); 
    }

    let newRecipe = new Main({
        title,
        image,
        nutriment,
        ingredient,
        recipe,
        ingredientKey,
        type
    });

    newRecipe.save(function (err) {
        if (err) return console.error(err);
    });
  }
});