import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';


import AddAsset from './AddAsset'
import AssetOwner from './AssetOwner';
import AssetCheckBoxes from './AssetCheckBoxes';
import AssetDetails from './AssetDetails';
import AssetLinks from './AssetLinks';
import AssetRates from './AssetRates';
import AssetRisk from './AssetRisk';
import AddAssetCall from './AddAssetCall';
import AddPdf from './AddPdf';
import LoadIpfs from './LoadIpfs';
import LoadImageIpfs from './LoadImageIpfs';
import PartCatalogDet from './PartCatalogDet';
import PartCatalogImage from './PartCatalogImage';
import PartCatalogPrice from './PartCatalogPrice';
import PartCatalogSeller from './PartCatalogSeller';
import PartCatalogDel from './PartCatalogDel';

import {Button} from 'react-bootstrap';
import {IpfsContext} from './IpfsContext';

function AddAssetMgr() {
  
const {
	sellerAddress, password, setCorrect, setPassword, correct,
           manName,  setManName, 
		   partNumber, setPartNumber, 
		   manPartNumber, setManPartNumber,
		   partDesc, setPartDesc,
		   partOption, setPartOption,
		   partShortDesc, setPartShortDesc,
		   partImgUrl, setPartImgUrl,
		   partTechImgUrl, setPartTechImgUrl,
		   partSalePrice, setPartSalePrice,
		   partManPrice, setPartManPrice, 
		   currency, setCurrency,
		   merchantId, setMerchantId,
		   merchantName, setMerchantName,
		   deliveryCharge, setDeliveryCharge
                } = useContext(ContractContext)

console.log("seller address = llllllllllllllllllllllll", sellerAddress);

const [ipfsHash,setIpfsHash] = useState("0x");
const [ipfsImageHash,setIpfsImageHash] = useState("0x");
const [search,setSearch] = useState("");
	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}

		);
const checkPassword = () => {
 if (password == "tiger12") setCorrect(true); else setCorrect(false);
}

const PostData = async  (part) => {
	console.log("part");
	console.log(part);
	const response = await axios.post("https://peacioapi.com:3000/addPartAPI", part);
	return response;
}


const {mutate,isSuccess,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
//return ( data ? <img src={data.data.url}/> : <p></p>);
}
const IpfsImageDisplay = () => {
return ( data ? <img src='http://ipfs.io/ipfs/QmSj5Yd6p377rYJWSoGnq29wehFFKkLZGS7PynxKzaLQSB'/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);
	//
console.log("process env ", process.env.REACT_APP_NFT_CONTRACT_ADDR);

    return (
        <>
    <header >
	  <h1>Add Product to DB</h1>
	    <PartCatalogDet />
	    <PartCatalogImage />
	    <PartCatalogPrice />
	    <PartCatalogSeller />
	    <PartCatalogDel />

<IpfsContext.Provider value={{ipfsHash, setIpfsHash, ipfsImageHash, setIpfsImageHash}}>

	    <AddPdf />
	    <LoadImageIpfs />
	    <LoadIpfs />
	  <div>
           <Button  onClick={()=>mutate({
		   manName:manName, 
		   partNumber: partNumber,
		   manPartNumber: manPartNumber,
		   partDesc: partDesc,
		   partOption: partOption,
		   partShortDesc: partShortDesc,
		   partImgUrl: partImgUrl,
		   partTechImgUrl: partTechImgUrl,
		   partSalePrice: partSalePrice,
		   partManPrice: partManPrice,
		   currency: currency,
		   merchantId: merchantId,
		   merchantName: merchantName,
		   deliveryCharge: deliveryCharge }

	   )}>Add Part</Button>
	  </div>
<AddAssetCall />
	    </IpfsContext.Provider>
      </header>

        </>
    )

}

export default AddAssetMgr;
