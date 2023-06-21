package recursion

func ReverseString(str string) string {
	if len(str) == 0 {
		return str
	}

	last := str[len(str) - 1:]
	rest := str[:len(str) - 1]

	return last + ReverseString(rest)
}