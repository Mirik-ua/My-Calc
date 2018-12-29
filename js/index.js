var  operations = document.querySelectorAll(".operations");
var  numbers = 	 document.querySelectorAll(".numbers");
var  display = document.querySelector("#display");
var  result = document.querySelector("#result");
var  memoryBtns = document.querySelectorAll(".memory");
var  MemoryNewNumber = false;
var  MemoryCurrentNumber = 0;
var  MemoryPendingOperation = "";

for (var i = 0; i < numbers.length;i++){
	var number = numbers[i];
	number.addEventListener("click", function(e){
		numberPress(e.target.textContent);
	});
}

for (var i = 0; i < operations.length; i++){
	var operationBtn = operations[i];
	operationBtn.addEventListener("click", function(e){
		operation(e.target.textContent);
	});
}

for (var i = 0; i < memoryBtns.length; i++){
	var memoryBtn = memoryBtns[i];
	memoryBtn.addEventListener("click", function(e){
		memory(e.target.textContent);
	});
}

result.addEventListener("click", result);

function memory(memoryBtn) {
	 if (memoryBtn === "ce") {
		display.value = "0";
		MemoryNewNumber = true;
	}else if(memoryBtn === "c") {
	 display.value = "0";
	 MemoryNewNumber = false;
	 MemoryCurrentNumber = 0;
	 MemoryPendingOperation = "";
 };
};

 function numberPress(number){
	if (MemoryNewNumber) {
		display.value = number;
		MemoryNewNumber = false;
	}else{
		 if (display.value === '0') {
			display.value = number;
		}else{
			display.value += number;
	};
 };
};

function operation(op){
	var localOperationMemory = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== "=") {
		display.value = MemoryCurrentNumber;
	}else{
		MemoryNewNumber = true;
	}if (MemoryPendingOperation === "+") {
		MemoryCurrentNumber += parseFloat(localOperationMemory);
	}else if (MemoryPendingOperation === "-") {
		MemoryCurrentNumber -= parseFloat(localOperationMemory);
	}else if (MemoryPendingOperation === "/") {
		MemoryCurrentNumber /= parseFloat(localOperationMemory);
	}else if (MemoryPendingOperation === "*") {
		MemoryCurrentNumber *= parseFloat(localOperationMemory);
	}else {
		MemoryCurrentNumber = parseFloat(localOperationMemory);
	};
	display.value = MemoryCurrentNumber;
	MemoryPendingOperation = op;
};
