import gql from 'graphql-tag';
import React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { useState } from 'react';
import './LocationTable.component.css';
const GEOLOCATION_INSERTED_FOR = gql`
      subscription GeoLocationInsertedForIndividual($name: String!){
        geoLocationInsertedForIndividual(name: $name) {
            _id
            createdAt
            latitude
            longitude
            name
        }
      }
`;

const LocationTable = (props) => {
  const [locationData, setLocationData] = useState([{ createdAt: null }]);
  const { data, error, loading } = useSubscription(GEOLOCATION_INSERTED_FOR, {
    variables: {
      name: props.userName
    }
  });
  if (data && data.geoLocationInsertedForIndividual && data.geoLocationInsertedForIndividual.createdAt !== locationData.at(-1).createdAt) {
    let locationList = [...locationData];
    if (locationList.length === 1 && locationList[0].createdAt == null) {
      locationList = [];
    }
    locationList.push(data.geoLocationInsertedForIndividual);
    console.log(locationList);
    setLocationData(locationList);
  }
  if (loading) {
    return (<div>Loading...</div>);
  };

  if (error) {
    return (<div>Error! {error.message}</div>);
  };

  return (
    <div className="notification">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {
            locationData.map((data, index) => (
              <tr key={index}>
                <td>{new Date(locationData[locationData.length-1-index].createdAt).toLocaleString()}</td>
                <td>{locationData[locationData.length-1-index].latitude}</td>
                <td>{locationData[locationData.length-1-index].longitude}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default LocationTable;
