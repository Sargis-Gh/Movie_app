import React from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

import styles from './style';
import { t } from '../../localization/i18n';
import { Icons } from '../../constants/Icons';
import { getHomeData } from '../../providers/home';
import { genericErrorHandling } from '../../utils/errorHandlers';
import { buildImageUrl, getUniqueElements } from '../../utils/utils';
import CustomCarousel from '../../components/customCarousel/CustomCarousel';
import WrongDataScreen from '../../components/wrongDataScreen/WrongDataScreen';
import CustomActivityIndicator from '../../components/activityIndicator/CustomActivityIndicator';
import {
    PageName,
    CreditType,
    DefaultSource,
    HomeScreenDataTitles,
    LanguageLocalizationNSKey,
} from '../../constants/constants';

import { navigationPush } from '../../navigation/navigation';

class HomeScreen extends React.Component {
    state = {
        data: [],
        loading: true,
        wrongData: false,
    };

    componentDidMount() {
        this.initData();
    }

    render() {
        const { loading, wrongData } = this.state;
        if (loading) return <CustomActivityIndicator />;
        if (wrongData)
            return (
                <WrongDataScreen navigationBar={false} clickRetryButton={this.clickRetryButton} />
            );
        const { data } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                {this.renderHeader(navigation)}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item?.title}
                    ListFooterComponent={<View style={styles.listFooterComponent} />}
                    renderItem={({ item }) =>
                        this.renderCarousel(item?.data, navigation, item?.title)
                    }
                />
            </View>
        );
    }

    renderHeader = (navigation) => (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                delayPressIn={100}
                activeOpacity={0.8}
                onPress={navigation.openDrawer}>
                <Icons.Menu />
            </TouchableOpacity>
            <Text style={styles.title}>{t('title', LanguageLocalizationNSKey.home)}</Text>
        </View>
    );

    renderCarousel = (data, navigation, title) => {
        const isStandard = HomeScreenDataTitles[1] !== title;
        const renderItem = (isStandard && this.renderStandardItem) || this.renderNonStandardItem;
        const bottomDivider = HomeScreenDataTitles[HomeScreenDataTitles.length - 1] !== title;
        return (
            <CustomCarousel
                title={title}
                navigation={navigation}
                isStandard={isStandard}
                bottomDivider={bottomDivider}
                data={getUniqueElements(data)}
                renderItem={renderItem}
            />
        );
    };

    renderStandardItem = ({ item }, navigation) => (
        <TouchableOpacity
            activeOpacity={1}
            delayPressIn={100}
            style={styles.carouselItem}
            onPress={() => {
                navigationPush(navigation, PageName.movieDetails, {
                    id: item?.id,
                    type: CreditType.movie,
                    title: t('title', LanguageLocalizationNSKey.home),
                });
            }}>
            <FastImage
                style={styles.standardItem}
                defaultSource={DefaultSource.film}
                resizeMode={FastImage.resizeMode.stretch}
                source={{ uri: buildImageUrl(item?.backdrop_path) }}>
                <TouchableOpacity
                    delayPressIn={100}
                    activeOpacity={0.8}
                    style={styles.standardItemDetails}>
                    <Icons.Play />
                    <View>
                        <Text style={styles.continue}>
                            {t('texts.continue', LanguageLocalizationNSKey.home)}
                        </Text>
                        <Text style={styles.readyPlayer}>
                            {t('texts.readyPlayer', LanguageLocalizationNSKey.home)}
                        </Text>
                    </View>
                </TouchableOpacity>
            </FastImage>
        </TouchableOpacity>
    );

    renderNonStandardItem = ({ item }, navigation) => (
        <TouchableOpacity
            activeOpacity={1}
            delayPressIn={100}
            style={styles.carouselItem}
            onPress={() => {
                navigationPush(navigation, PageName.movieDetails, {
                    id: item?.id,
                    type: CreditType.movie,
                });
            }}>
            <FastImage
                style={styles.nonStandardItem}
                defaultSource={DefaultSource.film}
                resizeMode={FastImage.resizeMode.cover}
                source={{ uri: buildImageUrl(item?.backdrop_path) }}>
                {!!item?.vote_average && (
                    <View style={styles.rating}>
                        <Icons.StarHalf />
                        <Text style={styles.ratingValue}>{item?.vote_average?.toFixed(1)}</Text>
                    </View>
                )}
                {!!item?.title && (
                    <View style={styles.nonStandardItemDetails}>
                        <Text style={styles.subTitle}>{item?.title}</Text>
                    </View>
                )}
            </FastImage>
        </TouchableOpacity>
    );

    clickRetryButton = () => {
        this.setState({ loading: true });
        setTimeout(this.initData, 400);
    };

    initData = async () => {
        try {
            const data = await getHomeData();
            this.setState({ data, loading: false, wrongData: false });
        } catch (error) {
            this.setState({ wrongData: true, loading: false });
            genericErrorHandling(error);
        }
    };
}

export default HomeScreen;
