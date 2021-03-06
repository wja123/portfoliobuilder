var docReady=$(document).ready(init);

function init(){
	updateTotals();
	$(".select-box").on('click',".amount-input",amountInpHandler);
	$(".select-box").on('change',".amount-input",amountInpHandler);
	$(".list-box").on('click',".amount-input",amountInpHandler);
	$(".select-box").on('click',".item",clickHandler);
	$(".list-box").on('click','.item',clickHandler);
	$(".list-box").on('click',listHandler);
	$(".select-box").on('click',returnHandler);
}

function amountInpHandler(event){
	event.stopPropagation();

//updates allocation amount
var $parElem = $(this).parent();
	$parElem.find(".alloc-amount").text((parseFloat($(this).val()) * parseFloat($(this).parent().find(".price").text())).toFixed(2));

	var $totalElem = $(this).parent().parent().find(".totals").find("." + $(this).attr("class"));
	updateTotals();
}

function updateTotals(){

console.log("updatetotals");
	var totPrice=0;
	var numStocks=0;
	var avgPChange=0;
	var totAmountInput=0;
	var totAlloc=0;

 $(".select-box>.item>.price").each(function(item){
 	totPrice+=parseFloat(this.innerText);
 	numStocks++;
});

$(".totals-selectbox>.price").text(parseFloat(totPrice/numStocks).toFixed(2));

numStocks=0;
  $(".select-box>.item>.pchange").each(function(item){
 	avgPChange+=parseFloat(this.innerText);
 	 	numStocks++;
});

$(".totals-selectbox>.pchange").text(parseFloat(avgPChange/numStocks).toFixed(2));

  $(".select-box>.item>.amount-input").each(function(item){
 	totAmountInput+=parseFloat(this.valueAsNumber);
});


$(".totals-selectbox>.amount-input").text(parseFloat(totAmountInput).toFixed(2));

  $(".select-box>.item>.alloc-amount").each(function(item){
 	totAlloc+=parseFloat(this.innerText);
});


$(".totals-selectbox>.alloc-amount").text(parseFloat(totAlloc).toFixed(2));


// $(".totals-selectbox>.alloc-amount")

}

function clickHandler(event){
	event.stopPropagation();
	var $this =$(this);
	console.log("click hander");
	if($(".selected").length){
		if($this.hasClass("selected"))	
		{
			$(".item").removeClass("selected");
		}
	}
	else{
		$this.addClass("selected");
		updateTotals();
	}
				updateTotals();
}


function listHandler(event){	
	console.log("listhandler");
	if($(".selected").length){
		if(!$(this).find(".selected").length)
		{
			var $detachApp=$(".selected").removeClass('selected');
			
			$detachApp.appendTo($(this));
			$(this).find("selected").removeClass(".selected");

		}	
	}
				updateTotals();

}

function returnHandler(){
	console.log("return handler");	
	if($(".selected").length){
		if(!$(this).find(".selected").length)
		{
			var $detachApp=$(".selected").removeClass('selected');
			
			$detachApp.appendTo($(this));
			$(this).find("selected").removeClass(".selected");

		}	
	}
				updateTotals();

}

