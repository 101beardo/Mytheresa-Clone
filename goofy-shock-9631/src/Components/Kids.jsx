import React from 'react'
import { Image,Box,Container, Button } from '@chakra-ui/react'

export const Kids = () => {
  return (
    <Box >
    <Box display="flex" padding="0 5%" gap="1%" mt="30px">
        <Box display="flex" justifyContent="center" alignItems="center"m="auto" boxSize='44%'>
        <Image w="100%" src='https://img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Kids_Homepage_Festive_BigSplit_GIRL_DSK_2x_20221130170827.jpg?imwidth=1180&imdensity=1' alt='image 1' />
            <Box position="absolute"  color="white" mt="200px">
            <Container textAlign="center" fontSize={["15px", "20px", "55px"]}>
                Girls
            </Container>
            <Button color="black" size={['xs','md','lg']}>
                SHOP NOW {`>>`}
            </Button>
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center"m="auto" boxSize='44%'>
         <Image  w="100%" src='https://img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Kids_Homepage_Festive_BigSplit_BOY_DSK_2x_20221130170825.jpg?imwidth=1180&imdensity=1' alt='image 2' />
            <Box position="absolute"  color="white" mt="200px">
            <Container textAlign="center" fontSize={["15px", "20px", "55px"]}>
                Boys
            </Container>
            <Button color="black" size={['xs','md','lg']}>
                SHOP NOW {`>>`}
            </Button>
            </Box>
        </Box>
     </Box>
     <Box display="flex" justifyContent="center" alignItems="center" m="auto" mt="30px">
      <Image w="85%" src="//img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Homepage_Kids_BabyBanner_desktop_2x_20221130170810.jpg?imwidth=1180&imdensity=1, //img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Homepage_Kids_BabyBanner_desktop_2x_20221130170810.jpg?imwidth=1180&imdensity=2 2x" />
      <Box position="absolute"  color="black">
            <Container  textAlign="center" fontSize={["15px", "20px", "55px"]}>
                Baby
            </Container>
            <Button color="white" backgroundColor="black" m="auto" size={['xs','md','lg']}>
                SHOP NOW {`>>`}
            </Button>
            </Box>
     </Box>
     <Box display="flex" justifyContent="center" alignItems="center"  mt="30px" mb="30px">
     <Button color="black" backgroundColor="rgb(223, 223, 223)" direction='row' align='center' padding="1.8%">
                SHOP KIDS DESIGNERS
            </Button>
     </Box>
    </Box>
  )
}

