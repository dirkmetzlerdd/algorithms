package sort

import (
	"reflect"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	unsorted := []int{1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6}
	sorted := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100}

	if reflect.DeepEqual(sorted, BubbleSort(unsorted)) == false {
		t.Errorf("BubbleSort failed")
	}
}

func TestInsertionSort(t *testing.T) {
	unsorted := []int{1, 3, 8, 7, 2, 100, 0, 9, 5, 4, 6}
	sorted := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100}

	if reflect.DeepEqual(sorted, InsertionSort(unsorted)) == false {
		t.Errorf("InsertionSort failed")
	}
}
