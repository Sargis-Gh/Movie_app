import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppColors, Icons, PageName } from '../../constants/constants'
import HomeScreen from '../../pages/home/HomeScreen'
import ProfileScreen from '../../pages/profile/ProfileScreen'
import UniversitiesScreen from '../../pages/universities/UniversitiesScreen'
import { Text, TouchableOpacity, View } from 'react-native'
import FavoritesScreen from '../../pages/favorites/FavoritesScreen'
import QRScreen from '../../pages/QR/QRScreen'
import React from 'react'
import DrawerNavigator from '../drawer/Drawer'

const Tab = createBottomTabNavigator()

class Tabs extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: AppColors.white,
                    },
                    tabBarBackground: () => {
                        ;<View style={{ backgroundColor: AppColors.white }}></View>
                    },
                }}>
                <Tab.Screen
                    name={PageName.home}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icons.home />,
                        tabBarLabel: () => (
                            <Text style={{ color: AppColors.articleColor }}>Home</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name={PageName.universities}
                    component={UniversitiesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icons.university />,
                        tabBarLabel: () => (
                            <Text style={{ color: AppColors.articleColor }}>Universities</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name={PageName.qr}
                    component={QRScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icons.qr />,
                        // tabBarLabel: () => <Text style={{ color: AppColors.white }}>QR</Text>,
                        tabBarButton: (props) => <QRButton {...props} />,
                    }}
                />
                <Tab.Screen
                    name={PageName.favorites}
                    component={FavoritesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icons.favorite />,
                        tabBarLabel: () => (
                            <Text style={{ color: AppColors.articleColor }}>Favorite</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name={PageName.profile}
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icons.profile />,
                        tabBarLabel: () => (
                            <Text style={{ color: AppColors.articleColor }}>Profile</Text>
                        ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}

class QRButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { children, onPress } = this.props
        return (
            <TouchableOpacity style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: 35,
                        backgroundColor: AppColors.articleColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {children}
                </View>
            </TouchableOpacity>
        )
    }
}

export default Tabs
