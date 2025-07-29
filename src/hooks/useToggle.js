function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => {
    ;(prev) => !prev
  }
  const setTrue = () => {
    setValue(true)
  }
  const setFalse = () => {
    setValue(false)
  }

  return { value, toggle, setFalse, setTrue }
}
