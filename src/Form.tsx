import React from "react";
import { Button, TextInput } from "react-native";
import { Routes } from "../utils/Routes";

function FormScreen({ navigation, route } : any) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Submit"
          onPress={() => {
            // Passsing params back to home screen
            navigation.navigate({
              name: Routes.Home,
              params: { message: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

  export default FormScreen;