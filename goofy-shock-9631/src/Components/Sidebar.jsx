import React from 'react'
import {Box,Heading} from '@chakra-ui/react';
// import '../Pages/Sidebar.css';
import '../Pages/Sidebar.css';

function Sidebar() {
  return (
    <Box>
        
       <Box display={['none','none','block']} className="sidebar"
      //  position='fixed'
       width='250px'
       top='0'
       left='0'
       bottom='0'
       background='#ffffff'
       border='px solid red'
       paddingTop='0px'
       >
        <Heading as='h1'
        display= 'block'
        padding= '10px 20px'
        color= 'black'
        textDecoration= 'none'
        
        letterSpacing= '0px'
        fontWeight= 'bold'
        margin= '0'
        fontSize= '16px'
        marginLeft='30px'
        textTransform='uppercase'
        >Current Week</Heading>
    

        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Friday</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Thursday</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Wednesday</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Tuesday</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Monday</label><br/>

        <a href=''>Previous Weeks</a>
        <a href=''>Loungewear</a>
        <a href=''>Party</a>
        <a href=''>Vacation</a>
        <a href=''>Ski</a>
        <a  href=''>Outerwear</a>
        <a href=''>Essentials</a>
        <hr/>
        <details>
          <summary>Categories  {`>`}</summary>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Accessories</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bags</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Clothing</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Jewelry</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Shoes</label><br/>
        </details>
        <hr/>
        <Box>
        <details>
          <summary >Designer {`>`}</summary>
        
        <input style={{marginTop:"10px", position:"sticky",backgroundColor:"white",border:'1px solid gray'}} id='sidebarinput' type="text" placeholder="Search here"/><br/>
           
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Studios</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami Jeans</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Balenciago</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bonger</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Studios</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami Jeans</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Balenciago</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bonger</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Bottega</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Acne Sece</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Ami T-shirt</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Rembo</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Amobod</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gucci</label><br/>
        </details>
        </Box>
        <hr/>
      <details>
        <summary>Colors {`>`}</summary>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Beige</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Black</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Blue</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Gold</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Grey</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Multicoloured</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Green</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Red</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Blue</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Brown</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>White</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Yellow</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Purple</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Silver</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>White</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Orange</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Pink</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Red</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Neutrals</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Yellow</label><br/>
      </details>
      <hr/>
      <details>
          <summary>Pattern {`>`}</summary>
        
     
           
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Animal-Print</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Checked</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Embellished</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Embroidered</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Exotic</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Floral</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Patterned</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Plain</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Printed</label><br/>
        <input id='sidebarinput' type='checkbox'/><label id='sidebarlabel'>Striped</label><br/>
    </details>
    <hr/>
       </Box>

    </Box>
  )
}

export default Sidebar