import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CoinItem = ({ coin }: any) => {
	return (
		<View style={styles.containerItem}>
			<View style={styles.coinName}>
				<Image style={styles.image} source={{ uri: coin.image }} />
				<View style={styles.containertext}>
					<Text style={styles.text}>{coin.name}</Text>
					<Text style={styles.symbol}>{coin.symbol}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.textPrice}>{coin.current_price}</Text>
				<Text
					style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? { color: "green" } : { color: "red" }]}
				>
					{coin.price_change_percentage_24h}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerItem: {
		backgroundColor: "#121212",
		paddingTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	containertext: {
		flexDirection: "column",
		gap: 10,
	},
	text: {
		color: "#fff",
	},
	textPrice: {
		color: "#fff",
		textAlign: "right",
	},
	pricePercentage: {
		textAlign: "right",
	},
	symbol: {
		color: "#434343",
		textTransform: "uppercase",
	},
	coinName: {
		flexDirection: "row",
		gap: 10,
	},
	image: {
		width: 30,
		height: 30,
	},
});

export default CoinItem;
