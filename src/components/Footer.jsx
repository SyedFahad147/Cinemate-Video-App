import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} p={'10'} minH={'40'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to Get Latest Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
        <Heading size={'md'} >
        CINEMATE
        </Heading>
        <Text>
            @All Rights Reserved
        </Text>

        </VStack>

        <VStack w={'full'}>
           <Heading size={'md'} colorScheme='purple'>
            Social Media
           </Heading>
           <Button variant={'link'} colorScheme='purple'>
            <a target={'blank'} href="https://youtube.com"><AiFillYoutube /></a>
           </Button>

           <Button variant={'link'} colorScheme='purple'>
            <a target={'blank'} href="https://instagram.com"><AiFillInstagram /></a>
           </Button>

           <Button variant={'link'} colorScheme='purple'>
            <a target={'blank'} href="https://github.com"><AiFillGithub/></a>
           </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
