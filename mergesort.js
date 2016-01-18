function merge(arr1, arr2) {
	//need to revist to sort arr1 and arr2
	return arr1.concat(arr2);
}

function split(wholeArray) {
	var firstHalf = [];
	var secondHalf = [];

    /* your code here to define the firstHalf and secondHalf arrays */
    var midPoint = (wholeArray.length / 2);
	firstHalf = wholeArray.slice(0, midPoint);
	secondHalf = wholeArray.slice(midPoint);

    return [firstHalf, secondHalf];
}

function mergeSort(array) {

	//check if each element in array is length=1
	// if (array.every(function(elem, index, arr) {
	// 	return elem.length === 1
	// }) === true) {
	// 	//sort and merge
	// 	for (var i = 0; )
	// }

	if (array.length === 1) {
		return array;
	}

	var splitArr = split(array);
	var left = mergeSort(splitArr[0]);
	var right = mergeSort(splitArr[1]);



	return merge(left, right);
}