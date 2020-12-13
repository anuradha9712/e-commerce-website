import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            {/* <h1>Coffee of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p> */}
            <h1>A lot can happen over coffee!</h1>
            <p>Coffee tastes best with your reviews</p>
            <FeatureButton>Give Reviews</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;