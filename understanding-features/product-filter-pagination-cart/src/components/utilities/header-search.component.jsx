import { useContext } from "react";
import HomePageContext from "../../context/homepage-context";
function HeaderSearchComponent() {
    const searchInputChanged = useContext(HomePageContext);
    const dataChanged = (event)=>{
        searchInputChanged(event.target.value);
    }
    return (
        <div className="position-relative mx-auto">
            <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="text"
                placeholder="Search"
                onChange={dataChanged}
            />
            <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: 0, right: "25%" }}
            >
                Submit Now
            </button>
        </div>
    )
}

export default HeaderSearchComponent