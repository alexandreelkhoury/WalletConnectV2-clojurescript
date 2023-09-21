goog.provide('connectwallet.core');
connectwallet.core.projectId = "1cbe0854852010c65d1bcb8d218fc928";
connectwallet.core.chains = [shadow.js.shim.module$wagmi$chains.arbitrum,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.polygon];
connectwallet.core.publicClient = shadow.js.shim.module$wagmi.configureChains(connectwallet.core.chains,[shadow.js.shim.module$$web3modal$ethereum.w3mProvider(({"projectId": connectwallet.core.projectId}))]).publicClient;
connectwallet.core.wagmiConfig = shadow.js.shim.module$wagmi.createConfig(({"autoConnect": true, "connectors": shadow.js.shim.module$$web3modal$ethereum.w3mConnectors(({"projectId": connectwallet.core.projectId, "chains": connectwallet.core.chains})), "publicClient": connectwallet.core.publicClient}));
connectwallet.core.ethereumClient = (new shadow.js.shim.module$$web3modal$ethereum.EthereumClient(connectwallet.core.wagmiConfig,connectwallet.core.chains));
connectwallet.core.Application = (function connectwallet$core$Application(){
console.log("Hello world!");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wallet Connect V2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"my web3 component"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$wagmi.WagmiConfig,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),connectwallet.core.wagmiConfig], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$web3modal$react.Web3Button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$web3modal$react.Web3Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projectId","projectId",-1551013096),connectwallet.core.projectId,new cljs.core.Keyword(null,"ethereumClient","ethereumClient",1840267504),connectwallet.core.ethereumClient], null)], null)], null)], null)], null);
});
connectwallet.core.app = (function connectwallet$core$app(){
var container = document.getElementById("app");
var root = shadow.js.shim.module$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connectwallet.core.Application], null)));
});

//# sourceMappingURL=connectwallet.core.js.map
