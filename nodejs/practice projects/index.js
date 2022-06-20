//const axios = require("axios");
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const { url } = require('inspector');


  
const URL = "https://godfatheropp.github.io/";
  
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        const arr = [];
        let $ = cheerio.load(body);
        $('div.image').each(function(){
              
            const data = $(this).find('a').attr('href');
            const name = $(this).find('a>div.image-caption>p').text();
            const obj = {
                dataUrl : data,
                name : name
            };
        //    console.log(obj);
            arr.push(JSON.stringify(obj));
        });
        arr.push("\n ---------- end-----------")
        //console.log(arr.toString());

      var  result;
      for(let i=0;i<arr.length;i++) {
          result+=arr[i].toString()+"\n";
      }

      console.log(result)
        fs.writeFile('data.txt', result, function (err) {
            if(err) {
                console.log(err);
            }else{
                    console.log("success");
                }
        });
  
    }
});

// var scraped_data = await axios.get("https://books.toscrape.com/");
// const $ = cheerio.load(scraped_data.data)
// console.log($);