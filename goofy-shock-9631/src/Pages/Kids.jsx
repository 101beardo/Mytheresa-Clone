import React from 'react'
import { Image,Box,Container,Button,Text,Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Kids = () => {
    const navigate = useNavigate()
  return (
    <Box id="kids">
    <Box id="kids_page">
    <Box display={["block","flex","flex"]} padding="0 5%" gap="1%" mt="50px">
        <Box display="flex" justifyContent="center" alignItems="center" m="auto" boxSize={["80%","44%","44%"]} >
        <Image w="100%" src='https://img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Kids_Homepage_Festive_BigSplit_GIRL_DSK_2x_20221130170827.jpg?imwidth=1180&imdensity=1' alt='image 1' />
            <Box position="absolute"  color="white" mt={["200px", "null", "200px"]}>
            <Container textAlign="center" fontSize={["15px", "20px", "55px"]}>
                Girls
            </Container>
            <Button color="black" size={['xs','md','lg']} onClick={() => navigate('/arrival')}>
                SHOP NOW {`>>`}
            </Button>
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" m="auto" boxSize={["80%","44%","44%"]} marginTop={["20px","null","0.000000000001px"]}>
         <Image w="100%" src='https://img.mytheresa.com/media/static/raw/cms/l/KW_FO_2022_December/Kids_Homepage_Festive_BigSplit_BOY_DSK_2x_20221130170825.jpg?imwidth=1180&imdensity=1' alt='image 2' />
            <Box position="absolute"  color="white" mt={["200px", "null", "200px"]}>
            <Container textAlign="center" fontSize={["15px", "20px", "55px"]}>
                Boys
            </Container>
            <Button color="black" size={['xs','md','lg']} onClick={() => navigate('/arrival')}>
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
            <Button color="white" backgroundColor="black" m="auto" size={['xs','md','lg']} onClick={() => navigate('/arrival')}>
                SHOP NOW {`>>`}
            </Button>
            </Box>
     </Box>
     <Box display="flex" justifyContent="center" alignItems="center"  mt="30px">
     <Button onClick={() => navigate('/arrival')} color="black" backgroundColor="rgb(223, 223, 223)" direction='row' align='center' padding="1.8%">
                SHOP KIDS DESIGNERS
            </Button>
     </Box>
     <Box w="85%" m="auto" mt="30px" padding="3%"  opacity="0.8">
        <Box display="flex" justifyContent="center" alignItems="center" fontSize="15px">
            DESIGNER KIDSWEAR ONLINE AT MYTHERESA KIDS
        </Box>
        <Text mt="10px" fontSize="12px">
            Mytheresa Kids offers the best online edit in designer kidswear with scaled-down versions of all your favorite labels, such as Gucci Kids, Little Marc Jacobs, and Moncler Enfant. Whether you're shopping for a Bonpoint onesie for your baby nephew, investigating the latest trends in boys’ fashion for your son, or want to provide treasure-forever gifts for the children of your friends and family, we offer a vast collection of children's clothes, and a luxury shopping experience that can’t be surpassed.
        </Text>
        <Box mt="10px" fontSize="15px">
            NEW KIDS ON THE BLOCK
        </Box>
        <Text mt="10px" fontSize="12px">
             Start your little ones early on their fashion journey with our edit of personality-packed pieces that make playdates and gatherings a little more colorful. By discovering the latest kids fashion from your favorite designers, you can let them find and develop their own sense of personal style.
        </Text>
        <Text mt="10px" fontSize="12px">
            Our buying team have scoured the globe to bring you the very best runway trends in kidswear. Each item in our curated selection of girls’ fashion, and our unique babies' collections, have been thoughtfully designed and expertly executed. Whether you're dressing your children in Tod’s Junior for a special occasion or fancy them as a miniature influencer in designer shoes from labels like Balenciaga Kids, we've got the designs that will have admirers cooing with appreciation.
        </Text>
        <Text mt="10px" fontSize="12px"> 
            If you want to take inspiration from the adult lines, we also have a selection of iconic styles that allow you to create adorable matching mini-me looks in Balmain blazers, Burberry trench coats, Dolce&Gabbana dresses, or Tod's loafers.
        </Text>
        <Text mt="10px" fontSize="12px">
            Discover more designer must-haves by browsing through Mytheresa and let our Customer Service team assist you with your purchase.
        </Text>
     </Box>
    </Box>
</Box>
  )
}

