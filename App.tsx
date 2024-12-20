import NavigatorContainerTemplate from '@src/navigation/NavigatorContainerTemplate';
import React, {useEffect} from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import Colors from '@src/styles/Colors';

const App = () => {
    useEffect(() => {
        RNBootSplash.hide();
    }, []);


    return (
        <GestureHandlerRootView style={styles.rootContainer}>
            <Provider store={store}>
                <SafeAreaProvider style={styles.container}>
                    <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.white} />
                    <Host>
                        <NavigatorContainerTemplate />
                    </Host>
                </SafeAreaProvider>
            </Provider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
});

export default App;
