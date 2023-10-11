goog.provide('connectwallet.connectbutton');
connectwallet.connectbutton.projectId = "1cbe0854852010c65d1bcb8d218fc928";
connectwallet.connectbutton.chains = [shadow.js.shim.module$wagmi$chains.polygonMumbai,shadow.js.shim.module$wagmi$chains.polygon,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.arbitrum];
connectwallet.connectbutton.metadata = ({"name": "Web3Modal", "description": "METAV.RS", "url": "https://metav.rs", "icons": ["https://avatars.githubusercontent.com/u/37784886"]});
connectwallet.connectbutton.wagmiConfig = shadow.js.shim.module$$web3modal$wagmi$react.defaultWagmiConfig(({"chains": connectwallet.connectbutton.chains, "projectId": connectwallet.connectbutton.projectId, "metadata": connectwallet.connectbutton.metadata}));
shadow.js.shim.module$$web3modal$wagmi$react.createWeb3Modal(({"wagmiConfig": connectwallet.connectbutton.wagmiConfig, "projectId": connectwallet.connectbutton.projectId, "chains": connectwallet.connectbutton.chains}));
connectwallet.connectbutton.open = shadow.js.shim.module$$web3modal$wagmi$react.useWeb3Modal().open;
connectwallet.connectbutton.network = ({"view": "Networks"});
connectwallet.connectbutton.connect_button = (function connectwallet$connectbutton$connect_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (connectwallet.connectbutton.open.cljs$core$IFn$_invoke$arity$0 ? connectwallet.connectbutton.open.cljs$core$IFn$_invoke$arity$0() : connectwallet.connectbutton.open.call(null));
})], null),"Connect Wallet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (connectwallet.connectbutton.open.cljs$core$IFn$_invoke$arity$1 ? connectwallet.connectbutton.open.cljs$core$IFn$_invoke$arity$1(connectwallet.connectbutton.network) : connectwallet.connectbutton.open.call(null,connectwallet.connectbutton.network));
})], null),"Connect Wallet 2"], null)], null);
});

//# sourceMappingURL=connectwallet.connectbutton.js.map
