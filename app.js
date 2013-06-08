var soap = require('soap');

var url = 'http://api.iproperty.com/2.3.2/ListingServices.asmx?wsdl';
var args = {
  country : "1"
  /*
  'listingType' : '1',
  'state' : '',
  'area' : '',
  'district' : '',
  'estate' : '',
  'mPrice' : '50000',
  'xPrice' : '15000000',
  'grpPropType' : '',
  'propType' : '',
  'mBedrooms' : '0',
  'xBedrooms' : '9',
  'mBathrooms' : '0',
  'xBathRooms' : '9',
  'mSize' : '100',
  'xSize' : '10000',
  'keyword' : 'Bangsar',
  'agentID' : '',
  'pageSize' : '5',
  'sortBy' : 'pdz',
  'page' : '3',
  'iUserName' : '',
  'iPassword' : ''
  */
};

soap.createClient(url, function(err, client) {
  client.GET_SearchResult(args, function(err, result) {
    console.log(result);
  });
  //if (err) {
  //  throw err;
  //} else {
  //  client.describe();
  //}
});
