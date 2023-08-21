// ethConfig.js

import { ethers } from 'ethers';
import abi from "../rugtoken.json"

let provider = null;
let signer = null;
let contract = null;

if (typeof window !== 'undefined' && window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  const contractAddress = '0x530494a64f2dBDCf80382ac18B656c0A0D1B7095';
  contract = new ethers.Contract(contractAddress, abi, signer);
}

export { provider, contract };
