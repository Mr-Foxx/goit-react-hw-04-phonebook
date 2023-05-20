import React from "react";
import { FilterTitle,FilterIntput } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter=({title,handleFindContact})=>{
    return(
      <>
        <FilterTitle>{title}</FilterTitle>
        <FilterIntput type="text" onChange={handleFindContact} />
      </>

    )

        
}

Filter.propTypes={
    title:PropTypes.string.isRequired,
    handleFindContact:PropTypes.func.isRequired
}