import { Box } from '@chakra-ui/react';
import React from 'react';
import { Intro } from './sections/intro';
import { ContactUs } from './sections/contacts';
import { OurAstrologer } from './sections/ourastrologer';
import { OurTestimonials } from './sections/ourtestimonals';
import { Reviews } from './sections/reviews';
import { Services } from './sections/services';
import { Solutions } from './sections/soltions';
export const Landing=()=>{
    return <Box>
        <Intro />
        <Services />
        <ContactUs />
        <OurAstrologer />
        <OurTestimonials />
        <Reviews />
        <Solutions />

    </Box>;

}