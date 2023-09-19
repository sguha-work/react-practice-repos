import { Suspense } from "react"
import DogDataComponent from "../shared/dog-data.component"
import LoaderComponent from "../shared/loader.component"
function DogTypeListUsingUseSuspenseComponent() {

    return (
        <div className="DogTypeListUsingUseSuspenseComponent">
            <h3>List of dogs are here</h3>
            <Suspense fallback={<LoaderComponent></LoaderComponent>}>
                <DogDataComponent></DogDataComponent>
            </Suspense>
        </div>
    )
}

export default DogTypeListUsingUseSuspenseComponent