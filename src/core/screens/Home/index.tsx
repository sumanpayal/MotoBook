import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, BackHandler, Pressable, ScrollView, View } from 'react-native';
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
import CustomCarousel, { CAROUSEL_TYPE } from '@src/common/components/Carousel';
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileDetails } from '@src/network/login';
import { API_RESPONSE } from '@src/common/constants/constants';
import { RootState } from '@src/common/redux/store/store';
import { setProfileData } from '@src/common/redux/reducers/currentUser';
import { getMySubscriptionList } from '@src/network/car';

const HomeScreen = () => {
	const navigation: any = useNavigation();
	const dispatch = useDispatch()

	const { colors } = useTheme();
	const styles = createStyles(colors);

	const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

	const hasActiveSubscription = profileData?.hasActiveSubscription ?? false

	const [searchText, setSearchText] = useState<string>('');
	const [allCarsData, setAllCarsData] = useState<any[]>([]);

	useFocusEffect(useCallback(() => {
		if (!profileData?._id) {
			getUserDetails()
		}
		getMyCarsList()
		dispatch(setIsFullScreenLoading(false))
		const backAction = () => {
			Alert.alert('Hold on!', 'Are you sure you want to close the app?', [
				{
					text: 'Cancel',
					onPress: () => null,
					style: 'cancel',
				},
				{ text: 'YES', onPress: () => BackHandler.exitApp() },
			], {
				cancelable: true
			});
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction,
		);
		return () => backHandler.remove();
	}, []))

	const getMyCarsList = () => {
		getMySubscriptionList(true, 1, (response: API_RESPONSE) => {
			if (response.error) {
				setAllCarsData([])
			} else {
				setAllCarsData(response.data)
			}
		})
	}

	const getUserDetails = () => {
		getUserProfileDetails((res: API_RESPONSE) => {
			if (res?.data) {
				dispatch(setProfileData(res?.data))
			}
		})
	}

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

	const onPressCarousel = (type: CAROUSEL_TYPE) => {
		switch (type) {
			case CAROUSEL_TYPE.NO_VEHICLE:
				navigation.navigate('SelectBrand')
				break
			case CAROUSEL_TYPE.REQUEST_SUBMITTED:
				break
			case CAROUSEL_TYPE.SUBSCRIPTION_EXPIRED:
				break
			case CAROUSEL_TYPE.OTHERS:
				break
			default:
				break
		}
	}

	return (
		<View style={{ flex: 1 }}>
			{renderHeader()}
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ paddingBottom: scaleHeightPX(24) }}>
				<View style={styles.carousel}>
					<CustomCarousel cauroselType={profileData?.hasActiveSubscription ? CAROUSEL_TYPE.OTHERS : allCarsData?.length > 0 ? CAROUSEL_TYPE.REQUEST_SUBMITTED : CAROUSEL_TYPE.NO_VEHICLE} onPress={onPressCarousel}
					/>
				</View>
				<View style={styles.container}>
					<DailyCarPlans />
					<PlanDetails />
					<InteriorCleaning />
					{!hasActiveSubscription && <HowItWorks />}
				</View>
			</ScrollView>
			{renderMyCarsButton()}
		</View>
	);
};

export default HomeScreen;
