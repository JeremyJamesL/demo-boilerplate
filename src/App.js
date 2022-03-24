import "./App.css";
import { useState } from "react";
import { Filter, Pagination} from "@sajari/react-search-ui";
import { Select, Option } from "@sajari/react-components"; 
import CustomSort from "./components/CustomSort";
import CustomResults from "./components/CustomResults";
import CustomHeader from "./components/CustomHeader";
import { useSearch } from "@sajari/react-hooks";


function App(props) {

  // Following three blocks are used to handle pipeline switching (if needed). See switching component in filter lists below 
  // const [newPipeline, changePipeline] = useState('query'); 

  // const pipelineChangeHandler = (value) => {
  //   props.portPipeLineChange(value);
  //   search();
  //   changePipeline(value);
  // }
  
  // const {search} = useSearch();

  return (
    <div className="App">
      <CustomHeader/>
      <div className="max-w-6xl mx-auto">
        <CustomSort/>
        <div className="flex mt-10">
          <div className="filters pr-10 w-1/4">
            <div className="mb-4">
              <Filter type="range" name="priceFilter" title="Price"/>
            </div>
            <div className="mb-4">
               <Filter type="color" name="colorFilter" title="Color" />
            </div>
            <div className="mb-4">
              <Filter type="list" name="category" title="Category" />
            </div>
            <div className="mb-4">
             <Filter type="list" name="brand" title="Brand" />
            </div>

            {/* <div className="mb-4">
                <Select size="sm" onChange={(value) => pipelineChangeHandler(value)}>
                    <Option value="query">Standard</Option>
                    <Option value="boost-on-sale">Most Margin</Option>
                    <Option value="best-sellers">Best sellers</Option>
                </Select>
            </div> */} {/* Uncomment to use Pipeline switcher */} 

          </div>

          <main className="results px-10 w-3/4">

            {/* <CustomResults activePipeline={newPipeline}/> */}
            <CustomResults /> {/*Use above <CustomResults> if using pipeline switcher*/}

            <div className="sticky bottom-0 -mx-8 lg:mx-0 p-4 pt-2 lg:p-6 text-center">
              <Pagination/>
            </div>
          </main>

        </div>  
      </div>
    </div>
  );
}

export default App;