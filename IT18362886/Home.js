import React, { Component } from 'react';
import { TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import '../assets/body1.png';
import HomeView from '../components/HomeView';
import Map from './Map';

export default function Home({ navigation }) {
	return (
		<ImageBackground
			source={require('../assets/body3.png')}
			style={{
				width: '100%',
				height: '100%',
				opacity: 1,
				flex: 1,
				position: 'relative',
				backgroundColor: '#000080',
				marginTop: -25,
				alignItems: 'center',
			}}
		>
			<HomeView />
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => navigation.navigate('Map')}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: 90,
					borderRadius: 20,
					width: 350,
					backgroundColor: '#800080',
					marginTop: 5,
				}}
			>
				<Image
					source={require('../assets/map1.jpg')}
					style={{
						height: 40,
						width: 40,
					}}
				/>
				<Text style={{ fontSize: 25, marginLeft: 10, color: '#ffffff' }}>Map View</Text>
			</TouchableOpacity>

			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => navigation.navigate('QRPage')}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: 90,
					width: 350,
					marginTop: 10,
					borderRadius: 0,
					backgroundColor: '#990000',
				}}
			>
				<Image source={require('../assets/Qr1.png')} style={{ height: 40, width: 40 }} />
				<Text style={{ fontSize: 25, marginLeft: 10, color: '#ffffff' }}>SCAN QR-Code</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}
