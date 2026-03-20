import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';
import Colors from '@/constants/Colors';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          This app uses file-based routing with Expo Router. Each file in the
          app/ directory becomes a route automatically.
        </Text>
        <View style={styles.linkContainer}>
          <ExternalLink
            style={styles.helpLink}
            href="https://docs.expo.dev/router/introduction/">
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              Learn more about Expo Router
            </Text>
          </ExternalLink>
        </View>
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
  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
