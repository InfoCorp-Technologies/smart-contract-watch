export const initCustomRPCs = (web3) => {
  if (!web3.eth.net.isListening()) throw new Error('Web3 Provider is not set');

  const customRpcCall = web3.extend({
    property: 'eth',
    methods: [{
        name: 'getLogs',
        call: 'eth_getLogs',
        params: 1,
        inputFormatter: [filter => filter],
        outputFormatter: data => data
    }]
  });

  return customRpcCall;
};
