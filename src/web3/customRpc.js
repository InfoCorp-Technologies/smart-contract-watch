export const initCustomRPCs = (web3) => {
  if (!web3.eth.net.isListening()) throw new Error('Web3 Provider is not set');

  const customRpcCall = web3.extend({
    methods: [{
        name: 'getLogs',
        call: 'eth_getLogs',
        params: 1,
        inputFormatter: [filter => filter],
        outputFormatter: data => data
    }]
  });

  customRpcCall.setRequestManager(web3.eth._requestManager);
  customRpcCall.attachToObject(customRpcCall);
  return customRpcCall;
};
