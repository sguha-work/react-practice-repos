import data from './../../data/data';
import ReportListContent from './ReportListContent';
import ReportListHeader from './ReportListHeader';
import './ReportList.css';
const ReportList = ()=>{
    console.log('data',data);

    return (
        <div>
        <h1>This is list of reports</h1>
        <table>
            <thead>
                <tr>
                    <ReportListHeader sampleData={data[0]}></ReportListHeader>
                    </tr>
            </thead>
            <tbody>
                <ReportListContent data={data}></ReportListContent>
            </tbody>
        </table>
        </div>
    );
}
export default ReportList;