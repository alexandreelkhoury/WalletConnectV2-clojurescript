goog.provide('magic_link.core');
magic_link.core.projectId = "1cbe0854852010c65d1bcb8d218fc928";
magic_link.core.chains = [shadow.js.shim.module$wagmi$chains.arbitrum,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.polygon];
magic_link.core.publicClient = shadow.js.shim.module$wagmi.configureChains(magic_link.core.chains,[shadow.js.shim.module$$web3modal$ethereum.w3mProvider(({"projectId": magic_link.core.projectId}))]).publicClient;
magic_link.core.wagmiConfig = shadow.js.shim.module$wagmi.createConfig(({"autoConnect": true, "connectors": shadow.js.shim.module$$web3modal$ethereum.w3mConnectors(({"projectId": magic_link.core.projectId, "chains": magic_link.core.chains})), "publicClient": magic_link.core.publicClient}));
magic_link.core.ethereumClient = (new shadow.js.shim.module$$web3modal$ethereum.EthereumClient(magic_link.core.wagmiConfig,magic_link.core.chains));
magic_link.core.printChains = (function magic_link$core$printChains(){
console.log(magic_link.core.chains);

console.log(magic_link.core.publicClient);

console.log(magic_link.core.ethereumClient);

console.log(magic_link.core.wagmiConfig);

return shadow.js.shim.module$$web3modal$react.useWeb3Modal().open;
});
magic_link.core.main = (function magic_link$core$main(){
var connectWallet_button = goog.dom.createDom("button",({"type": "button"}));
var textButton = goog.dom.createTextNode("Authenticate with WalletConnect");
connectWallet_button.addEventListener("click",(function (){
return magic_link.core.printChains();
}));

goog.dom.appendChild(connectWallet_button,textButton);

return goog.dom.appendChild(goog.dom.getElement("app"),connectWallet_button);
});

//# sourceMappingURL=magic_link.core.js.map
