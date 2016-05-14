module.exports = function(MockApi) {

  MockApi.detail = function(facade, method, cb) {

  	MockApi.findOne({where: {facade: facade, method: method}}, function(err, mockApi) {

  		if (mockApi) {
  			cb(null, mockApi.service, mockApi.facade, mockApi.method, mockApi.response);
  		}
  		else {
  			cb(null, '', '', '', {});	
  		}

  	});
    
  };

  MockApi.remoteMethod(
    'detail',
    {
      http: {path: '/detail/:facade/:method', verb: 'post'},
      accepts: [
      	{arg: 'facade', type: 'string', required: true },
      	{arg: 'method', type: 'string', required: true }
      ],
      returns: [
	      {arg: 'service', type: 'string'},
      	{arg: 'facade', type: 'string'},
      	{arg: 'method', type: 'string'},
      	{arg: 'response', type: 'object'}
      ]
    }
  );

  MockApi.mocking = function(facade, method, cb) {

  	MockApi.findOne({where: {facade: facade, method: method}}, function(err, mockApi) {

  		if (mockApi) {
  			cb(null, mockApi.response);
  		}
  		else {
  			cb(null, {});	
  		}

  	});
    
  };

  MockApi.remoteMethod(
    'mocking',
    {
      http: {path: '/mocking/:facade/:method', verb: 'post'},
      accepts: [
      	{arg: 'facade', type: 'string', required: true },
      	{arg: 'method', type: 'string', required: true }
      ],
      returns: [
      	{arg: 'response', type: 'object', root: true}
      ]
    }
  );

};
