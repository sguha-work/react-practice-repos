function TableListComponent(props) {
  return (
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
                        props.data.map((d,i)=>
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

  )
}

export default TableListComponent