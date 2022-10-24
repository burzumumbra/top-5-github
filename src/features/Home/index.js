import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, Box, Heading, VStack, HStack, Button, Divider, ScrollView } from "native-base";

const Home = () => {

  const users = [ 
    'burzumumbra',
    'johndoe',
    'johndoe',
    'johndoe',
    'johndoe',
  ];


  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <HStack space={2} alignItems="center" justifyContent="center" p={4} backgroundColor='primary.700'>
          <Heading color='white' size="md">Top 5 Github Users</Heading>
        </HStack>
        <ScrollView>
          <Box>
            <Divider />
            <VStack space={2} alignItems="center" justifyContent="space-between" p={4}> 
              {users.map((user, index) => (
                  <Box>
                    <Button width={200} onPress={() => console.log("hello world")}>{user}</Button>
                  </Box>
              ))} 
            </VStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
