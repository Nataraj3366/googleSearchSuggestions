import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSearchInput} = props
  const {suggestion} = suggestions

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <div className="main-container">
      <li>
        <p>{suggestion}</p>
      </li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
      />
    </div>
  )
}
export default SuggestionItem
