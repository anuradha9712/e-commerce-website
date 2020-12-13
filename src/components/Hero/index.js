import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import {HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP} from './HeroElements';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        {/* A lot can happen over coffee! */}
                        Break for an upgrade!
                    </HeroH1>
                    <HeroP>Coffee legacy since 2020</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
