import React, { useState, useEffect } from "react";
import { StyleSheet, Image, FlatList, View, Text, TextInput, StatusBar } from "react-native";
import CoinItem from "@/components/CoinItem";

export default function TabTwoScreen() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");
	const [refreshing, setRefreshing] = useState(false);

	interface Coin {
		name: string;
		symbol: string;
	}

	const loadData = async () => {
		const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100";
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				"x-cg-demo-api-key": process.env.EXPO_PUBLIC_GECKO_API_KEY,
			},
		};

		const res = await fetch(url, options);
		const data = await res.json();
		setCoins(data);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#141414" />
			<View>
				<Text style={styles.title}>CryptoMarket</Text>
				<TextInput
					style={styles.input}
					placeholder="Search a Coin"
					placeholderTextColor="#858585"
					value={search}
					onChangeText={(text) => setSearch(text)}
				/>
			</View>
			<FlatList
				style={styles.list}
				data={coins.filter(
					(coin: Coin) =>
						coin.name.toLowerCase().includes(search.toLowerCase()) ||
						coin.symbol.toLowerCase().includes(search.toLowerCase()),
				)}
				renderItem={({ item }) => {
					return <CoinItem coin={item} />;
				}}
				showsVerticalScrollIndicator={false}
				onRefresh={() => {
					setRefreshing(true);
					loadData().then(() => {
						setRefreshing(false);
					});
				}}
				refreshing={refreshing}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 30,
		padding: 30,
		backgroundColor: "#141414",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "#fff",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 16,
		textAlign: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#4657CE",
		padding: 8,
		margin: 20,
		width: 300,
		color: "#fff",
		textAlign: "center",
	},
	list: {
		width: "100%",
	},
});
