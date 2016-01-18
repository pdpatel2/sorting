// function bubbleSort(array, swapped) {

// 	if (array.length === 0 || array.length === 1) {
// 		return array
// 	}

// 	if (swapped) {
// 		if (swapped.every(function(element, index, array) {
// 			return element === false
// 		}) === true) {
// 			return array
// 		}
// 	}

// 	if (sortedArray === undefined || swapped === undefined) {
// 		var sortedArray = [];
// 		var swapped = [];
// 	}
	
// 	for (var i=0; i<array.length-1; i++) {
// 		if (array[i] > array[i+1]) {
// 			sortedArray.push(array[i+1])
// 			swapped.push(true)

// 		}
// 		else {
// 			sortedArray.push(array[i])
// 			swapped.push(false)
// 		}
// 	}

// 	return bubbleSort(sortedArray, swapped)

// }

function bubbleSort(array) {

	var swap = function(index1, index2) {
		var temp1 = array[index1];
		var temp2 = array[index2];
		array[index1] = temp2;
		array[index2] = temp1;
	}

	if (array.length === 0 || array.length === 1) {
		return array
	}

	var swapped = true
	while (swapped === true) {
		swapped = false;
		for (var i=0; i<array.length-1; i++) {
			if (array[i] > array[i+1]) {
				swap(i, i+1);
				swapped = true;
			}
		}
	}

	return array

}