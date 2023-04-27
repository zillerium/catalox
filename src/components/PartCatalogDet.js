import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartCatalogDet() {
  const {
   manName, setManName,
    partNumber, setPartNumber,
    manPartNumber, setManPartNumber,
    partOption, setPartOption,
    partDesc, setPartDesc,
    partShortDesc, setPartShortDesc,
  } = useContext(ContractContext);
  
  
return (
  <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
    <h3 style={{ textAlign: "center" }}>Part Catalog Details</h3>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", marginBottom: "10px" }}>
      <input type="text" placeholder="Manufacturer Name" value={manName}
        onChange={(e) => setManName(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Manufacturer Name'} />
      <input type="text" placeholder="Part Number" value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Number'} />
      <input type="text" placeholder="Manufacturer Part Number" value={manPartNumber}
        onChange={(e) => setManPartNumber(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Manufacturer Part Number'} />
      <input type="text" placeholder="Part Option" value={partOption}
        onChange={(e) => setPartOption(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Option'} />
      <input type="text" placeholder="Part Description" value={partDesc}
        onChange={(e) => setPartDesc(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Description'} />
      <input type="text" placeholder="Part Short Description" value={partShortDesc}
        onChange={(e) => setPartShortDesc(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Short Description'} />
    </div>
  </div>
);

}

export default PartCatalogDet;
