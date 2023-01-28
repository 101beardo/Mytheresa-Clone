import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
  
  export default function Life() {
    const navigate = useNavigate()
    return (
      <>
        <Box
          w="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          m="auto"
          mt="30px"
        >
          <Image
            w="100%"
            src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/Big_FestiveNOV_LIFE_desktop_2x_20221205101257.jpg?imwidth=1180&imdensity=1"
          />
          <Box position="absolute" color="white">
            <Container fontSize={["10px", "16px", "26px"]} textAlign="center">
              SEASON'S GREETINGS
            </Container>
            <Container fontSize={["16px", "26px", "56px"]} textAlign="center">
              Festive Home Decor
            </Container>
            <Button size={["xs", "md", "lg"]} mt="10px" color="black" display="block" m="auto" onClick={() => navigate('/arrival')}>
              SHOP NOW {`>>`}
            </Button>
          </Box>
        </Box>
        <Box
          border="0px"
          borderTop="2px"
          borderColor="gray.200"
          width="80%"
          m="auto"
          mt="35px"
        ></Box>
        <Box
          width="80%"
          // height={1500}
          m="auto"
          mt="35px"
          display="flex"
          flexWrap={["wrap", "nowrap", "nowrap"]}
          gap="15px"
        >
          <Box height="100%" width="100%">
            <Heading as="h4" size="md" fontWeight="light" mt="10px" textAlign="center">
              GOLDEN HOUR
            </Heading>
            <Heading as="h1" size="xl" mt="15px" fontWeight="400" textAlign="center">
              Warm lighting for a winter
            </Heading>
            <Heading as="h1" size="xl" fontWeight="400" textAlign="center">
              glow up
            </Heading>
            <Image
              src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/CW49_Life_HP_ActboxTall_1_2x_20221205090527.jpg?imwidth=600&imdensity=1"
              m="auto"
              w="100%"
              mt="40px"
            />
            <Button
              bg="black"
              color="white"
              _hover={{ background: "black", color: "white" }}
              display="block"
              m="auto"
              mt="40px"
              onClick={() => navigate('/arrival')}
            >
              SHOP NOW {`>>`}
            </Button>
          </Box>
          <Box height="100%" width="100%">
            <Box width="100%" mb="61px">
              <Heading as="h4" size="md" fontWeight="light" mt="10px" textAlign="center">
                IN BLOOM
              </Heading>
              <Heading as="h1" size="xl" mt="15px" fontWeight="400" textAlign="center">
                Vases to complement
              </Heading>
              <Heading as="h1" size="xl" fontWeight="400" textAlign="center"> 
                every color scheme
              </Heading>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/CW49_Life_HP_ActboxSmall_1_2x_20221205090528.jpg?imwidth=600&imdensity=1"
                m="auto"
                w="100%"
                mt="40px"
              />
              <Button
                bg="black"
                color="white"
                _hover={{ background: "black", color: "white" }}
                display="block"
                m="auto"
                mt="40px"
                onClick={() => navigate('/arrival')}
              >
                SHOP NOW {`>>`}
              </Button>
            </Box>
            <Box
              border="0px"
              borderTop="2px"
              borderColor="gray.200"
              width="80%"
              m="auto"
              mt="-20px"
            ></Box>
            <Box width="100%" height="45%" mt="30px">
              <Heading as="h4" size="md" fontWeight="light" mt="10px" textAlign="center">
                COMPFORT CONNOISSEURS
              </Heading>
              <Heading as="h1" size="xl" mt="15px" fontWeight="400" textAlign="center">
                Find the right gift for the
              </Heading>
              <Heading as="h1" size="xl" fontWeight="400" textAlign="center">
                perfect pet
              </Heading>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/CW49_Life_HP_ActboxSmall_2_2x_20221205090528.jpg?imwidth=600&imdensity=1"
                m="auto"
                w="100%"
                mt="40px"
              />
              <Button
                bg="black"
                color="white"
                _hover={{ background: "black", color: "white" }}
                display="block"
                m="auto"
                mt="40px"
                onClick={() => navigate('/arrival')}
              >
                SHOP NOW {`>>`}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          border="0px"
          borderTop="2px"
          borderColor="gray.200"
          width="80%"
          m="auto"
          mt="35px"
        ></Box>
        <Box
          // border="1px"
          // borderColor="red"
          // height={400}
          m="auto"
          mt="30px"
          w="80%"
        >
          <Heading as="h4" size="md" fontWeight="light" mt="10px" textAlign="center">
            COLOR-COORDINATED
          </Heading>
          <Heading as="h1" size="xl" mt="15px" fontWeight="400" textAlign="center">
            Prints, patterns, and positve vibes
          </Heading>
          <Box height="70%" mt="25px">
            <SimpleGrid columns={[2, null, 4]} spacing={5}>
              <Box height="100%">
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW47/CW47_FE_642x642_1_2x_20221117161836.jpg" />
                <Heading as="h4" size="sm" fontWeight="light" mt="10px" textAlign="center">
                  Double J
                </Heading>
              </Box>
              <Box height="100%">
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW47/CW47_FE_642x642_2_2x_20221117161836.jpg" />
                <Heading as="h4" size="sm" fontWeight="light" mt="10px" textAlign="center">
                  Hay
                </Heading>
              </Box>
              <Box height="100%">
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW47/CW47_FE_642x642_3_2x_20221117161837.jpg" />
                <Heading as="h4" size="sm" fontWeight="light" mt="10px" textAlign="center">
                  Serax
                </Heading>
              </Box>
              <Box height="100%">
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW47/CW47_FE_642x642_4_2x_20221117161836.jpg" />
                <Heading as="h4" size="sm" fontWeight="light" mt="10px" textAlign="center">
                  Cassina
                </Heading>
              </Box>
            </SimpleGrid>
            <Button
              bg="black"
              color="white"
              _hover={{ background: "black", color: "white" }}
              display="block"
              m="auto"
              mt="40px"
              onClick={() => navigate('/arrival')}
            >
              SHOP NOW {`>>`}
            </Button>
          </Box>
        </Box>
        <Box
          border="0px"
          borderTop="2px"
          borderColor="gray.200"
          width="80%"
          m="auto"
          mt="35px"
        ></Box>
        <Box
          // border="1px"
          // borderColor="red"
          // height={400}
          w="80%"
          m="auto"
          mt="25px"
        >
          <Container maxW="90%">
            <Heading as="h4" size="sm" fontWeight="light" mt="10px">
              MYTHERESA LIFE – LUXURY FURNITURE & HOME DÉCOR
            </Heading>
            <Text textAlign="left" fontSize="sm" mt="10px">
              Mytheresa Life is the most trusted online source for luxury
              lifestyle, design and home products. We've curated the finest
              selection of travel accessories, home décor, luxury furniture and
              lighting, and more.
            </Text>
            <Text textAlign="left" fontSize="sm" mt="10px">
              We put the "style" in "lifestyle." Furnish your most important
              spaces with Vitra's Panton chairs, available in a range of colors,
              as well as our shelves, coffee tables, and more. Decorate surfaces
              with designer candles from Trudon, vases from Cappellini, and coffee
              table books from Assouline.
            </Text>
            <Text textAlign="left" fontSize="sm" mt="10px">
              Hosting is an art form, and we have everything you need to master
              it. Create your tablescape with luxury dinnerware sets from Ginori
              1735. After the meal, serve drinks with designer glassware from Tom
              Dixon.
            </Text>
            <Text textAlign="left" fontSize="sm" mt="10px">
              Shop with us and discover why Mytheresa is your final destination
              for online shopping for women.
            </Text>
          </Container>
        </Box>
        <Box
          border="0px"
          borderTop="2px"
          borderColor="gray.200"
          width="80%"
          m="auto"
          mt="35px"
        ></Box>
      </>
    );
  }
  