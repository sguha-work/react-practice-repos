import { useEffect, useState } from 'react';
import TableListComponent from '../../shared-components/table-list.component'

function ListExpenseComponent() {
    const [expenseList, setExpenseList]=useState([]);
    const query = `
    query fetchExpenses {
        expenses {
          _id
          createdBy
          description
          amount
          expenseType
          paymentMethod {
            method
            tool
          }
        }
      }
    `;
    const queryObj = {
        query: query
    }
    useEffect(()=>{
        (async ()=>{
            const rawResponse = await fetch('https://localhost:3005/expense', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(queryObj)
            });
            const content = await rawResponse.json();
            console.log('response from server', content);
            setExpenseList(content.data.expenses);
        })();
    },[]);
  return (
    <div>
        <TableListComponent data={expenseList}></TableListComponent>
    </div>
  )
}

export default ListExpenseComponent