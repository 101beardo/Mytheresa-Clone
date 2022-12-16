import { Box,Button,Heading,Image,Link,Text } from '@chakra-ui/react'
import React from 'react';
import './WomenPage.css'
function WomenPage() {
  return <>
        
  {/* -----------------------navbar----------------------------------------- */}
  
  <Box className="navbar">
    <Box className="dropdown">
      <Button className="dropbtn" id="box31">NEW ARRIVALS
     
      </Button>
      <Box className="dropdown-content">
        <Box className="header">
          <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
          <Heading as='h2'  id="box31">JUST IN</Heading>
        </Box>
        <Box className="row">
          <Box className="column">
           
            <Link id="box31" href="#">   Current Week</Link>
            <Link id="box31" href="#">Previous Weeks</Link>
            <Link id="box31" href="#">Essentials</Link>
            <Link id="box31" href="#">Tailoring Edit</Link>
            <Link id="box31" href="#">Dress Code</Link>
            <Link id="box31" href="#">Summer Wardrobe</Link>
            <Link id="box31" href="#">Outdoor & Activewear</Link>
            <Link id="box31" href="#">The Gift Shop</Link>
         
          </Box>
          <Box className="column">
         
            <Link id="box31" href="#">Clothing</Link>
            <Link id="box31" href="#">Shoes</Link>
            <Link id="box31" href="#">Bags</Link>
            <Link id="box31" href="#">Accessories</Link>
          </Box>
       
          <Box className="column">
            <img id="colimg" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_FLYOUT_CW17_2022/NA_FLYOUT-_19__20220428121816.jpg" alt=""/>
          </Box>
        </Box>
                        {/* <!-- <Box></Box> --> */}
      </Box>
    </Box>
    {/* <!-- 2nd --> */}
    <Box className="dropdown">
      <Button className="dropbtn" id="box31">DESIGNERS 
     
      </Button>
      <Box className="dropdown-content">
        <Box className="header2">
          <Heading as='h2'  id="box31">TOP 20</Heading>
          <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
        </Box>
        <Box className="row">
          <Box className="column">
           
            <Link id="box31" href="#">  Acne Studios</Link>
            <Link id="box31" href="#"> Alexander McQueen</Link>
            <Link id="box31" href="#">  Ami Paris</Link>
            <Link id="box31" href="#">   AMIRI</Link>
            <Link id="box31" href="#"> Balenciaga</Link>
            <Link id="box31" href="#"> Bottega Veneta</Link>
            <Link id="box31" href="#">Brunello Cucinelli</Link>
            <Link id="box31" href="#"> Burberry</Link>
            {/* <Link id="box31" href="#">  Christian Louboutin</Link>
            <Link id="box31" href="#">     Dolce&Gabbana </Link> */}
           
          
         
          </Box>
          <Box className="column">
         
            <Link id="box31" href="#">   Givenchy</Link>
            <Link id="box31" href="#">  Gucci</Link>
            <Link id="box31" href="#">  Lemaire</Link>
            <Link id="box31" href="#">Loewe</Link>
            <Link id="box31" href="#">Loro Piana</Link>
            <Link id="box31" href="#">    Maison Margiela  </Link>
            <Link id="box31" href="#">  Saint Laurent</Link>
            <Link id="box31" href="#">  Stone Island</Link>
    
          </Box>
         
          <Box className="column">
         
           
            <Link id="box31" href="#">Clothing</Link>
            <Link id="box31" href="#">Shoes</Link>
            <Link id="box31" href="#">Bags</Link>
            <Link id="box31" href="#">Accessories</Link>
            <Link id="box31" href="#">    Exclusive styles  </Link>
          </Box>
         
        
         
          
          <Box className="column">
            <img id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/GUCCI_LOVE_FLYOUT_20220502153143.jpg" alt=""/>
          </Box>
        </Box>
                        {/* <!-- <Box></Box> --> */}
      </Box>
    </Box>
  {/* <!-- 3rd start --> */}
    
  <Box className="dropdown">
  <Button className="dropbtn" id="box31">CLOTHING 
  </Button>
  <Box className="dropdown-content">
  <Box className="header">
  <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
  <Heading as='h2'  id="box31">TOP BRANDS</Heading>
  <Heading as='h2'  id="box31">DISCOVER</Heading>
  </Box>
  <Box className="row">
  <Box className="column">
  <Link id="box31" href="clothing.html">Jackets</Link>
  <Link id="box31" href="#">     Sweats</Link>
  <Link id="box31" href="#">   Knitwear</Link>
  <Link id="box31" href="#"> Coats</Link>
  <Link id="box31" href="#">T-shirts</Link>
  <Link id="box31" href="#">  Shirts</Link>
  <Link id="box31" href="#">  Pants</Link>
  <Link id="box31" href="#"> Polo shirts</Link>
 
  </Box>
  <Box className="column">
  <Link id="box31" href="#">   Acne Studios</Link>
  <Link id="box31" href="#">Alexander McQueen</Link>
  <Link id="box31" href="#">Ami Paris</Link>
  <Link id="box31" href="#">Amiri</Link>
  <Link id="box31" href="#">Balenciaga</Link>
  <Link id="box31" href="#">Bottega Veneta</Link>
  <Link id="box31" href="#">Brunello Cucinelli</Link>
  <Link id="box31" href="#">Burberry</Link>

  </Box>
  <Box className="column">
  <Link id="box31" href="#">     New clothing arrivals</Link>
  <Link id="box31" href="#">    Essential clothing</Link>
  <Link id="box31" href="#">Exclusive clothing</Link>
  </Box>
  <Box className="column">
  <img id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT__20220503115956.jpg" alt=""/>
  </Box>
  </Box>
              {/* <!-- <Box></Box> --> */}
  </Box>
  </Box>
  {/* <!-- 4thstart --> */}
  <Box className="dropdown">
  <Button className="dropbtn" id="box31">SHOES 
  </Button>
  <Box className="dropdown-content">
  <Box className="header">
  <Heading  as='h2' id="box31">SHOP BY CATEGORY</Heading>
  <Heading  as='h2' id="box31">TOP BRANDS</Heading>
  <Heading as='h2'  id="box31">DISCOVER</Heading>
  </Box>
  <Box className="row">
  <Box className="column">
  <Link id="box31" href="#">     Sneakers</Link>
  <Link id="box31" href="#">  Sandals & slides</Link>
  <Link id="box31" href="#">  Loafers</Link>
  <Link id="box31" href="#">Boots</Link>
  <Link id="box31" href="#"> Formal shoes</Link>
  <Link id="box31" href="#">    Derby shoes</Link>
  <Link id="box31" href="#">     Espadrilles</Link>
  <Link id="box31" href="#"> Summer Shoes</Link>
  </Box>
  <Box className="column">
  <Link id="box31" href="#">    Alexander McQueen</Link>
  <Link id="box31" href="#">   Amiri</Link>
  <Link id="box31" href="#">    Balenciaga</Link>
  <Link id="box31" href="#"> Bottega Veneta</Link>
  <Link id="box31" href="#">    Burberry</Link>
  <Link id="box31" href="#">     Christian Louboutin</Link>
  <Link id="box31" href="#">       Gucci</Link>
  <Link id="box31" href="#">    Lanvin</Link>

  </Box>
  <Box className="column">
  <Link id="box31" href="#">    New shoe arrivals</Link>
  <Link id="box31" href="#">  Essential shoes</Link>
  <Link id="box31" href="#">    Exclusive shoes</Link>
  </Box>
  <Box className="column">
  <img id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_2_20220503115955.jpg" alt=""/>
  </Box>
  </Box>
              {/* <!-- <Box></Box> --> */}
  </Box>
  </Box>
  {/* <!-- 5 start --> */}
  <Box className="dropdown">
  <Button className="dropbtn" id="box31">BAGS 
  </Button>
  <Box className="dropdown-content">
  <Box className="header">
  <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
  <Heading as='h2'  id="box31">JUST IN</Heading>
  </Box>
  <Box className="row">
  <Box className="column">
  <Link id="box31" href="#">   Current Week</Link>
  <Link id="box31" href="#">Previous Weeks</Link>
  <Link id="box31" href="#">Essentials</Link>
  <Link id="box31" href="#">Tailoring Edit</Link>
  <Link id="box31" href="#">Dress Code</Link>
  <Link id="box31" href="#">Summer Wardrobe</Link>
  <Link id="box31" href="#">Outdoor & Activewear</Link>
  <Link id="box31" href="#">The Gift Shop</Link>
  </Box>
  <Box className="column">
  <Link id="box31" href="#">   Clothing</Link>
  <Link id="box31" href="#">Shoes</Link>
  <Link id="box31" href="#">Bags</Link>
  <Link id="box31" href="#">Accessories</Link>
  </Box>
  <Box className="column">
  <img id="colimg" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_3_20220503115957.jpg" alt=""/>
  </Box>
  </Box>
              {/* <!-- <Box></Box> --> */}
  </Box>
  </Box>
  {/* <!-- 6th start --> */}
  <Box className="dropdown">
  <Button className="dropbtn" id="box31">ACCESSORIES 
  </Button>
  <Box className="dropdown-content">
  <Box className="header">
  <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
  <Heading as='h2'  id="box31">TOP BRANDS</Heading>
  <Heading as='h2'  id="box31">DISCOVER</Heading>
  </Box>
  <Box className="row">
  <Box className="column">
  <Link id="box31" href="#">     Sneakers</Link>
  <Link id="box31" href="#">  Sandals & slides</Link>
  <Link id="box31" href="#">  Loafers</Link>
  <Link id="box31" href="#">Boots</Link>
  <Link id="box31" href="#"> Formal shoes</Link>
  <Link id="box31" href="#">    Derby shoes</Link>
  <Link id="box31" href="#">     Espadrilles</Link>
  <Link id="box31" href="#"> Summer Shoes</Link>
  </Box>
  <Box className="column">
  <Link id="box31" href="#">    Alexander McQueen</Link>
  <Link id="box31" href="#">   Amiri</Link>
  <Link id="box31" href="#">    Balenciaga</Link>
  <Link id="box31" href="#"> Bottega Veneta</Link>
  <Link id="box31" href="#">    Burberry</Link>
  <Link id="box31" href="#">     Christian Louboutin</Link>
  <Link id="box31" href="#">       Gucci</Link>
  <Link id="box31" href="#">    Lanvin</Link>
  
  </Box>
  <Box className="column">
  <Link id="box31" href="#">    New shoe arrivals</Link>
  <Link id="box31" href="#">  Essential shoes</Link>
  <Link id="box31" href="#">    Exclusive shoes</Link>
  </Box>
  <Box className="column">
  <img id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_4_20220503115956.jpg" alt=""/>
  </Box>
  </Box>
              {/* <!-- <Box></Box> --> */}
  </Box>
  </Box>
  {/* <!-- 7th start --> */}
  <Box className="dropdown">
  <Button className="dropbtn" id="box31">SALE
  </Button>
  <Box className="dropdown-content">
  <Box className="header">
  <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
  {/* <!-- <Heading id="box31">JUST IN</Heading> --> */}
  </Box>
  <Box className="row">
  <Box className="column">
  </Box>
  <Box className="column">
  </Box>
  <Box className="column">
  <Heading as='h1'id="sale">SALE</Heading>
  <Button className="bsale">SHOP SALE</Button>
  </Box>
  </Box>
              {/* <!-- <Box></Box> --> */}
  </Box>
  </Box>
  <Box id="box32">
  <input type="text" id="input"  placeholder="Search for....  "  />
  </Box>
  </Box>
  <hr id="line"/>
{/* ------------------------------------------------------------------------------- */}
          <Box
            id='img1'
            width='90%'
            height='auto'
            margin='auto'
            marginTop='50px'
            >
            <Image 
             width='100%'
            //  className='img1-1'
             
              src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg' alt='shiv'/>
              </Box>
    {/* //----------------------------img2------------------------------------- */}
          {/*---------------------------------- img2---------------- */}
               <Box>
                    <Box 
                       className='img2'
                      height='750px'
                      width='90%'
                      margin='auto'
                      marginTop=' 30px'
                      display=' flex'
                      flexDirection=' column'
                      justifyContent=' center'
                      alignItems=' center'
                      backgroundPosition='center'
                      backgroundSize='cover'
                       backgroundRepeat='no-repeat'
                      rowGap=' 20px'
                      bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1')">
                      <Box
                      //  className='text1'
                       color='white'
                       fontSize='26px'
                       marginTop= '15px'>YOUR NEW OUTLOOK</Box>
                      <Box
                         className='text2'
                         color='white'
                        fontSize='65px'
                        >Cruise 2023</Box>
                      <Button 
                      // className='button2'
                      border='none'
                      borderRadius='0px'
                      _hover={{ bg:'black'}}
                      backgroundColor='white'
                      color='black'
                      w='11%'
                      h='40px'
                      fontSize= '20px'
                      fontWeight= '400'
                      letterSpacing= '1px'>SHOP NOW</Button>
                        </Box>
                  </Box>
      {/* -----------------------textcontainer------------------------------- */}
                          <Box className='textcont'
                          w= '90%'
                          bgColor='#f6f6f6'
                          h='300px'
                          m= 'auto'
                          mt= '50px'
                          borderTop= '1px solid #dad8d8'
                          borderBottom= '1px solid #dad8d8 '
                          display= 'flex'
                          flexDirection= 'column'
                          justifyContent= 'center'
                          alignItems= 'center'
                          rowGap= '20px'
                          >
                             <Box 
                            //  className='textcont-1'
                             fontSize='22px'>DON'T MISS OUT</Box>
                             <Box
                              // className='textcont-2'
                             fontSize='40px'>New Arrivals</Box>
                             <Box 
                            //  className='textcont-3'
                            fontSize='22px'
                             >Christian Louboutin, Paris Texas, A.P.C., Victoria Beckham...</Box>
                             <Box className='textcont-4'>
                              <Button 
                              // className='textcont-but'
                              border='none'
                              borderRadius="0px"
                              _hover={{ bg:'black'}}
                              bgColor='black'
                              color='white'
                              h= '40px'
                              w='120%'
                              fontSize= '16px'
                              fontWeight='400'
                              letterSpacing= '1'>SHOP NOW </Button></Box>
                          </Box>
        {/*--------- ---------------bigimg--------------------------------- -------*/}
        <Box 
        // className='bigimg'
        w='90%'
        border='px solid red'
        display='flex'
        h=' 200px'
        m='auto'
        mt='50px'
        justifyContent= 'space-around'
        >
          <Box className='bigimg-1'>
            <Box 
            // className='bigtext-1'
            fontSize='24px'
            textAlign= 'center'
            >PARIS TEXAS X MYTHERESA</Box>
            <Box 
            // className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'>The Exclusive Capsule <br/> Collection</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box 
            // className='bigtext-1'
            fontSize='24px'
            textAlign= 'center'>Seasonal Flats</Box>
            <Box 
            // className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'>Because cozy feet are <br/> happy feet</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            <Box 
            // className='bigpic'
            w='90%'
            h='auto'
            m='auto'
            border='px solid red'
            display ='flex'
            justifyContent='space-between'
            columnGap= '30px'

            >
              <Box 
              // className='bigpic-1'
              h='auto'
              border='px solid red'
              w= '50%'
              >
                <Image 
                // className='bigimage' 
                w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1"/>
              </Box>
              <Box 
              // className='bigpic-2'
              width='50%'
              >
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img"
                  w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box 
                //  className="bigpic-2-2"
                 border='px solid red'      
                 w= '100%'
                 m='auto'
                 >
                
                  <Box 
                  // className='bigpic-2-2-buttondiv'
                  w='20%'
                  h='40px'
                  margin= 'auto'
                  mt= '85px'
                  >
                    <Button 
                    // className='bigpic-2-2-Button'
                    border='none'
                    _hover={{ bg:'black'}}
                    bgColor= 'black'
                    borderRadius='0px'
                    color='white'
                    h= '40px'
                    w='100%'
                    fontSize= '13px'
                    fontWeight= '400'
                    letterSpacing= '1px'
                    >SHOP NOW </Button></Box>
                  <Box 
                  // className='hr'
                  marginTop= '100px'
                  />
                  <Text 
                  className='bigpic-2-2-textsmall'
                  fontSize='24px'
                  textAlign='center'
                  >CONTEMPORARY JEWELRY</Text>
                  <Text 
                  // className='bigpic-2-2-text'
                   textAlign= 'center'
                   fontSize= '40px'
                   mt= '18px'
                  >Craft and style rolled into <br/> one</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image
                  //  className="bigpic-2-img"
                  w='100%'
                   src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
        <Box 
        // className='twobutton'
        w='90%'
        border='px solid red'
        m= 'auto'
        mt= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        
        >
          <Box 
          // className='twobuttondiv
          border='px solid red'
         
          >
          <Button 
          // className='twobutton-1'
          _hover={{ bg:'black'}}
          border='none'
          borderRadius='0px'
          bgColor= 'black;'
          color='white'
          h= '40px'
          w='100%'
          fontSize ='13px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button 
          //  className='twobutton-1'
          _hover={{ bg:'black'}}
          borderRadius='0px'
            border='none'
            backgroundColor= 'black;'
            color='white'
            h= '40px'
            w='100%'
            fontSize ='13px'
            fontWeight= '400'
            letterSpacing= '1px'
           >SHOP NOW</Button>
          </Box>
        </Box>
       
  {/* ------------------------------nextbigdiv------------------------------------------------ */}
         
          <Box className='bigimg'
           width='90%'
            border='px solid red'
            display='flex'
            height=' 200px'
            margin='auto'
            marginTop='50px'
            justifyContent='space-around'
          >
          <Box className='bigimg-1'>
            <Box className='bigtext-1'
             fontSize='24px'
             textAlign= 'center'
            >WHAT'S THE ANGLE?</Box>
            <Box className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'
            >Sharpen your edit of <br/> winter-sun shades</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box className='bigtext-1'
            fontSize='24px'
             textAlign= 'center'
            >GLAMAROUS GOWNS</Box>
            <Box className='bigtext-2'
             textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'
            >Designed to make Link <br/>statement</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            
            <Box 
            // className='bigpic'
            w='90%'
            h='auto'
            m='auto'
            border='px solid red'
            display ='flex'
            justifyContent='space-between'
            columnGap= '30px'

            >
              
              <Box 
              // className='bigpic-2'
              width='50%'
              >
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img"
                  w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box 
                //  className="bigpic-2-2"
                 border='px solid red'      
                 w= '100%'
                 m='auto'
                 >
                
                  <Box 
                  // className='bigpic-2-2-buttondiv'
                  w='20%'
                  h='40px'
                  margin= 'auto'
                  mt= '85px'
                  >
                    <Button 
                    // className='bigpic-2-2-Button'
                    border='none'
                    _hover={{ bg:'black'}}
                    bgColor= 'black'
                    borderRadius='0px'
                    color='white'
                    h= '40px'
                    w='100%'
                    fontSize= '13px'
                    fontWeight= '400'
                    letterSpacing= '1px'
                    >SHOP NOW </Button></Box>
                  <Box 
                  // className='hr'
                  marginTop= '100px'
                  />
                  <Text 
                  className='bigpic-2-2-textsmall'
                  fontSize='24px'
                  textAlign='center'
                  >YOUR NEW FLEX</Text>
                  <Text 
                  // className='bigpic-2-2-text'
                   textAlign= 'center'
                   fontSize= '40px'
                   mt= '18px'
                  >The Antigona Stretch Bag  <br/>from Givenchy</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image
                  //  className="bigpic-2-img"
                  w='100%'
                   src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
              <Box 
              // className='bigpic-1'
              h='auto'
              border='px solid red'
              w= '50%'
              >
                <Image 
                // className='bigimage' 
                w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1"/>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
<Box 
        // className='twobutton'
        width='90%'
        border='px solid red'
        margin= 'auto'
        marginTop= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        >
          <Box 
          // className='twobuttondiv
          // width='10%'
          // height='40px'
          // margin= 'auto'
          >
          <Button 
          // className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
          border='none'
          backgroundColor= 'black;'
          color='white'
          height= '40px'
          width='100%'
          fontSize ='13px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button 
          //  className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
            border='none'
            backgroundColor= 'black;'
            color='white'
            height= '40px'
            width='100%'
            fontSize ='13px'
            fontWeight= '400'
            letterSpacing= '1px'
           >SHOP NOW</Button>
          </Box>
        </Box>
       

{/* --------------------------------------------------------------------------------------------------- */}
                  <Box 
                  
                  border='px solid red'
                  w="90%"
                  margin='auto'
                  marginTop='20px'
                  textAlign='center'>
                    <Text
                    textAlign= 'center'
                    fontSize= '24px'
                    color="black">
                      PREP SCHOOL
                    </Text>
                    <Box
                    textAlign= 'center'
                    marginTop='10px'
                    fontSize= '40px'
                    color="black">
                    Where polished is the guiding<br/> principle
                    </Box>
                    
                  </Box>


    {/* ----------------------------fourimages------------------------------------------ */}
                <Box
                border="px solid red"
                width="90%"
                display="flex"
                margin='auto'
                marginTop='20px'
                gap="30px"
                color="black"
                fontSize='24px'
                textAlign="center"
                >
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_1_2x_20221212102029.jpg"/>
                  <Text>Self-Portrait</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_2_2x_20221212102030.jpg"  />
                  <Text>Gucci</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_3_2x_20221212102029.jpg" />
                  <Text>Valentino</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_4_2x_20221212102028.jpg"/>
                  <Text>Oscar de la Renta</Text>
                  </Box>
                </Box>
        <Box 
        // className='twobutton'
        width='90%'
        border='px solid red'
        margin= 'auto'
        marginTop= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        >
         
          <Button 
          // className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
          border='none'
          backgroundColor= 'black;'
          color='white'
          height= '40px'
          width='10%'
          fontSize ='16px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          
          </Box>
    {/* ---------------------------------last section--------------------------------------------- */}
          <Box
          w='90%'
          bgColor='#f6f6f6'
          borderTop= '1px solid #dad8d8'
          borderBottom='1px solid #dad8d8'
          margin='auto'
          marginTop='100px'
        
          
          >
            <Box>
            <Text
            fontSize='27px'
            color="black"
            textAlign='center'
            >MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</Text>
            <br/>
            <Text>Mytheresa is the most-trusted source for finding the
               finest selection of luxurious womenswear. Our expert buying 
               team travels the globe with Link simple mission: to bring 
               international fashion’s finest directly to your doorstep. 
               With our runway-fresh new arrivals every week, an easy-to-
               navigate platform and Link mobile app to shop on-the-go, we 
               ensure Link boutique-like feeling for Link unique shopping experience.</Text>
            </Box>

           <Box
            display='flex'
            justifyContent='space-evenly'
            gap="20px"
            border="px solid red"
            width='100%'
            marginTop='20px'
            >
            <Box
            width="45%"
            border="px solid black"
            color="black">
            <Text fontSize='24px' color="black">A LUXURY SHOPPING EXPERIENCE</Text>

              <ul>
                <li>The finest edit of more than 200 international luxury brands</li>
                <li>900 new arrivals each week directly from the runway</li>
                <li>Well-curated selection of items for Link boutique-like shopping experience</li>
                <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
              </ul> 
            </Box>
            <Box
            width="48%"
            border="px solid black"
            color="black">
            <Text fontSize='24px' color="black">SERVICE AND QUALITY</Text>

          <ul>
            <li>Authentic products guaranteed</li>
            <li>Fast, reliable delivery within 3 business days</li>
            <li>Free returns and exchanges within 30 days</li>
            <li>Exceptional customer service available 24 hours Link day, 7 days Link week in 13 different languages</li>
          </ul> 
            </Box>
           </Box>
         <br/>
          <Text>Whether you are looking for the latest 
            Bottega Veneta pouch for everyday wear, Jimmy
             Choo heels for an upcoming wedding, or Link Burberry
              scarf to gift Link friend, our edit comprises the key
               pieces that you need for an elegant season ahead.
                With our assortment of timeless items and exclusive
                 capsule collections, which includes everything from
                  the understated luxury of Loro Piana and avant-garde
                   appeal of Maison Margiela, to Saint Laurent bags and 
                   time-honored Gucci loafers; you are certain to find 
                   everything you want to build your dream closet.</Text>
                   <br/>
          
          <Text>Get inspired by our coveted edit, which makes occasion 
            dressing easy by breaking down our buy into easy-to-shop 
            categories such as fashion sneakers or exquisite gowns. 
            Delve into our exclusive selection of designer must-haves.
             Our exceptional customer service team is here to help you
              through every step of the order process, and beyond, to make
               sure you start every day dressed to conquer.</Text>
          <br/>
          <Text>Shop with us and discover why Mytheresa is your final
             destination for online shopping for women.</Text>
          </Box>
       
          </>
  
}

export default WomenPage