import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  useToast,
  Progress,
  HStack,
  Image,
  Heading,
  SimpleGrid,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Grid,
  GridItem,
  Divider,
  Select,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData } from "../Redux/AppReducer/action";



function Checkout() {
  const [Cart_Data, set_Cart_Data] = useState([]);
  const [total, settotal] = useState(0);
  const [progress, setprogress] = useState(33.33);
  const [termserror, settermserror] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pincode: "",
    mobile: "",
    alternateMobile: "",
    name: "",
    city: "",
    state: "",
    landmark: "",
    area: "",
    flat: "",
    makeprimary: false,
    terms: false,
  });
  const bag=useSelector((store)=>store.AppReducer.bag);
    const dispatch=useDispatch()

    useEffect(()=>{
      
        dispatch(getCartData())
      
    },[bag.length,dispatch])

  const handleTotal = () => {
    let Total = 0;
    bag.map((ele) => {
      Total += Math.floor(ele.price);
    });
    settotal(Total);
  };
 
  useEffect(() => {
    handleTotal();
  }, [bag]);



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
    settermserror(formData.terms);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.terms == false) {
      toast({
        title: "Alert----.",
        description: "Please Accept Terms And Conditions.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Adress.",
        description: "New Adress Added Succesfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setStep((stp) => stp + 1);
      setprogress((prog) => prog + 33.33);
    }
   
  };
  return (
    <Box w="90%">


    <Box display={"flex"} mt="90px" mb="20px" >
      <Box
        ml="30px"
        w="70%"
        backgroundColor={"#fafafa"}
        boxShadow="2px 2px 0 #e3e3e3"
      >
        <Box w="100%" my="30px">
          <Progress
            colorScheme="green"
            size="sm"
            w="58%"
            m={"auto"}
            value={progress}
          />
        </Box>
        {step === 1 ? (
          <Box display={"flex"} ml="30px" w="100%">
            <form
              style={{ width: "44%", lineHeight: 3 }}
              onSubmit={handleSubmit}
            >
              <Input
                borderRadius={"0"}
                type="text"
                isRequired="true"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                name="mobile"
                isRequired="true"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="Alternate Mobile:"
                type="text"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                name="name"
                placeholder="Name:"
                isRequired="true"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="Flat, House no., Building, Company, Apartment"
                type="text"
                name="flat"
                isRequired="true"
                value={formData.flat}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder=" Area, Street, Sector, Village(optional)"
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="City:"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                placeholder="State:"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                isRequired="true"
                name="landmark"
                placeholder="Landmark:"
                value={formData.landmark}
                onChange={handleChange}
              />
              <VStack lineHeight={"1"} align="flex-start">
                <Box>
                  <input
                    borderRadius={"0"}
                    name="makeprimary"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  Make as Primary Address
                </Box>
                <Box>
                  <input
                    borderRadius={"0"}
                    name="terms"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  Terms and Conditions
                </Box>
              </VStack>
              <Button type="submit" w="140px">
                Next
              </Button>
            </form>
            <Box
              pt="20px"
              mx="10px"
              mt="4px"
              backgroundColor={"#fafafa"}
              borderLeft="3px solid #e45301"
              boxShadow="2px 2px 0 #e3e3e3"
              px="30px"
              fontFamily="Open Sans Light"
              h="379px"
              w="48%"
              textAlign={"left"}
            >
              <NavLink
                to="/cart"
                borderRight={"1px solid #666"}
                borderBottom="1px solid #666"
                borderTop={"1px solid #666"}
                px="4px"
                py="3px"
              >
                <ArrowLeftIcon mr="10px" />
                Back to Saved Address
              </NavLink>
              <Box>
                <Text my="10px" color="#666">
                  Why Accurate address is important?
                </Text>
                <p style={{ color: "grey", fontSize: "14px" }}>
                  Make sure you get your products on time. If the address is not
                  entered correctly, your package may be returned undelivered.
                  You will then have to place new order. Save time and avoid
                  frustration by entering the address information in appropriate
                  boxes and double checking for typos and other errors.
                </p>
                <Text my="10px" color="#666">
                  A properly filled delivery information helps us in two ways:
                </Text>
                <Text mt="10px" color={"gray"}>
                  1.It helps us deliver you the product(s) on time without any
                  delay
                </Text>
                <Text color={"gray"}>
                  2.It saves a lot of time & effort spent by our delivery team
                  to identify your address.
                </Text>
              </Box>
              <Box mt="30px" border={"1px solid #666"} w="200px" px="1">
                <Text>For help please contact us on</Text>
                <Text>Call us on : +91 8448449073</Text>
              </Box>
            </Box>
          </Box>
        ) : step == 2 ? (
          <CheckForm1
            setprogress={setprogress}
            Cart_Data={Cart_Data}
            setStep={setStep}
          />
        ) : (

          <CheckForm2 setprogress={setprogress} setStep={setStep} />
        )}
      </Box>
      <Box
        h="230px"
        pb="20px"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        w="30%"
      >
        <Box
          bgColor={"#4d4d4d"}
          w="100%"
          h="40px"
          mb={"10px"}
          display="flex"
          px="7px"
          justifyContent="space-between"
        >
          <Text color="white" alignItems={"center"} textAlign="left" pt="5px">
            Payment Summary
          </Text>
          <Image
            filter={"invert(100%)"}
            w="20px"
            src="https://www.industrybuying.com/static/desktop-payment/assets/svg/rupee-circle-icon.svg"
          />
        </Box>

        <VStack>
          <Box
            display={"flex"}
            h="30px"
            justifyContent="space-between"
            w="90%"
            margin="auto"
            py="20px"
          >
            <Text>Subtotal:Rs.</Text>
            <Text>{total.toLocaleString()}</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            h="30px"
            w="90%"
            margin="auto"
            py="20px"
          >
            <Text>Shipping Charges</Text>
            <Text color="#3da73a">FREE</Text>
          </Box>
          <Box
            fontWeight={"bold"}
            display={"flex"}
            h="30px"
            justifyContent="space-between"
            w="90%"
            margin="auto"
            py="20px"
            fontSize={"20px"}
          >
            <Text>Total Price</Text>
            <Text color="#e45301">{total.toLocaleString()}</Text>
          </Box>
          <HStack
            w="100%"
            px="10px"
            mt="10px"
            borderTop={"0.5px solid RGBA(0, 0, 0, 0.36)"}
          >
            <Image
              w="30px"
              h="30px"
              src="https://www.industrybuying.com/static/desktop-payment/assets/svg/delivery-truck.svg"
              alt="Free Shipping"
            />
            <Text color={"grey"} fontSize="12px">
              Shipping charges applicable as per your pincode (759027)
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>

      <Footer/>
    </Box>
  );
}


