goog.provide('connectwallet.core');
connectwallet.core.contractAddress = "0x61A153b3C68fE58738e8af19608D3418A8Ae05be";
connectwallet.core.contractABI = [({"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "owner", "type": "address"}),({"indexed": true, "internalType": "address", "name": "spender", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Approval", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_spender", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "approve", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [], "name": "mint", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transfer", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"anonymous": false, "inputs": [({"indexed": true, "internalType": "address", "name": "from", "type": "address"}),({"indexed": true, "internalType": "address", "name": "to", "type": "address"}),({"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"})], "name": "Transfer", "type": "event"}),({"inputs": [({"internalType": "address", "name": "_from", "type": "address"}),({"internalType": "address", "name": "_to", "type": "address"}),({"internalType": "uint256", "name": "_value", "type": "uint256"})], "name": "transferFrom", "outputs": [({"internalType": "bool", "name": "", "type": "bool"})], "stateMutability": "nonpayable", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"}),({"internalType": "address", "name": "", "type": "address"})], "name": "allowance", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [({"internalType": "address", "name": "", "type": "address"})], "name": "balanceOf", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "decimals", "outputs": [({"internalType": "uint8", "name": "", "type": "uint8"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "name", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "symbol", "outputs": [({"internalType": "string", "name": "", "type": "string"})], "stateMutability": "view", "type": "function"}),({"inputs": [], "name": "totalSupply", "outputs": [({"internalType": "uint256", "name": "", "type": "uint256"})], "stateMutability": "view", "type": "function"})];
connectwallet.core.projectId = "1cbe0854852010c65d1bcb8d218fc928";
connectwallet.core.chains = [shadow.js.shim.module$wagmi$chains.arbitrum,shadow.js.shim.module$wagmi$chains.mainnet,shadow.js.shim.module$wagmi$chains.polygon,shadow.js.shim.module$wagmi$chains.polygonMumbai];
connectwallet.core.metadata = ({"name": "Web3Modal", "description": "METAV.RS", "url": "https://metav.rs", "icons": ["https://avatars.githubusercontent.com/u/37784886"]});
connectwallet.core.wagmiConfig = shadow.js.shim.module$$web3modal$wagmi$react.defaultWagmiConfig(({"chains": connectwallet.core.chains, "projectId": connectwallet.core.projectId, "metadata": connectwallet.core.metadata}));
connectwallet.core.signMessagee = (function connectwallet$core$signMessagee(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11843__auto__ = (function (state_13448){
var state_val_13449 = (state_13448[(1)]);
if((state_val_13449 === (1))){
var inst_13428 = ({"message":"hello la team"});
var inst_13429 = shadow.js.shim.module$$wagmi$core.signMessage(inst_13428);
var inst_13430 = cljs.core.async.interop.p__GT_c(inst_13429);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13448__$1,(2),inst_13430);
} else {
if((state_val_13449 === (2))){
var inst_13432 = (state_13448[(7)]);
var inst_13433 = (state_13448[(8)]);
var inst_13432__$1 = (state_13448[(2)]);
var inst_13433__$1 = (inst_13432__$1 instanceof cljs.core.ExceptionInfo);
var state_13448__$1 = (function (){var statearr_13450 = state_13448;
(statearr_13450[(7)] = inst_13432__$1);

(statearr_13450[(8)] = inst_13433__$1);

return statearr_13450;
})();
if(cljs.core.truth_(inst_13433__$1)){
var statearr_13451_13503 = state_13448__$1;
(statearr_13451_13503[(1)] = (3));

} else {
var statearr_13452_13504 = state_13448__$1;
(statearr_13452_13504[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (3))){
var inst_13432 = (state_13448[(7)]);
var inst_13435 = cljs.core.ex_data(inst_13432);
var inst_13436 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_13435);
var inst_13437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13436,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_13448__$1 = state_13448;
var statearr_13453_13505 = state_13448__$1;
(statearr_13453_13505[(2)] = inst_13437);

(statearr_13453_13505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (4))){
var inst_13433 = (state_13448[(8)]);
var state_13448__$1 = state_13448;
var statearr_13454_13506 = state_13448__$1;
(statearr_13454_13506[(2)] = inst_13433);

(statearr_13454_13506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (5))){
var inst_13440 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
if(cljs.core.truth_(inst_13440)){
var statearr_13455_13507 = state_13448__$1;
(statearr_13455_13507[(1)] = (6));

} else {
var statearr_13456_13508 = state_13448__$1;
(statearr_13456_13508[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (6))){
var inst_13432 = (state_13448[(7)]);
var inst_13442 = (function(){throw inst_13432})();
var state_13448__$1 = state_13448;
var statearr_13457_13509 = state_13448__$1;
(statearr_13457_13509[(2)] = inst_13442);

(statearr_13457_13509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (7))){
var inst_13432 = (state_13448[(7)]);
var state_13448__$1 = state_13448;
var statearr_13458_13510 = state_13448__$1;
(statearr_13458_13510[(2)] = inst_13432);

(statearr_13458_13510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (8))){
var inst_13445 = (state_13448[(2)]);
var inst_13446 = console.log(inst_13445);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13448__$1,inst_13446);
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
var statearr_13459 = [null,null,null,null,null,null,null,null,null];
(statearr_13459[(0)] = connectwallet$core$signMessagee_$_state_machine__11844__auto__);

(statearr_13459[(1)] = (1));

return statearr_13459;
});
var connectwallet$core$signMessagee_$_state_machine__11844__auto____1 = (function (state_13448){
while(true){
var ret_value__11845__auto__ = (function (){try{while(true){
var result__11846__auto__ = switch__11843__auto__(state_13448);
if(cljs.core.keyword_identical_QMARK_(result__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11846__auto__;
}
break;
}
}catch (e13460){var ex__11847__auto__ = e13460;
var statearr_13461_13511 = state_13448;
(statearr_13461_13511[(2)] = ex__11847__auto__);


if(cljs.core.seq((state_13448[(4)]))){
var statearr_13462_13512 = state_13448;
(statearr_13462_13512[(1)] = cljs.core.first((state_13448[(4)])));

} else {
throw ex__11847__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13513 = state_13448;
state_13448 = G__13513;
continue;
} else {
return ret_value__11845__auto__;
}
break;
}
});
connectwallet$core$signMessagee_$_state_machine__11844__auto__ = function(state_13448){
switch(arguments.length){
case 0:
return connectwallet$core$signMessagee_$_state_machine__11844__auto____0.call(this);
case 1:
return connectwallet$core$signMessagee_$_state_machine__11844__auto____1.call(this,state_13448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$signMessagee_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$signMessagee_$_state_machine__11844__auto____0;
connectwallet$core$signMessagee_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$signMessagee_$_state_machine__11844__auto____1;
return connectwallet$core$signMessagee_$_state_machine__11844__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_13463 = f__11891__auto__();
(statearr_13463[(6)] = c__11890__auto__);

return statearr_13463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Getaccounts = (function connectwallet$core$Getaccounts(){
var account = shadow.js.shim.module$$wagmi$core.getAccount();
return console.log(account);
});
shadow.js.shim.module$$web3modal$wagmi$react.createWeb3Modal(({"wagmiConfig": connectwallet.core.wagmiConfig, "projectId": connectwallet.core.projectId, "chains": connectwallet.core.chains}));
connectwallet.core.open = shadow.js.shim.module$$web3modal$wagmi$react.useWeb3Modal().open;
connectwallet.core.mint = (function connectwallet$core$mint(){
var c__11890__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11891__auto__ = (function (){var switch__11843__auto__ = (function (state_13487){
var state_val_13488 = (state_13487[(1)]);
if((state_val_13488 === (1))){
var inst_13466 = ({"address":connectwallet.core.contractAddress,"abi":connectwallet.core.contractABI,"functionName":"mint"});
var inst_13467 = shadow.js.shim.module$$wagmi$core.writeContract(inst_13466);
var inst_13468 = inst_13467.hash;
var inst_13469 = cljs.core.async.interop.p__GT_c(inst_13468);
var state_13487__$1 = state_13487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13487__$1,(2),inst_13469);
} else {
if((state_val_13488 === (2))){
var inst_13471 = (state_13487[(7)]);
var inst_13472 = (state_13487[(8)]);
var inst_13471__$1 = (state_13487[(2)]);
var inst_13472__$1 = (inst_13471__$1 instanceof cljs.core.ExceptionInfo);
var state_13487__$1 = (function (){var statearr_13489 = state_13487;
(statearr_13489[(7)] = inst_13471__$1);

(statearr_13489[(8)] = inst_13472__$1);

return statearr_13489;
})();
if(cljs.core.truth_(inst_13472__$1)){
var statearr_13490_13514 = state_13487__$1;
(statearr_13490_13514[(1)] = (3));

} else {
var statearr_13491_13515 = state_13487__$1;
(statearr_13491_13515[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (3))){
var inst_13471 = (state_13487[(7)]);
var inst_13474 = cljs.core.ex_data(inst_13471);
var inst_13475 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_13474);
var inst_13476 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13475,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_13487__$1 = state_13487;
var statearr_13492_13516 = state_13487__$1;
(statearr_13492_13516[(2)] = inst_13476);

(statearr_13492_13516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (4))){
var inst_13472 = (state_13487[(8)]);
var state_13487__$1 = state_13487;
var statearr_13493_13517 = state_13487__$1;
(statearr_13493_13517[(2)] = inst_13472);

(statearr_13493_13517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (5))){
var inst_13479 = (state_13487[(2)]);
var state_13487__$1 = state_13487;
if(cljs.core.truth_(inst_13479)){
var statearr_13494_13518 = state_13487__$1;
(statearr_13494_13518[(1)] = (6));

} else {
var statearr_13495_13519 = state_13487__$1;
(statearr_13495_13519[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (6))){
var inst_13471 = (state_13487[(7)]);
var inst_13481 = (function(){throw inst_13471})();
var state_13487__$1 = state_13487;
var statearr_13496_13520 = state_13487__$1;
(statearr_13496_13520[(2)] = inst_13481);

(statearr_13496_13520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (7))){
var inst_13471 = (state_13487[(7)]);
var state_13487__$1 = state_13487;
var statearr_13497_13521 = state_13487__$1;
(statearr_13497_13521[(2)] = inst_13471);

(statearr_13497_13521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13488 === (8))){
var inst_13484 = (state_13487[(2)]);
var inst_13485 = console.log(inst_13484);
var state_13487__$1 = state_13487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13487__$1,inst_13485);
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
var statearr_13498 = [null,null,null,null,null,null,null,null,null];
(statearr_13498[(0)] = connectwallet$core$mint_$_state_machine__11844__auto__);

(statearr_13498[(1)] = (1));

return statearr_13498;
});
var connectwallet$core$mint_$_state_machine__11844__auto____1 = (function (state_13487){
while(true){
var ret_value__11845__auto__ = (function (){try{while(true){
var result__11846__auto__ = switch__11843__auto__(state_13487);
if(cljs.core.keyword_identical_QMARK_(result__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11846__auto__;
}
break;
}
}catch (e13499){var ex__11847__auto__ = e13499;
var statearr_13500_13522 = state_13487;
(statearr_13500_13522[(2)] = ex__11847__auto__);


if(cljs.core.seq((state_13487[(4)]))){
var statearr_13501_13523 = state_13487;
(statearr_13501_13523[(1)] = cljs.core.first((state_13487[(4)])));

} else {
throw ex__11847__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13524 = state_13487;
state_13487 = G__13524;
continue;
} else {
return ret_value__11845__auto__;
}
break;
}
});
connectwallet$core$mint_$_state_machine__11844__auto__ = function(state_13487){
switch(arguments.length){
case 0:
return connectwallet$core$mint_$_state_machine__11844__auto____0.call(this);
case 1:
return connectwallet$core$mint_$_state_machine__11844__auto____1.call(this,state_13487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connectwallet$core$mint_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$0 = connectwallet$core$mint_$_state_machine__11844__auto____0;
connectwallet$core$mint_$_state_machine__11844__auto__.cljs$core$IFn$_invoke$arity$1 = connectwallet$core$mint_$_state_machine__11844__auto____1;
return connectwallet$core$mint_$_state_machine__11844__auto__;
})()
})();
var state__11892__auto__ = (function (){var statearr_13502 = f__11891__auto__();
(statearr_13502[(6)] = c__11890__auto__);

return statearr_13502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11892__auto__);
}));

return c__11890__auto__;
});
connectwallet.core.Application = (function connectwallet$core$Application(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wallet Connect V3 Test !!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$wagmi.WagmiConfig,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),connectwallet.core.wagmiConfig], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.open], null),"Connect Wallet"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.signMessagee], null),"Click to Sign Message"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),connectwallet.core.mint], null),"Mint some ALX tokens ;)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"To verify if the transaction passed successfuly go to your metamask and click on 'import tokens' then add the contract address : 0x61A153b3C68fE58738e8af19608D3418A8Ae05be."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Finally add the token's symbol : 'ALX' if not added automatically."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Your tokens should appear in your wallet !"], null)], null);
});
connectwallet.core.app = (function connectwallet$core$app(){
var container = document.getElementById("app");
var root = shadow.js.shim.module$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connectwallet.core.Application], null)));
});

//# sourceMappingURL=connectwallet.core.js.map
