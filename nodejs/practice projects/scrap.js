// //const axios = require("axios");
// const request = require('request');
// const cheerio = require('cheerio');
// const fs = require('fs');
// const { url } = require('inspector');
// const { time } = require('console');


// const URL = "https://www.google.com/search?q=laptop+buy+online&newwindow=1&sxsrf=ALeKk0158hjgcAnRQqmWVC-I_FlKSxwJhg%3A1624949836919&ei=TMTaYIGfN6ma4-EPifiMsAw&oq=laptop+bu&gs_lcp=Cgdnd3Mtd2l6EAMYAjIFCAAQsQMyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgUIABDJAzICCAA6BwgjELADECc6BwgAEEcQsAM6CgguELADEMgDEEM6BwgjEOoCECc6BAgjECc6BQgAEJECOgIILjoFCC4QsQM6BAgAEEM6BwgAELEDEEM6DQguELEDEMcBEKMCEEM6CggAELEDEMkDEEM6BQgAEJIDOgoIABCxAxCDARBDOggIABCxAxCDAUoFCDgSATFKBAhBGABQnoIJWMTNCWCH6gloAnACeACAAbUIiAH2E5IBBzAuOS43LTGYAQCgAQGqAQdnd3Mtd2l6sAEKyAELwAEB&sclient=gws-wiz";
  
// request(URL, function (err, res, body) {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         const arr = [];
//         let $ = cheerio.load(body);
        
//         $('div.tF2Cxc').each(function(){
//             console.log(this)

//             const data = $(this)
// .find('div.yuRUbf>a').attr('href');
//             const name = $(this).find('div.yuRUbf>a>h3').text();
//             console.log(data,name)
//             const obj = {
//                 dataUrl : data,
//                 name : name
//             };
//         //    console.log(obj);
//             arr.push(JSON.stringify(obj));
//         });
//         arr.push("\n ---------- end-----------")
//         //console.log(arr.toString());

//       var  result;
//       for(let i=0;i<arr.length;i++) {
//           result+=arr[i].toString()+"\n";
//       }

//      // console.log(result)
//         fs.writeFile('data.txt', result, function (err) {
//             if(err) {
//                 console.log(err);
//             }else{
//                     console.log("success");
//                 }
//         });
  
//     }
// });

// var scraped_data = await axios.get("https://books.toscrape.com/");
// const $ = cheerio.load(scraped_data.data)
// console.log($);

//const axios = require("axios");
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
var url = require('url')


  
const URL = "https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        const arr = [];
        let $ = cheerio.load(body);
        var hostName = url.parse(URL,true);
        $('div._2kHMtA').each(function(){
            console.log(this)

            const data =hostName.host + $(this).find('a').attr('href');
            const name = $(this).find('a>div._3pLy-c>div.col>div._4rR01T').text();
            console.log(data,name)
            const obj = {
                dataUrl : data,
                name : name
            };
        //    console.log(obj);
            arr.push(JSON.stringify(obj));
        });
        arr.push("---------- end-----------")
        //console.log(arr.toString());

      var  result="";
      for(let i=0;i<arr.length;i++) {
          result+=(i+1) +" = "+arr[i].toString()+"\n\n";
      }

     // console.log(result)
        fs.writeFile('data.txt',result, function (err) {
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
