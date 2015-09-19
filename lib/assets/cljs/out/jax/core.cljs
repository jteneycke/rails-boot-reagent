(ns jax.core
  (:require [ajax.core :refer [GET POST]]))

(enable-console-print!)

(println "Hello world!")

(defn handler [response]
    (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
    (.log js/console (str "something bad happened: " status " " status-text)))

(GET "/posts" {:handler handler
               :error-handler error-handler})
