package main

import (
	"algorithms/src/sort"
	"fmt"
)

func main() {
	fmt.Println("_")
	fmt.Println("START MAIN")
	unsorted := []int{1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6}
	fmt.Println(sort.InsertionSort(unsorted))
}
