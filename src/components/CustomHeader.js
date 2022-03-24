import { useState } from "react";
import { Input } from "@sajari/react-search-ui";
import {Radio,RadioGroup} from "@sajari/react-components"
import Logo from "../imgs/logo.svg"
import "./CustomHeader.css"

const CustomHeader = () => {

    const [radioState, setRadioState] = useState("suggestions");
    
        return  (
            <div className="header bg-opacity-75 border-b-2 border-gray-600 py-3">
                <div className="max-w-6xl mx-auto flex">
                    <img src={Logo} className="mr-5"></img>
                    <Input className="grow mr-5" mode={radioState} enableVoice={true}/>
                    <RadioGroup onChange={(value) => setRadioState(value.target.value)} defaultValue={radioState}>
                        <Radio value="suggestions" className="mr-3">Suggestions</Radio>
                        <Radio value="instant">Instant</Radio>
                    </RadioGroup>
                </div>
            </div>
        );

}

export default CustomHeader;