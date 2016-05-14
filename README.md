## Start

```
$ npm install
$ node .
```

##Tutorial

0. The API url is **/orderFacade/getOrderList** 
1. Visit: http://0.0.0.0:3000/explorer
2. Use **POST** */MockApi* to create a new MockApi
    ```json
    {
        "service": "p2p",
        "facade": "orderFacade",
        "method": "getOrderList",
        "request": {},
        "response": {
            "responseCode": 0,
            "responseMessage": "string",
            "orderList": [
                {
                    "orderName": "string"
                }
            ]
        }
    }
    
    ```
3. Use **POST** */MockApis/mocking/{facade}/{method}* to get mocking response
	```json
    {
      "responseCode": 0,
      "responseMessage": "string",
      "orderList": [
          {
              "orderName": "string"
          }
      ] 
    }
    
    ```
4. Use **POST** */MockApis/detail/{facade}/{method}* to query this MockApi details

	```json
    {
        "service": "p2p",
        "facade": "orderFacade",
        "method": "getOrderList",
        "response": {
            "responseCode": 0,
            "responseMessage": "string",
            "orderList": [
                {
                    "orderName": "string"
                }
            ]
        }
    }
   ```