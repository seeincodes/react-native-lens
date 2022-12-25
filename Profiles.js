import {
    Profiles
} from '@lens-protocol/react-native-lens-ui-kit'

const App = ({
    navigation
}) => {
    return (
        <Profiles
            onProfilePress={
                profile => navigation.navigate(
                    "ProfileView", { profile }
                )
            }
        />
    );
}

export default App;