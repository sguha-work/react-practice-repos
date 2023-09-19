import gql from 'graphql-tag';
import { useSubscription } from '@apollo/react-hooks';
const EXPENSE_INSERTED = gql`
      subscription expenseInserted {
        expenseInserted {
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

const Table = () => {
    const { data, error, loading } = useSubscription(EXPENSE_INSERTED);
    console.log('data', data);
    if (loading) {
        return (<div>Loading...</div>);
    }

    if (error) {
        return (<div>Error! {error.message}</div>);
    }

    return (
        <div className="notification">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Created by</th>
                        <th>Amount</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.expenseInserted && Array.isArray(data.expenseInserted) && data.expenseInserted.map((d,i)=>
                            (
                                <tr key={i}>
                                    <td>{d.createdBy}</td>
                                    <td>{d.amount}</td>
                                    <td>{d.expenseType}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
