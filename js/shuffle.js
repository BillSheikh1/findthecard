function shuffle(array) {

	var arrayLength = array.length;
	if(arrayLength == 0) return false;
	while(--arrayLength) {
	
		var random = Math.floor(Math.random() * (arrayLength + 1));
		var tempVar1 = array[arrayLength];
		var tempVar2 = array[random];
		array[arrayLength] = tempVar2;
		array[random] = tempVar1;	
	}

}