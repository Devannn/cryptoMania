//example API (Docs): https://docs.pokemontcg.io

// var cryptoName = $(selectedButton).closest("tr").find(".crypto-name").text;
// var cryptoPrice = $(selectedButton).closest("tr").find(".crypto-price").text;

// selectedCoinInfo = {"coinName" : cryptoName, "coinPrice" : coinPrice};

// console.log(selectedCoinInfo);

// var template = $("#cryptofolio-modal-template").html();

// var renderTemplate = Mustache.render(template, selectedCoinInfo);

// $("#modal-content-cryptofolio").html(renderTemplate);



//get all coins
function getAllCoins() {

    $.ajax({ 
		type: "GET",
		dataType: "json",
		url: "https://api.coincap.io/v2/assets",

       	success: function(data){   
            coins = data;

            console.log(coins);
            
            $.each(coins.data, function(index, value){
				console.log(value.name);
                $("#coins-table tbody").append("<tr><td>" + value.symbol + "</td><td>" + value.name + "</td><td>$" + value.priceUsd + "</td><td>" + value.marketCapUsd + "</td><td>" + value.changePercent24Hr + 
				"</td><td><button type='button' class='btn btn-primary btn-open-modal-cryptofolio' data-toggle='modal' data-target='#exampleModal'>Add</button></td>")
            })
       	}
    });
}

//function to get a single character
function getCharacter(selectedButton) {

	//Step 1: Get the selected id 
	characterId = $(selectedButton).closest("tr").find(".character-id").text();

	console.log(characterId);

	// Step 2: Create an AJAX-call with the selected character id. (see the above function for an example of an AJAX call)
	// Example AJAX-call: https://api.pokemontcg.io/v1/cards/dp6-90 is just an example
	// More info: https://docs.pokemontcg.io/#api_v1cards_get
	// the "dp6-90" is an example because in our case it should be dynamic
	// in the success: use mustache to show the name and image of the card

	$.ajax({ 
		type: "GET",
		dataType: "json",
		url: "https://api.coincap.io/v2/assets",

		success: function(data){
			coins = data;

			var template = $("#all-coins-template").html();

			var renderTemplate = Mustache.render(template, coins);

			$("#coins-table tbody").append(renderTemplate);
		}
	});

}


$(document).ready(function(){

	//load all coins @ loading
	getAllCoins();

	//On click to get a character
	$("#coins-table").on("click", ".character-info-btn", function(){
		
		getCharacter(this);

	});

	//The chart is loaded when the page is parsed
	getChartInfo();
	
});


function getChartInfo() {

	$.ajax({ 
			type: "GET",
			dataType: "json",
			//this wil be dynamic, depends on which coin you click
			//this is an example with a static json file
			url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
					
			success: function(historicalData){ 
			
			console.log(historicalData);

			//Generate the chart with the generated data
			generateChart(dateArray, priceArray)

	   }
	})
}

//generates the chart with the historical information from the past year
function generateChart(chartDate, chartPrice) {

	var ctx = document.getElementById('coin-history-chart').getContext('2d');

	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',

		// The data for our dataset
		data: {
			labels: chartDate,
				datasets: [{
					type: "line",
						label: "Price",
						borderColor: '#3e95cd',
						data: chartPrice,
				}]
		},

		// Configuration options go here
		options: {
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Date'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Price'
					}
				}]
			},
			elements: { point: { radius: 0 } }
		}
	});
};

function getCoinInfo(selectedButton) {

	//get the value from the table
	var cryptoName = $(selectedButton).closest("tr").find(".crypto-name").text();
	var cryptoPrice = $(selectedButton).closest("tr").find(".crypto-price").text();

	selectedCoinInfo = {"coinName" : cryptoName, "coinPrice" : coinPrice};

	console.log(selectedCoinInfo);

	var template = $("#cryptofolio-modal-template").html();

	var renderTemplate = Mustache.render(template, selectedCoinInfo);

	$("#modal-content-cryptofolio").html(renderTemplate);	
}

