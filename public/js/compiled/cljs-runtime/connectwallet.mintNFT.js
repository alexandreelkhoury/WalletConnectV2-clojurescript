goog.provide('connectwallet.mintNFT');
connectwallet.mintNFT.config = shadow.js.shim.module$wagmi.usePrepareContractWrite(({"address": "0x61A153b3C68fE58738e8af19608D3418A8Ae05be", "abi": [({"name": "mint", "type": "function", "stateMutability": "nonpayable", "inputs": [], "outputs": []})], "functionName": "mint"})).config;
connectwallet.mintNFT.MintNFT = (function connectwallet$mintNFT$MintNFT(){
var write = shadow.js.shim.module$wagmi.useContractWrite(connectwallet.mintNFT.config).write;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),write], null),"Mint some ALX tokens ;)"], null)], null);
});

//# sourceMappingURL=connectwallet.mintNFT.js.map
