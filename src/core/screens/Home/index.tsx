import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { createStyles } from './styles';
import { AddCarSVG } from '@src/assets/svg';
import { scaleHeightPX } from '@src/common/utils/responsiveStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderNavigation } from '@src/common/components/HeaderNavigation';
import SearchComponent from '@src/common/components/SearchComponent';
import { HeaderLeftComponent } from './components/HeaderLeft';
import { DailyCarPlans } from './components/DailyCarPlans';
import { HowItWorks } from './components/HowItWorks';
import { InteriorCleaning, PlanDetails } from './components/PlanDetails';
import CustomCarousel from '@src/common/components/Carousel';

const HomeScreen = () => {
	const navigation: any = useNavigation();

	const { colors } = useTheme();
	const styles = createStyles(colors);

	const [searchText, setSearchText] = useState<string>('');

	const renderMyCarsButton = () => {
		return (
			<Pressable
				style={styles.carsButton}
				onPress={() => navigation.navigate('MyCars', { fromCars: true })}>
				<AddCarSVG />
			</Pressable>
		);
	};

	const renderHeaderLeft = () => {
		return <HeaderLeftComponent />;
	};

	const renderHeader = () => {
		return (
			<View style={styles.header}>
				<SafeAreaView edges={['top']} />
				<HeaderNavigation
					isCustom
					children={renderHeaderLeft()}
					isNotifications
				/>
				<View style={styles.search}>
					<SearchComponent
						searchText={searchText}
						handleSearch={setSearchText}
						clearSearch={() => setSearchText('')}
					/>
				</View>
			</View>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			{renderHeader()}
			<View style={styles.carousel}>
				<CustomCarousel
					data={[
						{ id: 0, color: '#FF6A61' },
						{ id: 1, color: '#4DC8AF' },
					]}
				/>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ marginBottom: scaleHeightPX(24) }}>
				<View style={styles.container}>
					<DailyCarPlans />
					<PlanDetails />
					<InteriorCleaning />
					<HowItWorks />
				</View>
			</ScrollView>
			{renderMyCarsButton()}
		</View>
	);
};

export default HomeScreen;
