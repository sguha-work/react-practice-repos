const ReportListContent = (props)=>{
    return (
            props.data.map((individualData)=>(
                
                    <tr>
                        {
                            Object.keys(individualData).map((key)=>(
                                <td>
                                    {
                                        individualData[key]
                                    }
                                </td>
                            ))
                        }
                    </tr>
                
            ))
    )
}
export default ReportListContent;