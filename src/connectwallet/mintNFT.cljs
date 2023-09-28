(ns connectwallet.mintNFT
  (:require ["wagmi" :refer (useContractWrite usePrepareContractWrite useWaitForTransaction)]))

(def config
  (.-config (usePrepareContractWrite
             #js
              {:address
               "0x61A153b3C68fE58738e8af19608D3418A8Ae05be",
               :abi #js [#js {:name "mint",
                              :type "function",
                              :stateMutability "nonpayable",
                              :inputs #js [],
                              :outputs #js []}],
               :functionName "mint"})))

(defn MintNFT []
  (let [write (.-write (useContractWrite config))]
  [:<>
   [:br]
   [:button {:on-click write} "Mint some ALX tokens ;)"]]))