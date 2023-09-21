(ns connectwallet.core
  (:require
   [reagent.dom  :as dom]
   ["wagmi/chains" :refer (arbitrum mainnet polygon)]
   ["wagmi" :refer (configureChains createConfig WagmiConfig)]
   ["@web3modal/ethereum" :refer (EthereumClient w3mConnectors w3mProvider)]
   ["@web3modal/react" :refer (Web3Button Web3Modal useWeb3Modal)]))

(def projectId "1cbe0854852010c65d1bcb8d218fc928")

(def chains #js[arbitrum mainnet polygon])

(def publicClient
  (.-publicClient (configureChains
                   chains
                   #js [(w3mProvider #js {:projectId
                                          projectId})])))

(def wagmiConfig
  (createConfig #js {:autoConnect true,
                     :connectors (w3mConnectors
                                  #js {:projectId projectId,
                                       :chains chains}),
                     :publicClient publicClient}))

(def ethereumClient (EthereumClient. wagmiConfig chains))

(defn prints []
  (.log js/console chains)
  (.log js/console publicClient)
  (.log js/console ethereumClient)
  (.log js/console Web3Button)
  (.log js/console Web3Modal)
  (.log js/console wagmiConfig))

(defn Application []
  (js/console.log "Hello world!")
  [:div
   [:h1 "Wallet Connect V2"]
   [:button {:on-click prints} "Print"]
   [:div
    [:h2 "my web3 component"]
    [:WagmiConfig {:config wagmiConfig}
     [:Web3Button]]
    [:Web3Modal {:projectId projectId
                 :ethereumClient ethereumClient}]]])

(dom/render [Application] (js/document.getElementById "app"))

;; (defn openWeb3Modal []
;;   (.open (useWeb3Modal)))

;; (defn web-button []
;;   [:Web3Button])

;; (defn wagmi-config []
;;   [:WagmiConfig {:config wagmiConfig}
;;    [web3-button]])

;; (defn web3-modal []
;;   [:Web3Modal {:projectId projectId
;;                :ethereumClient ethereumClient}])