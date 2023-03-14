package sort

func MergeSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	middle := len(arr) / 2
	left := MergeSort(arr[0:middle])
	right := MergeSort(arr[middle:])

	return sort(left, right)
}

func sort(left, right []int) []int {
	result := []int{}

	for len(left) > 0 && len(right) > 0 {
		if left[0] < right[0] {
			result = append(result, left[0])

			if len(left) < 2 {
				left = left[0:0]
			} else {
				left = left[1:]
			}
		} else {
			result = append(result, right[0])
			if len(right) < 2 {
				right = right[0:0]
			} else {
				right = right[1:]
			}
		}

	}

	for _, num := range left {
		result = append(result, num)
	}

	for _, num := range right {
		result = append(result, num)
	}

	return result
}
