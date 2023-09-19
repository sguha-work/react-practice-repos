import { use } from 'react';
function DogDataComponent() {
    let dogTypes = {
        message: []
    };
    dogTypes = use(fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()))
    return (
        <ul>
            {
                Object.keys(dogTypes.message).map((type) => {
                    return (
                        <li key={type}>{type}
                            {
                                dogTypes.message[type].length > 0 && (
                                    <ul>
                                        {
                                            dogTypes.message[type].map((subType) => {
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
    )
}

export default DogDataComponent