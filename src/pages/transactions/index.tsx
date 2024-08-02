import { Header } from '@/components/header'
import { Summary } from '@/components/summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { SearchForm } from './components/search-form'
import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/transactions-context'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transation) => (
              <tr key={transation.id}>
                <td>{transation.description}</td>
                <td>
                  <PriceHighlight variant={transation.type}>
                    {transation.price}
                  </PriceHighlight>
                </td>
                <td>{transation.category}</td>
                <td>{transation.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
