import { Summary, Sorting, ResultsPerPage, ViewType } from "@sajari/react-search-ui";
import { useSearchContext } from '@sajari/react-hooks';


const CustomSort = () => {

    const {latency} = useSearchContext();

    return (
        <div class="container flex justify-between items-center py-5 border-b-2 border-gray-100">
            <div className="summary">
                <Summary/><p className="mt-2">({latency} secs)</p>
            </div>
            <div className="sort flex justify-between">  
            <Sorting
            className="mr-5"
            type="select"
            options={[
              { name: 'Most relevant', value: '' },
              { name: 'Manufacturer: A to Z', value: 'brand' },
              { name: 'Manufacturer: Z to A', value: '-brand' },
              { name: 'Rating: High to Low', value: 'rating' },
              { name: 'Rating: Low to High', value: '-rating' }
            ]}
          />
                <ResultsPerPage className="mr-5"/>
            </div>
        </div>
    );
}


export default CustomSort;