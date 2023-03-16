package sort

func QuickSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	pivot := arr[len(arr)-1]
	left := []int{}
	right := []int{}

	for i := 0; i < len(arr)-1; i++ {
		if arr[i] < pivot {
			left = append(left, arr[i])
		} else {
			right = append(right, arr[i])
		}
	}

	leftNext := QuickSort(left)
	rightNext := QuickSort(right)
	result := append(leftNext, pivot)
	result = append(result, rightNext...)

	return result

}
