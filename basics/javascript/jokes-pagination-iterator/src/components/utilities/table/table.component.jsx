import './table.component.css';
function TableComponent() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Joke</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                </tbody>
            </table>

            <div className="pagination">
                <button id="prevBtn">Previous</button>
                <button id="nextBtn">Next</button>
            </div>
        </>
    )
}

export default TableComponent