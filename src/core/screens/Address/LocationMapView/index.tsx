import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { hasLocationPermission } from '@src/common/utils/permissions'
import { GeoPosition, getCurrentPosition } from 'react-native-geolocation-service'
import MapView from '@src/common/components/MapView'

const LocationMapView = () => {
    const [location, setLocation] = useState<GeoPosition | null>(null);

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = async () => {
        const hasPermission = await hasLocationPermission();

        if (!hasPermission) {
            return;
        }

        getCurrentPosition(
            position => {
                setLocation(position);
            },
            error => {
                Alert.alert(`Code ${error.code}`, error.message);
                setLocation(null)
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
                forceLocationManager: true,
                showLocationDialog: true,
            },
        );
    };

    return (
        <MainFrame isHeader title='Map' isNotifications={false}>
            <MapView coords={location?.coords || null} />
        </MainFrame>
    )
}

export default LocationMapView