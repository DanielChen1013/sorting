function bubbleSort(array){
	var result = array
	if(!array.length) {
		return result;
	}
	var temp
	var toContinue
	var compareCount = 0
	var swapCount = 0
	do{
		toContinue = false
		for ( var i = 0; i < result.length -1; i++){
			compareCount++
			if (result[i] > result[i+1]){
				swapCount++
				temp = result[i]
				result[i] = result [i+1]
				result[i+1] = temp
				toContinue = true
			}
		}
	} while (toContinue)
	console.log("# Comparisons: ", compareCount)
	console.log("# Swaps: ", swapCount)
	return result
}

var merge = function(arr1, arr2) {
	var result = [];

	var _mergeResult = function (arr1, arr2) {
		if (arr1.length === 0 && arr2.length === 0) {
			return result;
		} else if ((arr1.length === 0 && arr2.length > 0) || (arr1[0] >= arr2[0])) {
			result.push(arr2.shift());
			return _mergeResult(arr1, arr2);
		} else if ((arr1.length > 0 && arr2.length === 0) || (arr1[0] < arr2[0])) {
			result.push(arr1.shift());
			return _mergeResult(arr1, arr2);
		}
	}
	_mergeResult(arr1,arr2);
	return result;
}

var split = function(wholeArray) {
	var arr1 = wholeArray.slice(0,Math.floor(wholeArray.length / 2));
	var arr2 = wholeArray.slice(Math.floor(wholeArray.length / 2));;

	return [arr1, arr2];
}

var mergeSort = function(arr) {
	if (arr.length <= 1){
		return arr
	}
	var left = split(arr)[0];
	var right = split(arr)[1];
	left = mergeSort(left);
	right = mergeSort(right);
	return merge (left, right)
}






