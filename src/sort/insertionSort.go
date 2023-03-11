package sort

func InsertionSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		current := arr[i]
		j := i

		for j--; j >= 0 && current < arr[j]; j-- {
			arr[j+1] = arr[j]
		}

		arr[j+1] = current
	}

	return arr
}
