import React from 'react'
import User from '../../interfaces/user.interface'

export default function UserDetailsComponent(props: any) {
    const userDetails: User = props.userDetails;
    return (
        <div>
            <h2>UserDetails.component</h2>
            {userDetails && (
                <div>
                    <h3>{userDetails.name}</h3>
                    <label>UserId: {userDetails.id}</label>
                    <p>Email: {userDetails.email}</p>
                    <p>Company: {userDetails.company.name}</p>
                </div>
            )}

        </div>
    )
}
