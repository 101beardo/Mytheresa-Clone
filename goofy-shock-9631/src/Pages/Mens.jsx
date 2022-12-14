import { Box, Button, Container, Image } from '@chakra-ui/react'
import React from 'react'




const Mens = () => {
  return (
    // border="1px solid red"
    <Box id='mens' align="center">
    <Box w={["90%"]} display="flex" justifyContent="center" alignItems="center" m="auto" mt="30px">
      <Image w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/Big_FestiveNOV_LIFE_desktop_2x_20221205101257.jpg?imwidth=1180&imdensity=1"/>
        <Box position="absolute"  color="white" >
            <Container  fontSize={["10px","16px","26px"]}>
                SEASON'S GREETINGS
            </Container>
            <Container  fontSize={["16px","26px","56px"]}>
                Festive Home Décor
            </Container>
            <Button size={['xs','md','lg']} mt="10px" color="black">
                SHOP NOW {`>>`}
            </Button>
        </Box>
    </Box>
    </Box>
  )
}

export default Mens
