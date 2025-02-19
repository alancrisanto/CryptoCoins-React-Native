import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={<Image source={require("@/assets/images/crypto.jpg")} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Welcome to my App!</ThemedText>
				<HelloWave />
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">About the App</ThemedText>
				<Text style={styles.text}>
					This app provides real-time information about various cryptocurrencies. You can search for coins, view their
					details, and stay updated with the latest market trends.
				</Text>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Features</ThemedText>
				<Text style={styles.text}>
					- Real-time cryptocurrency data{"\n"}- Search functionality{"\n"}- Refresh to get the latest data{"\n"}-
					User-friendly interface
				</Text>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
		padding: 16,
		backgroundColor: "#f0f0f0",
		borderRadius: 8,
	},
	reactLogo: {
		height: "100%",
		width: "100%",
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	text: {
		fontSize: 16,
		color: "#333",
	},
});
