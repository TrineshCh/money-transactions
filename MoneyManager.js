import React, {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (title === '' || amount === '') {
      alert('Please enter a valid title and amount')
      return
    }

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      type,
    }

    this.setState(prevState => {
      const updatedIncome =
        type === 'INCOME'
          ? prevState.income + parseFloat(amount)
          : prevState.income
      const updatedExpenses =
        type === 'EXPENSES'
          ? prevState.expenses + parseFloat(amount)
          : prevState.expenses

      return {
        transList: [...prevState.transList, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
        income: updatedIncome,
        expenses: updatedExpenses,
        balance: updatedIncome - updatedExpenses,
      }
    })
  }

  deleteTransaction = id => {
    this.setState(prevState => {
      const transactionToDelete = prevState.transList.find(
        transaction => transaction.id === id,
      )
      const updatedTransactions = prevState.transList.filter(
        transaction => transaction.id !== id,
      )
      let updatedIncome = prevState.income
      let updatedExpenses = prevState.expenses

      if (transactionToDelete.type === 'INCOME') {
        updatedIncome -= transactionToDelete.amount
      } else {
        updatedExpenses -= transactionToDelete.amount
      }

      return {
        transList: updatedTransactions,
        income: updatedIncome,
        expenses: updatedExpenses,
        balance: updatedIncome - updatedExpenses,
      }
    })
  }

  render() {
    const {balance, income, expenses, title, amount, type, transList} =
      this.state

    return (
      <div className="background">
        <div className="details-cont">
          <h1 className="head-1">Hi, Richard</h1>
          <p className="para-1">
            Welcome back to your <span className="s-ele">Money Manager</span>
          </p>
        </div>
        {/* Render MoneyDetails in a separate section */}
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="trans-his-cont">
          <form className="trans-cont" onSubmit={this.onSubmitTransaction}>
            <h1 className="trans-head">Add Transaction</h1>
            <label htmlFor="titleid" className="title-label">
              TITLE
            </label>
            <input
              className="input-field"
              id="titleid"
              type="text"
              value={title}
              onChange={this.onChangeTitle}
              placeholder="TITLE"
            />
            <label htmlFor="amountid" className="title-label">
              AMOUNT
            </label>
            <input
              className="input-field"
              id="amountid"
              type="text"
              value={amount}
              onChange={this.onChangeAmount}
              placeholder="AMOUNT"
            />
            <label htmlFor="typeid" className="title-label">
              TYPE
            </label>
            <select
              className="input-field"
              id="typeid"
              value={type}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-cont">
            <h1 className="h-head">History</h1>
            <ul className="unord-his-cont">
              <div className="sub-his-cont">
                <h1 className="h-title">Title</h1>
                <h1 className="h-amount">Amount</h1>
                <h1 className="h-type">Type</h1>
              </div>
              {transList.map(eachTrans => (
                <TransactionItem
                  key={eachTrans.id}
                  transaction={eachTrans}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
