import * as React from "react";
import { Rating } from "@sajari/react-components";
import { useSearch } from "@sajari/react-hooks";
import './CustomResults.css';

const CustomResults = () => {
    
    const {results = []} = useSearch(); 

    const renderResult = (result) => {
 
        return (
            <article className="flex items-center w-full mb-8 text-left" key={result.values.Sku}>
                    <a className="block w-24 h-24 mr-6">
                        <span className="flex items-center justify-center w-full h-full">
                            <img src={result.values.image} className="rounded transition duration-200 object-contain max-h-full"></img>
                        </span>
                    </a>
                        <div className="flex-1 min-w-0">
                            <div className="md:flex">
                                <div className="md:flex-1">
                                    <h1 className="font-medium text-gray-900">
                                        <a href={result.token.click}>
                                            {result.values.name}
                                        </a>
                                    </h1>
                                    <div className="mt-1 md:flex flex-col">
                                        <p className="hidden text-xs text-gray-400 md:block md:mr-4">
                                            {result.values.category0}
                                        </p>
                                        <p className="hidden font-medium uppercase text-sm text-gray-400 mt-1 md:block md:mr-4">
                                            {result.values.brand}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 md:mt-0 md:ml-6 md:text-right">
                                    <h2>${result.values.price}</h2>
                                   {/* Conditionally show free shipping if true */}
                                        {result.values.free_shipping === 'true' &&
                                            <div className="mt-3 md:mt-0 md:ml-6 md:text-right">
                                            <span className="inline-flex items-center text-xs font-medium text-green-500 md:ml-4">
                                                        <svg height="16" width="16" class="inline-block mr-2 align-middle fill-current" viewBox="0 0 16 16" role="presentation"><path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3l10-10c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"></path>
                                                        </svg>Free Shipping
                                                </span>
                                            </div>
                                        }
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 truncate-2-lines">
                                {result.values.description}
                            </p>
                        </div>
            </article>
        )
    }

    return (
        <div>
            {results.map(renderResult)}
        </div>
    );
}

export default CustomResults;

