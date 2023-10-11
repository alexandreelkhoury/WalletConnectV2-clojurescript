(ns connectwallet.core
  (:require ["@wagmi/core" :refer (signMessage getAccount writeContract)]
            ["@web3modal/wagmi/react" :refer (defaultWagmiConfig createWeb3Modal useWeb3Modal)]
            ["react-dom/client" :as rdom]
            ["wagmi" :refer (WagmiConfig)]
            ["wagmi/chains" :refer (arbitrum mainnet polygon polygonMumbai)]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [reagent.core :as r]))

(def contractAddress "0x61A153b3C68fE58738e8af19608D3418A8Ae05be")

(def contractABI #js[#js{:inputs #js[], :stateMutability "nonpayable", :type "constructor"}
                     #js{:anonymous false,
                         :inputs
                         #js[#js{:indexed true,
                                 :internalType "address",
                                 :name "owner",
                                 :type "address"}
                             #js{:indexed true,
                                 :internalType "address",
                                 :name "spender",
                                 :type "address"}
                             #js{:indexed false,
                                 :internalType "uint256",
                                 :name "value",
                                 :type "uint256"}],
                         :name "Approval",
                         :type "event"}
                     #js{:inputs
                         #js[#js{:internalType "address", :name "_spender", :type "address"}
                             #js{:internalType "uint256", :name "_value", :type "uint256"}],
                         :name "approve",
                         :outputs #js[#js{:internalType "bool", :name "", :type "bool"}],
                         :stateMutability "nonpayable",
                         :type "function"}
                     #js{:inputs #js[],
                         :name "mint",
                         :outputs #js[#js{:internalType "bool", :name "", :type "bool"}],
                         :stateMutability "nonpayable",
                         :type "function"}
                     #js{:inputs
                         #js[#js{:internalType "address", :name "_to", :type "address"}
                             #js{:internalType "uint256", :name "_value", :type "uint256"}],
                         :name "transfer",
                         :outputs #js[#js{:internalType "bool", :name "", :type "bool"}],
                         :stateMutability "nonpayable",
                         :type "function"}
                     #js{:anonymous false,
                         :inputs
                         #js[#js{:indexed true,
                                 :internalType "address",
                                 :name "from",
                                 :type "address"}
                             #js{:indexed true,
                                 :internalType "address",
                                 :name "to",
                                 :type "address"}
                             #js{:indexed false,
                                 :internalType "uint256",
                                 :name "value",
                                 :type "uint256"}],
                         :name "Transfer",
                         :type "event"}
                     #js{:inputs
                         #js[#js{:internalType "address", :name "_from", :type "address"}
                             #js{:internalType "address", :name "_to", :type "address"}
                             #js{:internalType "uint256", :name "_value", :type "uint256"}],
                         :name "transferFrom",
                         :outputs #js[#js{:internalType "bool", :name "", :type "bool"}],
                         :stateMutability "nonpayable",
                         :type "function"}
                     #js{:inputs
                         #js[#js{:internalType "address", :name "", :type "address"}
                             #js{:internalType "address", :name "", :type "address"}],
                         :name "allowance",
                         :outputs #js[#js{:internalType "uint256", :name "", :type "uint256"}],
                         :stateMutability "view",
                         :type "function"}
                     #js{:inputs #js[#js{:internalType "address", :name "", :type "address"}],
                         :name "balanceOf",
                         :outputs #js[#js{:internalType "uint256", :name "", :type "uint256"}],
                         :stateMutability "view",
                         :type "function"}
                     #js{:inputs #js[],
                         :name "decimals",
                         :outputs #js[#js{:internalType "uint8", :name "", :type "uint8"}],
                         :stateMutability "view",
                         :type "function"}
                     #js{:inputs #js[],
                         :name "name",
                         :outputs #js[#js{:internalType "string", :name "", :type "string"}],
                         :stateMutability "view",
                         :type "function"}
                     #js{:inputs #js[],
                         :name "symbol",
                         :outputs #js[#js{:internalType "string", :name "", :type "string"}],
                         :stateMutability "view",
                         :type "function"}
                     #js{:inputs #js[],
                         :name "totalSupply",
                         :outputs #js[#js{:internalType "uint256", :name "", :type "uint256"}],
                         :stateMutability "view",
                         :type "function"}])

;; Configuration of  WC

(def projectId "1cbe0854852010c65d1bcb8d218fc928")

(def chains #js[arbitrum mainnet polygon polygonMumbai])

(def metadata
  #js
   {:name "Web3Modal",
    :description "METAV.RS",
    :url "https://metav.rs",
    :icons
    #js
     ["https://avatars.githubusercontent.com/u/37784886"]})

(def wagmiConfig
  (defaultWagmiConfig #js {:chains chains,
                           :projectId projectId,
                           :metadata metadata}))

(createWeb3Modal #js {:wagmiConfig wagmiConfig,
                      :projectId projectId,
                      :chains chains})
;; End of configuration



(def network
  #js{:view "Networks"})

(defn signMessagee []
  (go
    (let [message "hello la team"
          result (<p! (signMessage #js{:message message}))]
      (js/console.log "message signed !" result))))

(defn Getaccounts []
  (let [account (getAccount)]
    (js/console.log account)))

(def open (aget (useWeb3Modal) "open"))

(defn mint []
  (go
    (let [result (<p! (writeContract
                             #js
                              {:address contractAddress,
                               :abi contractABI,
                               :functionName "mint"}))]
      (js/console.log result))))

(defn Application []
  [:div {:style {:align-items "center"
                 :text-align "center";
                 :justify-content "center"}}
   [:h1 "Wallet Connect V3 Test !!!"]
   [:div
    [:h2 "My buttons"]
    [:> WagmiConfig {:config wagmiConfig}
     [:button {:on-click #(open)} "Connect Wallet"]
     [:button {:on-click #(open network)} "Change network"]]
     [:br]]

   [:div
    [:h2 "WalletConnect's button"]
    [:> WagmiConfig {:config wagmiConfig}
     [:w3m-button ] ;; their button
     [:br]]]
   [:br]
   [:button {:on-click signMessagee} "Click to Sign Message"]
   [:br]
   [:br]
    [:button {:on-click Getaccounts} "get accounts"]
   [:br]
   [:br]
   [:button {:on-click mint} "Mint some ALX tokens ;)"]
   [:h2 "Open the console to see the results"]])

(defn app []
  (let [container (js/document.getElementById  "app")
        root (rdom/createRoot container)]
    (.render root (r/as-element [Application]))))