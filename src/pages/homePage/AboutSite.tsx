import { Flex, Spinner, Text, Image } from '@chakra-ui/react';
import React from 'react';

type AboutSiteProps = {

};

const AboutSite: React.FC<AboutSiteProps> = () => {

    return (
        <Flex
            width={'80%'}
            // height={'100px'}
            flexDirection={'column'}
            backdropFilter={'blur(100px)'}
            borderRadius={10}
            justify={'center'}
            align={'center'}
            border={'1px solid purple'}
            boxShadow={'2xl'}
            _hover={{
                boxShadow: 'dark-lg'
            }}
        >
            <Flex
                height={'40px'}
                width={'100%'}
                // border={'1px solid white'}
                justify={'center'}
                align={'center'}
            >
                <Text
                    color={'white'}
                    fontSize={30}
                    fontWeight={50}
                >
                    WHAT IS SAITAMA??
                </Text>
            </Flex>
            <Flex
                width={'95%'}
                height={0.25}
                border={'0.5px solid white'} />
            <Flex
                // height={'60px'}
                width={'93%'}
                align={'center'}
                justify={'space-evenly'}
                p={4}
                flexDirection={'column'}
            // display={props.loading ? 'flex' : 'none'}
            >
                <Image
                    src='/images/leaf.png'
                    height={'100px'}
                />
                <Flex
                    width={'100%'}
                >
                    <Text
                        color={'white'}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of
                        a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                        have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default AboutSite;