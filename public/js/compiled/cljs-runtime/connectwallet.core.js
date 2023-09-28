goog.provide('connectwallet.core');
connectwallet.core.contractAddress = "0x61A153b3C68fE58738e8af19608D3418A8Ae05be";
connectwallet.core.contractABI = [({"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "owner", "type": "address"}),({"indexed": true, "internalType": "address", "name": "spender", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Approval", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_spender", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "approve", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [], "name": "mint", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transfer", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "from", "type": "address"}),({"indexed": true, "internalType": "address", "name": "to", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Transfer", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_from", "type": "address"}),({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transferFrom", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"}),({"internalType": "address", "name": "", "type": "address"})], "name": "allowance", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"})], "name": "balanceOf", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "decimals", "outputs": [({"internalType": "uint8", "name": "", "type": "uint8"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "name", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "symbol", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "totalSupply", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"})];
connectwallet.core.projectId = "1cbe0854852010c65d1bcb8d218fc928";
connectwallet.core.chains = [shadow.js.shim.module$wagmi$chains.arbitrum,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.polygon,shadow.js.shim.module$wagmi$chains.polygonMumbai];
connectwallet.core.publicClient = shadow.js.shim.module$wagmi.configureChains(connectwallet.core.chains,[shadow.js.shim.module$$web3modal$ethereum.w3mProvider(({"projectId": connectwallet.core.projectId}))]).publicClient;
connectwallet.core.wagmiConfig = shadow.js.shim.module$wagmi.createConfig(({"autoConnect": true, "connectors": shadow.js.shim.module$$web3modal$ethereum.w3mConnectors(({"projectId": connectwallet.core.projectId, "chains": connectwallet.core.chains})), "publicClient": connectwallet.core.publicClient}));
connectwallet.core.ethereumClient = (new shadow.js.shim.module$$web3modal$ethereum.EthereumClient(connectwallet.core.wagmiConfig,connectwallet.core.chains));
connectwallet.core.signMessagee = (function connectwallet$core$signMessagee(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11796__auto__ = (function (state_20391){
var state_val_20392 = (state_20391[(1)]);
if((state_val_20392 === (1))){
var inst_20371 = ({"message":"hello la team"});
var inst_20372 = shadow.js.shim.module$$wagmi$core.signMessage(inst_20371);
var inst_20373 = cljs.core.async.interop.p__GT_c(inst_20372);
var state_20391__$1 = state_20391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20391__$1,(2),inst_20373);
} else {
if((state_val_20392 === (2))){
var inst_20376 = (state_20391[(7)]);
var inst_20375 = (state_20391[(8)]);
var inst_20375__$1 = (state_20391[(2)]);
var inst_20376__$1 = (inst_20375__$1 instanceof cljs.core.ExceptionInfo);
var state_20391__$1 = (function (){var statearr_20393 = state_20391;
(statearr_20393[(7)] = inst_20376__$1);

(statearr_20393[(8)] = inst_20375__$1);

return statearr_20393;
})();
if(cljs.core.truth_(inst_20376__$1)){
var statearr_20394_20446 = state_20391__$1;
(statearr_20394_20446[(1)] = (3));

} else {
var statearr_20395_20447 = state_20391__$1;
(statearr_20395_20447[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (3))){
var inst_20375 = (state_20391[(8)]);
var inst_20378 = cljs.core.ex_data(inst_20375);
var inst_20379 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_20378);
var inst_20380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20379,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_20391__$1 = state_20391;
var statearr_20396_20448 = state_20391__$1;
(statearr_20396_20448[(2)] = inst_20380);

(statearr_20396_20448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (4))){
var inst_20376 = (state_20391[(7)]);
var state_20391__$1 = state_20391;
var statearr_20397_20449 = state_20391__$1;
(statearr_20397_20449[(2)] = inst_20376);

(statearr_20397_20449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (5))){
var inst_20383 = (state_20391[(2)]);
var state_20391__$1 = state_20391;
if(cljs.core.truth_(inst_20383)){
var statearr_20398_20450 = state_20391__$1;
(statearr_20398_20450[(1)] = (6));

} else {
var statearr_20399_20451 = state_20391__$1;
(statearr_20399_20451[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (6))){
var inst_20375 = (state_20391[(8)]);
var inst_20385 = (function(){throw inst_20375})();
var state_20391__$1 = state_20391;
var statearr_20400_20452 = state_20391__$1;
(statearr_20400_20452[(2)] = inst_20385);

(statearr_20400_20452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (7))){
var inst_20375 = (state_20391[(8)]);
var state_20391__$1 = state_20391;
var statearr_20401_20453 = state_20391__$1;
(statearr_20401_20453[(2)] = inst_20375);

(statearr_20401_20453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (8))){
var inst_20388 = (state_20391[(2)]);
var inst_20389 = console.log(inst_20388);
var state_20391__$1 = state_20391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20391__$1,inst_20389);
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
var connectwallet$core$signMessagee_$_state_machine__11797__auto__ = null;
var connectwallet$core$signMessagee_$_state_machine__11797__auto____0 = (function (){
var statearr_20402 = [null,null,null,null,null,null,null,null,null];
(statearr_20402[(0)] = connectwallet$core$signMessagee_$_state_machine__11797__auto__);

(statearr_20402[(1)] = (1));

return statearr_20402;
});
var connectwallet$core$signMessagee_$_state_machine__11797__auto____1 = (function (state_20391){
while(true){
var ret_value__11798__auto__ = (function (){try{while(true){
var result__11799__auto__ = switch__11796__auto__(state_20391);
if(cljs.core.keyword_identical_QMARK_(result__11799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11799__auto__;
}
break;
}
}catch (e20403){var ex__11800__auto__ = e20403;
var statearr_20404_20454 = state_20391;
(statearr_20404_20454[(2)] = ex__11800__auto__);


if(cljs.core.seq((state_20391[(4)]))){
var statearr_20405_20455 = state_20391;
(statearr_20405_20455[(1)] = cljs.core.first((state_20391[(4)])));

} else {
throw ex__11800__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20456 = state_20391;
state_20391 = G__20456;
continue;
} else {
return ret_value__11798__auto__;
}
break;
}
});
connectwallet$core$signMessagee_$_state_machine__11797__auto__ = function(state_20391){
switch(arguments.length){
case 0:
return connectwallet$core$signMessagee_$_state_machine__11797__auto____0.call(this);
case 1:
return connectwallet$core$signMessagee_$_state_machine__11797__auto____1.call(this,state_20391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$signMessagee_$_state_machine__11797__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$signMessagee_$_state_machine__11797__auto____0;
connectwallet$core$signMessagee_$_state_machine__11797__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$signMessagee_$_state_machine__11797__auto____1;
return connectwallet$core$signMessagee_$_state_machine__11797__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_20406 = f__11891__auto__();
(statearr_20406[(6)] = c__11890__auto__);

return statearr_20406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Getaccounts = (function connectwallet$core$Getaccounts(){
var account = shadow.js.shim.module$$wagmi$core.getAccount();
return console.log(account);
});
connectwallet.core.mint = (function connectwallet$core$mint(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11796__auto__ = (function (state_20430){
var state_val_20431 = (state_20430[(1)]);
if((state_val_20431 === (1))){
var inst_20409 = ({"address":connectwallet.core.contractAddress,"abi":connectwallet.core.contractABI,"functionName":"mint"});
var inst_20410 = shadow.js.shim.module$$wagmi$core.writeContract(inst_20409);
var inst_20411 = inst_20410.hash;
var inst_20412 = cljs.core.async.interop.p__GT_c(inst_20411);
var state_20430__$1 = state_20430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20430__$1,(2),inst_20412);
} else {
if((state_val_20431 === (2))){
var inst_20414 = (state_20430[(7)]);
var inst_20415 = (state_20430[(8)]);
var inst_20414__$1 = (state_20430[(2)]);
var inst_20415__$1 = (inst_20414__$1 instanceof cljs.core.ExceptionInfo);
var state_20430__$1 = (function (){var statearr_20432 = state_20430;
(statearr_20432[(7)] = inst_20414__$1);

(statearr_20432[(8)] = inst_20415__$1);

return statearr_20432;
})();
if(cljs.core.truth_(inst_20415__$1)){
var statearr_20433_20457 = state_20430__$1;
(statearr_20433_20457[(1)] = (3));

} else {
var statearr_20434_20458 = state_20430__$1;
(statearr_20434_20458[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (3))){
var inst_20414 = (state_20430[(7)]);
var inst_20417 = cljs.core.ex_data(inst_20414);
var inst_20418 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_20417);
var inst_20419 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20418,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_20430__$1 = state_20430;
var statearr_20435_20459 = state_20430__$1;
(statearr_20435_20459[(2)] = inst_20419);

(statearr_20435_20459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (4))){
var inst_20415 = (state_20430[(8)]);
var state_20430__$1 = state_20430;
var statearr_20436_20460 = state_20430__$1;
(statearr_20436_20460[(2)] = inst_20415);

(statearr_20436_20460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (5))){
var inst_20422 = (state_20430[(2)]);
var state_20430__$1 = state_20430;
if(cljs.core.truth_(inst_20422)){
var statearr_20437_20461 = state_20430__$1;
(statearr_20437_20461[(1)] = (6));

} else {
var statearr_20438_20462 = state_20430__$1;
(statearr_20438_20462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (6))){
var inst_20414 = (state_20430[(7)]);
var inst_20424 = (function(){throw inst_20414})();
var state_20430__$1 = state_20430;
var statearr_20439_20463 = state_20430__$1;
(statearr_20439_20463[(2)] = inst_20424);

(statearr_20439_20463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (7))){
var inst_20414 = (state_20430[(7)]);
var state_20430__$1 = state_20430;
var statearr_20440_20464 = state_20430__$1;
(statearr_20440_20464[(2)] = inst_20414);

(statearr_20440_20464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20431 === (8))){
var inst_20427 = (state_20430[(2)]);
var inst_20428 = console.log(inst_20427);
var state_20430__$1 = state_20430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20430__$1,inst_20428);
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
var connectwallet$core$mint_$_state_machine__11797__auto__ = null;
var connectwallet$core$mint_$_state_machine__11797__auto____0 = (function (){
var statearr_20441 = [null,null,null,null,null,null,null,null,null];
(statearr_20441[(0)] = connectwallet$core$mint_$_state_machine__11797__auto__);

(statearr_20441[(1)] = (1));

return statearr_20441;
});
var connectwallet$core$mint_$_state_machine__11797__auto____1 = (function (state_20430){
while(true){
var ret_value__11798__auto__ = (function (){try{while(true){
var result__11799__auto__ = switch__11796__auto__(state_20430);
if(cljs.core.keyword_identical_QMARK_(result__11799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11799__auto__;
}
break;
}
}catch (e20442){var ex__11800__auto__ = e20442;
var statearr_20443_20465 = state_20430;
(statearr_20443_20465[(2)] = ex__11800__auto__);


if(cljs.core.seq((state_20430[(4)]))){
var statearr_20444_20466 = state_20430;
(statearr_20444_20466[(1)] = cljs.core.first((state_20430[(4)])));

} else {
throw ex__11800__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20467 = state_20430;
state_20430 = G__20467;
continue;
} else {
return ret_value__11798__auto__;
}
break;
}
});
connectwallet$core$mint_$_state_machine__11797__auto__ = function(state_20430){
switch(arguments.length){
case 0:
return connectwallet$core$mint_$_state_machine__11797__auto____0.call(this);
case 1:
return connectwallet$core$mint_$_state_machine__11797__auto____1.call(this,state_20430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$mint_$_state_machine__11797__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$mint_$_state_machine__11797__auto____0;
connectwallet$core$mint_$_state_machine__11797__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$mint_$_state_machine__11797__auto____1;
return connectwallet$core$mint_$_state_machine__11797__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_20445 = f__11891__auto__();
(statearr_20445[(6)] = c__11890__auto__);

return statearr_20445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Application = (function connectwallet$core$Application(){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wallet Connect V2 Test "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$wagmi.WagmiConfig,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),connectwallet.core.wagmiConfig], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$web3modal$react.Web3Button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$web3modal$react.Web3Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projectId","projectId",-1551013096),connectwallet.core.projectId,new cljs.core.Keyword(null,"ethereumClient","ethereumClient",1840267504),connectwallet.core.ethereumClient], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.signMessagee], null),"Click to Sign Message"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.Getaccounts], null),"get Accounts"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.mint], null),"Mint some ALX tokens ;)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"To verify if the transaction passed successfuly go to your metamask and click on 'import tokens' then add the contract address : 0x61A153b3C68fE58738e8af19608D3418A8Ae05be."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Finally add the token's symbol : 'ALX' if not added automatically."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Your tokens should appear in your wallet !"], null)], null);
});
connectwallet.core.app = (function connectwallet$core$app(){
var container = document.getElementById("app");
var root = shadow.js.shim.module$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connectwallet.core.Application], null)));
});

//# sourceMappingURL=connectwallet.core.js.map
