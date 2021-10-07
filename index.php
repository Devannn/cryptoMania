<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">

	<title>CryptoMania - Workshop - API</title>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css" >

</head>
<body>
	<!-- Modal -->
	<template id="cryptofolio-modal-template">
		<div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel"><span id="coin-name">{{coinName}}</span></h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			Current price $ <span id="coin-price">{{coinPrice}}</span>
	        <br />
	        Amount: <input type="number" id="amount-coins">
	        <br />
	        Total: <span id="total-value">0</span>
	        <br />
	        <button type="button" class="btn btn-primary" id="js-add-coin-btn">Add to cryptofolio</button>
		</div>
	</template>
	

	<nav>
		<ul class="nav">
		  <li class="nav-item">
		    <a class="nav-link active" href="index.php">Home</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" href="cryptoportfolio.php">Crypto portfolio</a>
		  </li>
		</ul>
	</nav>


	<div class="navigation">
		<!-- This is the navigation that shows how many times you clicked and how many pairs you found. -->
		<div id="navigation-text">CryptoMania</div>
	</div>
	<div class="container">
		<!-- Your chart will be added below -->
	<canvas id="coin-history-chart"></canvas>
		<table class="table" id="coins-table">
			<thead>
				<tr>
					<th>Symbol</th>
					<th>Name</th>
					<th>Price</th>
					<th>Market Cap</th>
					<th>%24 Hours</th>
					<th>More Info</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>

    <template id="all-coins-template">
    {{#data}}
        <tr>
			<td>{{symbol}}</td>
			<td class="crypto-name">{{name}}</td>
			<td class="crypto-price">{{priceUsd}}</td>
			<td>{{MarketCapUsd}}</td>
            <td>{{%24hrUsd}}</td>
			<td></td>
        </tr>
    {{/data}}
    </template>

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

	<!-- Bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
	
	<!-- Mustache JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.js"></script>

	<!-- Chart JS -->
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    
    <!-- Custom js  -->
    <script src="js/main.js"></script>
</body>
</html>