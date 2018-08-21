const web3Utils = require("web3-utils");
import { getWeb3 } from './web3Provider';


/**
 * Check is address correct
 * @param address
 */
export const isAddress = address => web3Utils.isAddress(address);

/**
 * Return the eth network id for the current web3Instance
 * @returns integer
 */
export const getEtherNetworkId = () => getWeb3().version.network;
