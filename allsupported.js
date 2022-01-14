let axios = require('axios');

let config = {
  method: 'get',
  url: 'https://production.coin98.services/api/nft/supported/v2',
  headers: { 
    'Host': 'production.coin98.services', 
    'Connection': 'keep-alive', 
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"', 
    'Version': '5.7.1', 
    'Source': 'C98EXTMSKWE', 
    'Authorization': 'Bearer undefined', 
    'Accept': 'application/json', 
    'Signature': '90c91cde371182d5664635b59b50a2db82f2305ae6e2dea9491ce4e052ad072f', 
    'sec-ch-ua-mobile': '?0', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36', 
    'chromeId': 'aeachknmefphepccionboohckonoeemg', 
    'os': 'extension', 
    'sec-ch-ua-platform': '"Windows"', 
    'Sec-Fetch-Site': 'cross-site', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Dest': 'empty', 
    'Accept-Encoding': 'gzip, deflate, br', 
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
