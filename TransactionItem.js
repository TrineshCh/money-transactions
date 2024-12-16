import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {id, title, amount, type} = transaction

  return (
    <li className="history-item-cont">
      <p className="h-para">{title}</p>
      <p className="h-para">Rs {amount}</p>
      <p className="h-para">{type}</p>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
