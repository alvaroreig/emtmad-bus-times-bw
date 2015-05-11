# emtmad-bus-times-bw

JavaScript library to access services from the public API of the Public Transport Authority of Madrid, Spain (EMT)

## API Access

Request access to the API at http://opendata.emtmadrid.es/Formulario

## Installation
emtmad-bus-times-bw is packaged using Bower ( http://bower.io/ ):

```sh
bower install emtmad-bus-times-bw --save
```

If you don't use bower, you can just download the emtmadBusTimes.js library.

## Usage: get incoming buses to a given bus stop

Once you have the library, you just need to call the getIncomingBuses(busStopNumber, YOUR_API_ID, YOUR_API_PASSKEY, your_callback_function(jsonOutput) and access the JSON file:

```sh
	var busStopNumber = '1924';
	var idClient = 'XXXXXXX';
	var passKey = 'YYYYYY';

	getIncomingBuses(busStopNumber,idClient,passKey, function(output){
        if (output.status == 200)
            console.log(output.arrives);
        else if (output.status == 400)
            console.log(output.error);
        else
            console.log("unknown error");
    });
```

If the call to the API is successful, the returned JSON will be like this:

```sh
{
    "status":200,
    "arrives":[{bus0},{bus1}....{busN}]
}
```

Where every **{busN}** object represents an incoming bus to the specified bus stop. The most relevant attributes for each bus are:

```sh
{
    "lineId": "32", # The line of the bus
    "busDistance": 9, # In meters
    "busTimeLeft": 0 # In seconds
}
```


If the call to the API wasn't successful, the returned JSON will be like this:

```sh
{
    "status":400,
    "error": e
}
```

## Troubleshooting

### CORS

The SSL certificate in the endpoint ( https://openbus.emtmadrid.es ) is self-signed, so you will need to add it to your browser's truststore.

## Development

Do you want to contribute? Great! Pull requests are more than welcome. 

## Nodejs (npm) version

Check https://github.com/alvaroreig/emtmad-bus-times-node