import {countryList} from "./countries.js";
countryList.map((all_item,i)=>{
    let country_Details=`My country name is ${all_item.country_name}`;
    let code_Details=`My country code is ${all_item.country_code}`;
    console.log(country_Details+" && "+code_Details);
})