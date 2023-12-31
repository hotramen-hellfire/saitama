import { Community } from '@/src/components/Atoms/communitiesAtom';
import { Post } from '@/src/components/Atoms/postsAtom';
import { firestore } from '@/src/firebase/clientApp';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
type TopBoardsProps = {

};

const TopBoards: React.FC<TopBoardsProps> = () => {
    const [communities, setCommunities] = useState<Community[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getBoardRecommendations = async () => {
            setLoading(true);
            try {
                const communityQuery = query(collection(firestore, 'communities'), orderBy('activity', "desc"), limit(10));
                const communityDocs = await getDocs(communityQuery);
                const communities = communityDocs.docs.map((doc) => ({
                    ...doc.data(),
                }));
                setCommunities(communities as Community[])
            } catch (error: any) {
                console.log("getBoardRecommnedations error: ", error)
            }
            setLoading(false);
        }
        getBoardRecommendations();
    }, [])
    useEffect(() => {
        const getPostRecommendations = async () => {
            setLoading(true);
            try {
                const communityQuery = query(collection(firestore, 'posts'), orderBy('activity', "desc"), limit(10));
                const communityDocs = await getDocs(communityQuery);
                const communities = communityDocs.docs.map((doc) => ({
                    ...doc.data(),
                }));
                setPosts(communities as Post[])
            } catch (error: any) {
                console.log("getPostRecommnedations error: ", error)
            }
            setLoading(false);
        }
        getPostRecommendations();
    }, [])
    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            width={'90%'}
            justify={'space-evenly'}
        >
            <Flex
                mb={1}
                width={{ base: '100%', md: '45%' }}
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
                        TOP BOARDS
                    </Text>
                </Flex>
                <Flex
                    width={'95%'}
                    height={0.25}
                    border={'0.5px solid white'} />
                <Flex
                    width={'93%'}
                    flexWrap={'wrap'}
                    justify={'center'}
                    align={'center'}
                    height={'50px'}
                    flexDirection={'column'}
                    maxHeight={'250px'}
                    display={loading ? 'flex' : 'none'}
                >
                    <Spinner
                        size={'lg'}
                        color='white'
                    />
                </Flex>
                <Flex
                    width={'93%'}
                    flexWrap={'wrap'}
                    align={'center'}
                    flexDirection={'column'}
                    minHeight={'50px'}
                    maxHeight={'250px'}
                    display={loading ? 'none' : 'flex'}
                >
                    {communities.map(({ communityID }: Community) => {
                        return (
                            <Text
                                key={communityID}
                                color={'white'}
                                onClick={() => router.push('/b/' + communityID)}
                                cursor={'pointer'}
                                _hover={{
                                    textDecoration: 'underline',
                                    color: 'yellow'
                                }}
                            >
                                {communityID}
                            </Text>
                        )
                    })}
                </Flex>
            </Flex >
            <Flex
                mt={1}
                width={{ base: '100%', md: '45%' }}
                // height={'100px'}
                flexDirection={'column'}
                backdropFilter={'blur(100px)'}
                borderRadius={10}
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
                    justify={'center'}
                    align={'center'}
                >
                    <Text
                        color={'white'}
                        fontSize={30}
                        fontWeight={50}
                    >
                        TOP POSTS
                    </Text>
                </Flex>
                <Flex
                    width={'95%'}
                    height={0.25}
                    border={'0.5px solid white'} />
                <Flex
                    width={'93%'}
                    flexWrap={'wrap'}
                    justify={'center'}
                    align={'center'}
                    height={'50px'}
                    flexDirection={'column'}
                    maxHeight={'250px'}
                    display={loading ? 'flex' : 'none'}
                >
                    <Spinner
                        size={'lg'}
                        color='white'
                    />
                </Flex>
                <Flex
                    width={'93%'}
                    flexWrap={'wrap'}
                    align={'center'}
                    flexDirection={'column'}
                    minHeight={'50px'}
                    maxHeight={'250px'}
                    display={loading ? 'none' : 'flex'}
                >
                    {posts.map(({ title, id, communityID }: Post) => {
                        return (
                            <Text
                                key={id}
                                color={'white'}
                                onClick={() => { router.push('/b/' + communityID + '#' + id) }}
                                cursor={'pointer'}
                                _hover={{
                                    textDecoration: 'underline',
                                    color: 'yellow'
                                }}
                            >
                                {title}
                            </Text>
                        )
                    })}
                </Flex>
            </Flex >
        </Flex >
    )
}
export default TopBoards;