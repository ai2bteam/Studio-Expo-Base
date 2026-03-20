import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Expo</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>
        <View
          style={styles.codeBlock}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <Text style={{ fontFamily: 'SpaceMono' }}>app/(tabs)/index.tsx</Text>
        </View>
        <Text
          style={styles.infoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  infoContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  infoText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  codeBlock: {
    borderRadius: 3,
    paddingHorizontal: 4,
    marginVertical: 7,
  },
});
