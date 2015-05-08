	/*API dependant variables*/
	var GetArriveStopUrl = 'https://openbus.emtmadrid.es/emt-proxy-server/last/geo/GetArriveStop.php';
	var cultureInfoKey = 'cultureInfo';
	var cultureInfoValue = 'es';
	var idStopKey = 'idStop';
	var idClientKey = 'idClient';
	var passKeyKey = 'passKey';

	function getIncomingBuses(idStopValue,idClientValue,passKeyValue, callback){
		var formData = new FormData();
		formData.append(cultureInfoKey, cultureInfoValue);
		formData.append(idStopKey, idStopValue);
		formData.append(idClientKey, idClientValue);
		formData.append(passKeyKey, passKeyValue);

		/* Create request*/
		var XHR = new XMLHttpRequest();

		/* Add Handler if sucess */
		XHR.addEventListener('load', function() {
			var output = {
				"status":200,
				"arrives": JSON.parse(XHR.responseText).arrives
			};

			if (typeof callback === "function") {
        		callback(output);
    		}
		});

		/* Add Handler if error */
		XHR.addEventListener('error', function(e) {
			var output = {
				"status":400,
				"error": e
			};

			if (typeof callback === "function") {
        		callback(output);
    		}
		});

		/*Send POST Request*/
		XHR.open('POST', GetArriveStopUrl);
		XHR.send(formData);
	}