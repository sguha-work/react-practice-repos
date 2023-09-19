const ReportListHeader = (props) => {
    const sampleData = props['sampleData'];
    console.log('sample data', sampleData);
    return (
        
                Object.keys(sampleData).map((key) => (
                        <th>{key}</th>
                    )
                )
        
    )
}
export default ReportListHeader;