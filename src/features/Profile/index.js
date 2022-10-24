import { useEffect, useState } from "react";
import { NativeBaseProvider, Avatar, Box, HStack, VStack, Text, Image, Divider } from "native-base";
import useSWR from 'swr';
import { API_URL } from "../../api/constants";

const fetcher = (url) => fetch(url).then((res) => res.json());


const Profile = ({route, navigation}) => {

  const { username } = route.params;
  const URL = `${API_URL}${username}`;
  const { data, error } = useSWR(URL, fetcher)
  const [profile, setProfile] = useState({});

  useEffect(() => { console.log(data); setProfile(data) }, [data]);

  
  return (
    <NativeBaseProvider>
    {profile && (
      <Box  p={2}>
        <HStack p={2}>
          <Avatar source={{uri: profile.avatar_url}} alt={profile.login} marginRight={2} />
          <VStack>
            <Text>{profile.name}</Text>
          <Text>{profile.location}</Text>
          </VStack>
          
        </HStack>
        <Divider />
      </Box>
    )}
    </NativeBaseProvider>
  );

};

export default Profile;
