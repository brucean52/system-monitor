import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SYSTEM_INFORMATION = gql`
  {
    systemData {
      manufacturer
      model
      # version
      serial
      uuid
      sku
    } 
  }
`;

const SystemCard = () => {
  const { loading, error, data } = useQuery(SYSTEM_INFORMATION);

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  const title = data && data.systemData.manufacturer + ' ' + data.systemData.model;
  return (
    <div>
      <h2>{title}</h2>
      <p>SKU: {data.systemData.sku}</p>
      {/* <p>Serial: {data.systemData.serial}</p>
      <p>UUID: {data.systemData.uuid}</p> */}
    </div>
  );
}

export default SystemCard;
