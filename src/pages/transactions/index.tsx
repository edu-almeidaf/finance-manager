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
import { dateFormatter, priceFormatter } from '@/utils/formatter'

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
                    {transation.type === 'outcome' && '- '}
                    {priceFormatter.format(transation.price)}
                  </PriceHighlight>
                </td>
                <td>{transation.category}</td>
                <td>{dateFormatter.format(new Date(transation.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
