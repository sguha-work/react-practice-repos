import { NavLink } from "react-router-dom"
function LinkContainerComponent() {
    return (
        <table>
            <tbody>
                <tr>
                    <td><NavLink to="/service"> Service</NavLink></td>
                    <td><NavLink to="/career"> Career</NavLink></td>
                    <td><NavLink to="/contact"> Contact</NavLink></td>
                </tr>
            </tbody>
        </table>
    )
}

export default LinkContainerComponent