import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, from, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ThemeProvider } from "styled-components"
import { getCurrentTheme } from './Theme';
import { useFonts } from 'expo-font';

const API_URL = 'https://api-sigma-invest.herokuapp.com'
//const API_URL = 'https://localhost:5001'

const links = from([
    new HttpLink({ uri: `${API_URL}/graphql?` }),
])

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzkzMzIxODAsImV4cCI6MTY0MTc1MTM4MCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmJhZGVldi5pbmZvIiwiYXVkIjpbImh0dHBzOi8vYXV0aC5iYWRlZXYuaW5mby9yZXNvdXJjZXMiLCJTaWdtYS5BcGkiXSwiY2xpZW50X2lkIjoic2lnbWFfYXBpIiwic3ViIjoiZDEwODdlYTEtNmZjZi00Y2JmLTg4ZWYtNTVjM2I0NmQwNzVjIiwiYXV0aF90aW1lIjoxNjM5MzMyMTc3LCJpZHAiOiJHb29nbGUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiU2lnbWEuQXBpIl0sImFtciI6WyJleHRlcm5hbCJdfQ.adpUXRUeNdpmOuHH5JaEw5so2-eClHJISn8na3rU_PoQaLUkfIcUp1fn5kQrEH3UAfB6gKZTLq1Fad4zK4vJRCIHHXJXI45CRCk2MQGf_N2xKJLdhqjtFRbbl-WC5Km6mmUIPqEOvijcNIYJF5aX1axiMuBfloIP9Bb8tbrG8in1mEGg2MqUHn8x4ButkB3zkViI6pruHPLZjfQKKOMpsmI-pUhTxyODy46hcRg7dVjxrpUFniKcRzocCbTFLoz6ngD_Y7usoh_QvNoxsv-uXvbH35KQlyaJ2zUi04T3VTP3cdidc_7MH-zAfKQTo38yo1_0l3XD3ZipAVnASROd_Q",
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(links),
    cache: new InMemoryCache(),
})

const theme = getCurrentTheme()

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        'antoutline': require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
        'antfill': require('@ant-design/icons-react-native/fonts/antfill.ttf')
    })

    if (!isLoadingComplete || !loaded) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <ApolloProvider client={client}>
                    <ThemeProvider theme={theme}>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </ThemeProvider>
                </ApolloProvider>
            </SafeAreaProvider>
        );
    }
}
