import React, { useState } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Switch } from 'react-native';

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const toggleNotifications = () => {
        setNotificationsEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: notificationsEnabled
                        ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Drawing-of-a-Dog-Home-400-x-400-1.webp/400px-Drawing-of-a-Dog-Home-400-x-400-1.webp.png'
                        : 'https://as2.ftcdn.net/v2/jpg/03/06/93/49/500_F_306934952_5W5KV8MwOYgdu3npZAKF1ZywGAbmeuTZ.jpg',
                }}
            />
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                // trackColor={notificationsEnabled ? "#767577": "#81b0ff" }
                thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotifications}
                value={notificationsEnabled}
            />
            <Text>{notificationsEnabled ? 'Уведомления включены' : 'Уведомления выключены'}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 500,
        height: 500,
        margin: 10,
    },
});