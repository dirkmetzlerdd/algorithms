package sort

func BubbleSort(arr []int) []int {
	swapped := true

	for swapped == true {
		swapped = false
		
		for i := 0; i < len(arr); i++ {
			if i < len(arr) - 1 && arr[i] > arr[i+1] {
				temp := arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = temp
				swapped = true
			}
		}
	}

	return arr;
}