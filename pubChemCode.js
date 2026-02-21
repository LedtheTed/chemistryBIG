// pug-rest api converts name search to cid

async function nameToCID(name) {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/cids/JSON`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`CID lookup failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.IdentifierList || !data.IdentifierList.CID.length) {
        throw new Error("No CID found for this compound.");
    }

    return data.IdentifierList.CID[0]; // take first match
}


// pug-view api searches cid and pulls json data

async function getPugViewDataCompound(cid) {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/${cid}/JSON`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`PUG-View request failed: ${response.status}`);
    }

    return response.json();
}

async function searchCompound(compoundName) {
    try {
        console.log(`Searching CID for: ${compoundName}`);
        const cid = await nameToCID(compoundName);
        console.log(`Found CID: ${cid}`);

        console.log("Retrieving PUG-View data...");
        const data = await getPugViewDataCompound(cid);

        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function getPugViewDataElement(atomicNumber) {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/element/${atomicNumber}/JSON/`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`PUG-View request failed: ${response.status}`);
    }

    return response.json();
}       

async function searchElement(atomicNumber) {
    try {
        console.log("Retrieving PUG-View data...");
        const data = await getPugViewDataElement(atomicNumber);

        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
    }
}
// testing
// node ./pubChem.js
searchElement(17);

