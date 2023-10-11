goog.provide('connectwallet.core');
connectwallet.core.contractAddress = "0x61A153b3C68fE58738e8af19608D3418A8Ae05be";
connectwallet.core.contractABI = [({"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "owner", "type": "address"}),({"indexed": true, "internalType": "address", "name": "spender", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Approval", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_spender", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "approve", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [], "name": "mint", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transfer", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "from", "type": "address"}),({"indexed": true, "internalType": "address", "name": "to", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Transfer", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_from", "type": "address"}),({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transferFrom", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"}),({"internalType": "address", "name": "", "type": "address"})], "name": "allowance", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"})], "name": "balanceOf", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "decimals", "outputs": [({"internalType": "uint8", "name": "", "type": "uint8"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "name", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "symbol", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "totalSupply", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"})];
connectwallet.core.projectId = "1cbe0854852010c65d1bcb8d218fc928";
connectwallet.core.chains = [shadow.js.shim.module$wagmi$chains.arbitrum,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.polygon,shadow.js.shim.module$wagmi$chains.polygonMumbai];
connectwallet.core.metadata = ({"name": "Web3Modal", "description": "METAV.RS", "url": "https://metav.rs", "icons": ["https://avatars.githubusercontent.com/u/37784886"]});
connectwallet.core.wagmiConfig = shadow.js.shim.module$$web3modal$wagmi$react.defaultWagmiConfig(({"chains": connectwallet.core.chains, "projectId": connectwallet.core.projectId, "metadata": connectwallet.core.metadata}));
shadow.js.shim.module$$web3modal$wagmi$react.createWeb3Modal(({"wagmiConfig": connectwallet.core.wagmiConfig, "projectId": connectwallet.core.projectId, "chains": connectwallet.core.chains}));
connectwallet.core.network = ({"view": "Networks"});
connectwallet.core.signMessagee = (function connectwallet$core$signMessagee(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11843__auto__ = (function (state_12260){
var state_val_12261 = (state_12260[(1)]);
if((state_val_12261 === (1))){
var inst_12240 = ({"message":"hello la team"});
var inst_12241 = shadow.js.shim.module$$wagmi$core.signMessage(inst_12240);
var inst_12242 = cljs.core.async.interop.p__GT_c(inst_12241);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12260__$1,(2),inst_12242);
} else {
if((state_val_12261 === (2))){
var inst_12245 = (state_12260[(7)]);
var inst_12244 = (state_12260[(8)]);
var inst_12244__$1 = (state_12260[(2)]);
var inst_12245__$1 = (inst_12244__$1 instanceof cljs.core.ExceptionInfo);
var state_12260__$1 = (function (){var statearr_12262 = state_12260;
(statearr_12262[(7)] = inst_12245__$1);

(statearr_12262[(8)] = inst_12244__$1);

return statearr_12262;
})();
if(cljs.core.truth_(inst_12245__$1)){
var statearr_12263_12315 = state_12260__$1;
(statearr_12263_12315[(1)] = (3));

} else {
var statearr_12264_12316 = state_12260__$1;
(statearr_12264_12316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (3))){
var inst_12244 = (state_12260[(8)]);
var inst_12247 = cljs.core.ex_data(inst_12244);
var inst_12248 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_12247);
var inst_12249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12248,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_12260__$1 = state_12260;
var statearr_12265_12317 = state_12260__$1;
(statearr_12265_12317[(2)] = inst_12249);

(statearr_12265_12317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (4))){
var inst_12245 = (state_12260[(7)]);
var state_12260__$1 = state_12260;
var statearr_12266_12318 = state_12260__$1;
(statearr_12266_12318[(2)] = inst_12245);

(statearr_12266_12318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (5))){
var inst_12252 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
if(cljs.core.truth_(inst_12252)){
var statearr_12267_12319 = state_12260__$1;
(statearr_12267_12319[(1)] = (6));

} else {
var statearr_12268_12320 = state_12260__$1;
(statearr_12268_12320[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (6))){
var inst_12244 = (state_12260[(8)]);
var inst_12254 = (function(){throw inst_12244})();
var state_12260__$1 = state_12260;
var statearr_12269_12321 = state_12260__$1;
(statearr_12269_12321[(2)] = inst_12254);

(statearr_12269_12321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (7))){
var inst_12244 = (state_12260[(8)]);
var state_12260__$1 = state_12260;
var statearr_12270_12322 = state_12260__$1;
(statearr_12270_12322[(2)] = inst_12244);

(statearr_12270_12322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (8))){
var inst_12257 = (state_12260[(2)]);
var inst_12258 = console.log("message signed !");
var state_12260__$1 = (function (){var statearr_12271 = state_12260;
(statearr_12271[(9)] = inst_12257);

return statearr_12271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12260__$1,inst_12258);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var connectwallet$core$signMessagee_$_state_machine__11844__auto__ = null;
var connectwallet$core$signMessagee_$_state_machine__11844__auto____0 = (function (){
var statearr_12272 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12272[(0)] = connectwallet$core$signMessagee_$_state_machine__11844__auto__);

(statearr_12272[(1)] = (1));

return statearr_12272;
});
var connectwallet$core$signMessagee_$_state_machine__11844__auto____1 = (function (state_12260){
while(true){
var ret_value__11845__auto__ = (function (){try{while(true){
var result__11846__auto__ = switch__11843__auto__(state_12260);
if(cljs.core.keyword_identical_QMARK_(result__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11846__auto__;
}
break;
}
}catch (e12273){var ex__11847__auto__ = e12273;
var statearr_12274_12323 = state_12260;
(statearr_12274_12323[(2)] = ex__11847__auto__);


if(cljs.core.seq((state_12260[(4)]))){
var statearr_12275_12324 = state_12260;
(statearr_12275_12324[(1)] = cljs.core.first((state_12260[(4)])));

} else {
throw ex__11847__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12325 = state_12260;
state_12260 = G__12325;
continue;
} else {
return ret_value__11845__auto__;
}
break;
}
});
connectwallet$core$signMessagee_$_state_machine__11844__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return connectwallet$core$signMessagee_$_state_machine__11844__auto____0.call(this);
case 1:
return connectwallet$core$signMessagee_$_state_machine__11844__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$signMessagee_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$signMessagee_$_state_machine__11844__auto____0;
connectwallet$core$signMessagee_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$signMessagee_$_state_machine__11844__auto____1;
return connectwallet$core$signMessagee_$_state_machine__11844__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_12276 = f__11891__auto__();
(statearr_12276[(6)] = c__11890__auto__);

return statearr_12276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Getaccounts = (function connectwallet$core$Getaccounts(){
var account = shadow.js.shim.module$$wagmi$core.getAccount();
return console.log(account);
});
connectwallet.core.open = (shadow.js.shim.module$$web3modal$wagmi$react.useWeb3Modal()["open"]);
connectwallet.core.mint = (function connectwallet$core$mint(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11843__auto__ = (function (state_12299){
var state_val_12300 = (state_12299[(1)]);
if((state_val_12300 === (1))){
var inst_12279 = ({"address":connectwallet.core.contractAddress,"abi":connectwallet.core.contractABI,"functionName":"mint"});
var inst_12280 = shadow.js.shim.module$$wagmi$core.writeContract(inst_12279);
var inst_12281 = cljs.core.async.interop.p__GT_c(inst_12280);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12299__$1,(2),inst_12281);
} else {
if((state_val_12300 === (2))){
var inst_12283 = (state_12299[(7)]);
var inst_12284 = (state_12299[(8)]);
var inst_12283__$1 = (state_12299[(2)]);
var inst_12284__$1 = (inst_12283__$1 instanceof cljs.core.ExceptionInfo);
var state_12299__$1 = (function (){var statearr_12301 = state_12299;
(statearr_12301[(7)] = inst_12283__$1);

(statearr_12301[(8)] = inst_12284__$1);

return statearr_12301;
})();
if(cljs.core.truth_(inst_12284__$1)){
var statearr_12302_12326 = state_12299__$1;
(statearr_12302_12326[(1)] = (3));

} else {
var statearr_12303_12327 = state_12299__$1;
(statearr_12303_12327[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (3))){
var inst_12283 = (state_12299[(7)]);
var inst_12286 = cljs.core.ex_data(inst_12283);
var inst_12287 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_12286);
var inst_12288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12287,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_12299__$1 = state_12299;
var statearr_12304_12328 = state_12299__$1;
(statearr_12304_12328[(2)] = inst_12288);

(statearr_12304_12328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (4))){
var inst_12284 = (state_12299[(8)]);
var state_12299__$1 = state_12299;
var statearr_12305_12329 = state_12299__$1;
(statearr_12305_12329[(2)] = inst_12284);

(statearr_12305_12329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (5))){
var inst_12291 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
if(cljs.core.truth_(inst_12291)){
var statearr_12306_12330 = state_12299__$1;
(statearr_12306_12330[(1)] = (6));

} else {
var statearr_12307_12331 = state_12299__$1;
(statearr_12307_12331[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (6))){
var inst_12283 = (state_12299[(7)]);
var inst_12293 = (function(){throw inst_12283})();
var state_12299__$1 = state_12299;
var statearr_12308_12332 = state_12299__$1;
(statearr_12308_12332[(2)] = inst_12293);

(statearr_12308_12332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (7))){
var inst_12283 = (state_12299[(7)]);
var state_12299__$1 = state_12299;
var statearr_12309_12333 = state_12299__$1;
(statearr_12309_12333[(2)] = inst_12283);

(statearr_12309_12333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (8))){
var inst_12296 = (state_12299[(2)]);
var inst_12297 = console.log(inst_12296);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12299__$1,inst_12297);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var connectwallet$core$mint_$_state_machine__11844__auto__ = null;
var connectwallet$core$mint_$_state_machine__11844__auto____0 = (function (){
var statearr_12310 = [null,null,null,null,null,null,null,null,null];
(statearr_12310[(0)] = connectwallet$core$mint_$_state_machine__11844__auto__);

(statearr_12310[(1)] = (1));

return statearr_12310;
});
var connectwallet$core$mint_$_state_machine__11844__auto____1 = (function (state_12299){
while(true){
var ret_value__11845__auto__ = (function (){try{while(true){
var result__11846__auto__ = switch__11843__auto__(state_12299);
if(cljs.core.keyword_identical_QMARK_(result__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11846__auto__;
}
break;
}
}catch (e12311){var ex__11847__auto__ = e12311;
var statearr_12312_12334 = state_12299;
(statearr_12312_12334[(2)] = ex__11847__auto__);


if(cljs.core.seq((state_12299[(4)]))){
var statearr_12313_12335 = state_12299;
(statearr_12313_12335[(1)] = cljs.core.first((state_12299[(4)])));

} else {
throw ex__11847__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12336 = state_12299;
state_12299 = G__12336;
continue;
} else {
return ret_value__11845__auto__;
}
break;
}
});
connectwallet$core$mint_$_state_machine__11844__auto__ = function(state_12299){
switch(arguments.length){
case 0:
return connectwallet$core$mint_$_state_machine__11844__auto____0.call(this);
case 1:
return connectwallet$core$mint_$_state_machine__11844__auto____1.call(this,state_12299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$mint_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$mint_$_state_machine__11844__auto____0;
connectwallet$core$mint_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$mint_$_state_machine__11844__auto____1;
return connectwallet$core$mint_$_state_machine__11844__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_12314 = f__11891__auto__();
(statearr_12314[(6)] = c__11890__auto__);

return statearr_12314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Application = (function connectwallet$core$Application(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wallet Connect V3 Test !!!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"My buttons"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$wagmi.WagmiConfig,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),connectwallet.core.wagmiConfig], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (connectwallet.core.open.cljs$core$IFn$_invoke$arity$0 ? connectwallet.core.open.cljs$core$IFn$_invoke$arity$0() : connectwallet.core.open.call(null));
})], null),"Connect Wallet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (connectwallet.core.open.cljs$core$IFn$_invoke$arity$1 ? connectwallet.core.open.cljs$core$IFn$_invoke$arity$1(connectwallet.core.network) : connectwallet.core.open.call(null,connectwallet.core.network));
})], null),"Change network"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"WalletConnect's button"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$wagmi.WagmiConfig,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),connectwallet.core.wagmiConfig], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w3m-button","w3m-button",823133767)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.signMessagee], null),"Click to Sign Message"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.Getaccounts], null),"get accounts"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.mint], null),"Mint some ALX tokens ;)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Open the console to see the results"], null)], null);
});
connectwallet.core.app = (function connectwallet$core$app(){
var container = document.getElementById("app");
var root = shadow.js.shim.module$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connectwallet.core.Application], null)));
});

//# sourceMappingURL=connectwallet.core.js.map
