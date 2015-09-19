(set-env!
 :source-paths   #{"src"}
 :dependencies '[[adzerk/boot-cljs      "1.7.48-3" :scope "test"]
                 [adzerk/boot-cljs-repl "0.1.10-SNAPSHOT" :scope "test"]
                 [adzerk/boot-reload    "0.3.2"      :scope "test"]
                 [cljs-ajax "0.5.0-SNAPSHOT"]
                 [reagent "0.5.1"]
                 ])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]])

(deftask dev
  "Watch/compile clojurescript files in development"
  []
  (comp
    (watch)
    (cljs-repl)
    (cljs :source-map true
          :optimizations :simple)))

(deftask prod
  "Compile clojurescript files for production"
  []
  (comp
    (cljs :optimizations :advanced
          :compiler-options {:output-wrapper
                             :true})))
