import { useEffect, useState, useContext } from 'react';
 
import { ContractContext } from './ContractContext';
 
 
import {  Button, ListGroup, Table } from 'react-bootstrap';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';

function AssetDetailsTable(props) {
  const { selAsset, assetDetails } = props;

  return (
    <Table bordered striped>
      <tbody>
        <tr>
          <td><strong>Bytes32:</strong></td>
          <td>{selAsset?.slice(0,4)}</td>
        </tr>
        <tr>
          <td><strong>Addr:</strong></td>
          <td><a target="_blank" href={`https://ipfs.io/ipfs/${assetDetails?.ipfsAddr}`}>{assetDetails?.ipfsAddr}</a></td>
        </tr>
        <tr>
          <td><strong>Nft:</strong></td>
          <td>{assetDetails?.assetNft?.toString()}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AssetDetailsTable;

