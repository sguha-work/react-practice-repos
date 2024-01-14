import { useState, useEffect } from 'react';
import LoaderComponent from '../shared/loader.component';
function DogTypeListSimpleAjaxComponent() {
    const [dogTypes, setDogTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        window.setTimeout(async () => {
            const dogTypesDataStream = await fetch('https://dog.ceo/api/breeds/list/all');
            const dogTypes = await dogTypesDataStream.json();
            setIsLoading(false);
            setDogTypes(dogTypes['message']);
        },0);
    }, []);
    return (
        <div className="DogTypeListSimpleAjaxComponent">
            <h3>List of dogs are here</h3>
            {isLoading && (<LoaderComponent></LoaderComponent>)}
            {!isLoading && (
                <ul>
                    {
                        Object.keys(dogTypes).map((type) => {
                            return (
                                <li key={type}>{type}
                                    {
                                        dogTypes[type].length > 0 && (
                                            <ul>
                                                {
                                                    dogTypes[type].map((subType) => {
                                                        return (
                                                            <li key={subType}>{subType}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            )}

        </div>
    )
}

export default DogTypeListSimpleAjaxComponent