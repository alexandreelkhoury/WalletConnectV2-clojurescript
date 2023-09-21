(ns connectwallet.core
  (:require
   [reagent.dom  :as dom]
   [reagent.core :as r]
   ["react-dom/client" :as rdom]
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

(defn Application []
  (js/console.log "Hello world!")
  [:<>
   [:div
    [:h1 "Wallet Connect V2"]
    [:div
     [:h2 "my web3 component"]
     [:> WagmiConfig {:config wagmiConfig}
      [:> Web3Button]]
     [:> Web3Modal {:projectId projectId
                    :ethereumClient ethereumClient}]]]])

(defn app []
  (let [container (js/document.getElementById  "app")
        root (rdom/createRoot container)]
    (.render root (r/as-element [Application]))))