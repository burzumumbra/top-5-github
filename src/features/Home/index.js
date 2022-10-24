import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, Text, Box, Heading, VStack, HStack, Button, Divider, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const navigation = useNavigation();

  const users = [ 
    "GrahamCampbell","fabpot","weierophinney","rkh","josh"
  ];

  const navigateTo = (user) => { 
    navigation.navigate('Profile', {username: user});
  }


  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <HStack space={2} alignItems="center" justifyContent="center" p={4} backgroundColor='primary.700'>
          <Heading color='white' size="md">Top 5 Github Users</Heading>
        </HStack>
        <HStack space={2} alignItems="center" justifyContent="center" p={4} >
          <Text>Tap the username to see more information</Text>
        </HStack>
        <ScrollView>
          <Box>
            <Divider />
            <VStack space={2} alignItems="center" justifyContent="space-between" p={4}> 
              {users.map((user, index) => (
                  <Box>
                    <Button width={200} onPress={ () => navigateTo(user) }>{user}</Button>
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
