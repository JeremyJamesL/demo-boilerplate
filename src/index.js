import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  FieldDictionary,
  FilterBuilder,
  Pipeline,
  SearchProvider,
  RangeFilterBuilder, 
  ClickTracking
} from "@sajari/react-search-ui";


const pipeline = new Pipeline(
  {
    account: "1594153711901724220",
    collection: "bestbuy",
    endpoint: "//jsonapi-us-valkyrie.sajari.com",
  },
  "query",
  new ClickTracking('url'),
);

const categoryFilter = new FilterBuilder({
  name: "category",
  field: "category0",
});


const brandFilter = new FilterBuilder({
  name: "brand",
  field: "brand",
});


const priceFilter = new RangeFilterBuilder({
  name: "priceFilter",
  field: "price"
})

const colorFilter = new FilterBuilder({
  name: "colorFilter",
  field: "colors",
  array: true
});


const getPipelineChange = (newPipeline) => {
  pipeline.pipeline.identifier.name  = newPipeline;
}

ReactDOM.render(
  <SearchProvider
    search={{ pipeline,filters:[categoryFilter,brandFilter,colorFilter,priceFilter] }}
    searchOnLoad
  >
    <App portPipeLineChange={getPipelineChange}/>
  </SearchProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();