export default Checkout ;



const CheckForm1 = ({ setStep, setprogress, Cart_Data }) => {
    const handle1 = () => {
      setStep((stp) => stp - 1);
      setprogress((prog) => prog - 33.33);
    };
    const handle2 = () => {
      setStep((stp) => stp + 1);
      setprogress((prog) => prog + 33.33);
    };
    const bag=useSelector((store)=>store.AppReducer.bag);
    const dispatch=useDispatch()
     
    return (
      <>
        <Text margin={"auto"} display="flex" w="200px" my="30px">
          Product Preview
        </Text>
        <Box align="center" m="20px" >
            {
            bag.length && bag.map((item)=>{
            return(
              <Box p="50px" w="90%" display={"flex"}  border={"1px solid gray"} key={item.id}>
                <Box  w="100%" >  

                <Text paddingLeft="5px" color="gray">{item.title}</Text>

                <Text  color="black">{item.pa1}</Text>
              
                <Text fontSize="18px" color="black">{item.category}</Text>
             
                <Text fontWeight='bold' color="black">{`Price : ${item.price}`}</Text>
                
                <Button onClick={()=>{dispatch(deleteCartData(item.id))}} >Delete</Button>
                
                </Box>

                <Box boxSize={["80px","90px","140px"]} >
              
                  <Image 
                  borderRadius='10px'
                  bgColor="white"
                  h="100%"
                  src={item.lazyloaded} 
                  />
                </Box>
            
             </Box>
            )
          })}      
      </Box>
        <Button onClick={handle1}>Back</Button>
        <Button onClick={handle2}>Next</Button>
      </>
    );
  };
  const CheckForm2 = ({ setprogress, setStep }) => {
    const [card, setcard] = useState("");
    const [cvv, setcvv] = useState("");
    const [date, setdate] = useState("");
    const [error, seterrr] = useState({ err1: true, err2: true, err3: true });
    const toast = useToast();
    const navigate=useNavigate() 
    const handle1 = () => {
      setStep((stp) => stp - 1);
      setprogress((prog) => prog - 33.33);
    };
    const handlecardNo = (e) => {
      setcard(e.target.value);
      if (card.length == 15) {
        seterrr({ ...error, err1: false });
      } else if (card.length < 15 || card.length > 15) {
        seterrr({ ...error, err1: true });
      }
    };
    const handlecvv = (e) => {
      if (cvv.length == 2) {
        seterrr({ ...error, err2: false });
      } else if (cvv.length < 2 || cvv.length > 2) {
        seterrr({ ...error, err2: true });
      }
      setcvv(e.target.value);
    };
    const handleOrder = () => {
      if (error.err1 == false && error.err2 == false && error.err3 == false) {
        toast({
          title: "Order...",
          description: "Order Placed Succesfully.",
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate(`/womens`)
      } else {
        toast({
          title: "Order...",
          description: "Please Add All Details...",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    };
    return (
      <Box h="330px" w="70%" margin={"auto"}>
        <Text textAlign={"center"} fontSize="40px">
          Make Payment
          <Box>
            <Heading
              w="100%"
              fontSize={"14px"}
              color="#e45301"
              textAlign={"left"}
              fontWeight="normal"
            >
              Enter Card Details
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[3, 2]}>
                <InputGroup my="20px" size="sm">
                  <InputLeftAddon
                    bg="gray.50"
                    _dark={{
                      bg: "gray.800",
                    }}
                    color="gray.500"
                    rounded="md"
                  >
                    Card No
                  </InputLeftAddon>
                  <Input
                    onChange={handlecardNo}
                    value={card}
                    type="number"
                    focusBorderColor="brand.400"
                    rounded="md"
                  />
                  <Text
                    fontSize={"9px"}
                    color="red"
                    position={"absolute"}
                    top="34px"
                  >
                    {error.err1 ? "Card No Must Be 16-digit" : ""}
                  </Text>
                </InputGroup>
                {/* cvv and expary */}
                {/* <Grid my="50px" templateColumns={"repeat(2,1fr)"} gap="2px" > */}
                <Box display={"flex"} justifyContent="space-between">
                  <InputGroup my="30px" size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      cvv
                    </InputLeftAddon>
                    <Input
                      w="50px"
                      onChange={handlecvv}
                      value={cvv}
                      type="number"
                      focusBorderColor="brand.400"
                      rounded="md"
                    />
                    <Text
                      fontSize={"9px"}
                      color="red"
                      position={"absolute"}
                      top="34px"
                    >
                      {error.err2 ? "CVV Must Be 3-digit" : ""}
                    </Text>
                  </InputGroup>
                  <InputGroup size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      Expiry
                    </InputLeftAddon>
  
                    <Input
                      w="130px"
                      onChange={(e) => {
                        seterrr({ ...error, err3: false });
                        setdate(e.target.value);
                      }}
                      value={date}
                      type="date"
                      isRequired="true"
                      focusBorderColor="brand.400"
                      rounded="md"
                    />
                    <Text
                      fontSize={"9px"}
                      color="red"
                      position={"absolute"}
                      top="34px"
                    >
                      {error.err3 ? "Enter correct Expiry Date " : ""}
                    </Text>
                  </InputGroup>
                </Box>
              </FormControl>
            </SimpleGrid>
          </Box>
        </Text>
        <Box w="40%" justifyContent={"space-between"} display="flex">
          <Button
            backgroundColor={"#e45301"}
            _hover={{ color: "white", backgroundColor: "#e45301" }}
            onClick={handle1}
          >
            Back
          </Button>
          <Button
            backgroundColor={"#e45301"}
            _hover={{ color: "white", backgroundColor: "#e45301" }}
            onClick={handleOrder}
          >
            Place Order{" "}
          </Button>
        </Box>
      </Box>
    );
  };