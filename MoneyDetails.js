import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <ul className="money-details-cont">
      <li className="money-detail-item-1" style={{backgroundColor: '#84cc16'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-imgs"
        />
        <div>
          <p className="money-title">Your Balance</p>
          <p className="money-amount">Rs {balance}</p>
        </div>
      </li>
      <li className="money-detail-item-2" style={{backgroundColor: '#06b6d4'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-imgs"
        />
        <div>
          <p className="money-title">Your Balance</p>
          <p className="money-amount">Rs {income}</p>
        </div>
      </li>
      <li className="money-detail-item-2" style={{backgroundColor: '#7c3aed'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-imgs"
        />
        <div>
          <p className="money-title">Your Balance</p>
          <p className="money-amount">Rs {expenses}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
