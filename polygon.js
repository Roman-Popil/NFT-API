let axios = require('axios');
let data = JSON.stringify({
  "isV2": true,
  "data": [
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "ether"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "binanceSmart"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "heco"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "okex"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "gate"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "kucoin"
    },
    {
      "address": "AuNpdVPPucH6f8QSm4TBnUL3ousGmFWumq5jC6Yazg78",
      "chain": "solana"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "avax"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "matic"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "fantom"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "xDai"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "tomo"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "ronin"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "celo"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "klaytn"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "harmony"
    },
    {
      "address": "0xf1Cff704c6E6ce459e3E1544a9533cCcBDAD7B99",
      "chain": "arbitrumXdai"
    }
  ]
});

let config = {
  method: 'post',
  url: 'https://production.coin98.services/api/nft/accountV2',
  headers: { 
    'Host': 'production.coin98.services', 
    'Connection': 'keep-alive', 
    'Content-Length': '1732', 
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"', 
    'Version': '5.7.1', 
    'Source': 'C98EXTMSKWE', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlYWNoa25tZWZwaGVwY2Npb25ib29oY2tvbm9lZW1nIiwiaWF0IjoxNjQyMTY4NjU2LCJleHAiOjE5NTc1Mjg2NTZ9.4h9Kd9l9YCZn-CAXRSKzZVA8sqs7R_UhaSiJ_Nq40Co', 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Signature': 'e707b033b7676ac633d3d42e745527bd0a21bce1f27c9644649ec52704887234', 
    'sec-ch-ua-mobile': '?0', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36', 
    'chromeId': 'aeachknmefphepccionboohckonoeemg', 
    'os': 'extension', 
    'sec-ch-ua-platform': '"Windows"', 
    'Origin': 'chrome-extension://aeachknmefphepccionboohckonoeemg', 
    'Sec-Fetch-Site': 'cross-site', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Dest': 'empty', 
    'Accept-Encoding': 'gzip, deflate, br', 
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
