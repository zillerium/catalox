import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';

import {Button} from 'react-bootstrap';
import AddAsset from './AddAsset';
import {IpfsContext} from './IpfsContext';


function AddAssetCall() {

      const {ipfsHash, setIpfsHash, ipfsImageHash, setIpfsImageHash } = useContext(IpfsContext);

const showAssetButton = ipfsHash != '0x';

	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {ipfsHash} </Button>
            </div> }

return ( 
      <>
	{showAssetButton} 
	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {ipfsHash} </Button>
            </div> }

        </>
    )

}

export default AddAssetCall;
