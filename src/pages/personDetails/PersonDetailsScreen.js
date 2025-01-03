import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from './style';
import { t } from '../../localization/i18n';
import { Icons } from '../../constants/Icons';
import { getUniqueElements } from '../../utils/utils';
import Divider from '../../components/divider/Divider';
import { apiErrorHandling } from '../../utils/errorHandlers';
import { getPersonDetails } from '../../providers/personDetails';
import CustomImage from '../../components/customImage/CustomImage';
import WrongDataScreen from '../../components/wrongDataScreen/WrongDataScreen';
import CustomActivityIndicator from '../../components/activityIndicator/CustomActivityIndicator';
import { Styles, PageName, CreditType, LanguageLocalizationNSKey } from '../../constants/constants';

import { navigationGoBack, navigationPush } from '../../navigation/navigation';

class PersonDetailsScreen extends React.Component {
    state = {
        person: {},
        loading: true,
        tvCredits: {},
        wrongData: false,
        movieCredits: {},
    };

    componentDidMount() {
        this.initData();
    }

    render() {
        const { loading, wrongData } = this.state;
        if (loading) return <CustomActivityIndicator />;
        const {
            navigation,
            route: {
                params: { title },
            },
        } = this.props;
        if (wrongData)
            return (
                <WrongDataScreen
                    title={title}
                    navigation={navigation}
                    pageName={PageName.home}
                    clickRetryButton={this.clickRetryButton}
                />
            );
        const { person, movieCredits, tvCredits } = this.state;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {this.renderHeader(person.profile_path, person.name, navigation)}
                {this.renderAboutPerson(
                    tvCredits,
                    navigation,
                    movieCredits,
                    person.birthday,
                    person.biography,
                    person.popularity,
                )}
            </ScrollView>
        );
    }

    renderHeader = (profile_path, name, navigation) => (
        <CustomImage style={styles.image} source={profile_path}>
            <TouchableOpacity
                delayPressIn={100}
                activeOpacity={0.4}
                style={styles.backIcon}
                onPress={() => navigationGoBack(navigation)}>
                <Icons.Left />
            </TouchableOpacity>
            {!!name && <Text style={styles.name}>{name}</Text>}
        </CustomImage>
    );

    renderAboutPerson = (tvCredits, navigation, movieCredits, birthday, biography, popularity) => {
        const hasTVCredits = !!tvCredits?.cast?.length;
        const hasMovieCredits = !!movieCredits?.cast?.length;
        const hasPopularityOrBirthday = !!popularity || !!birthday;
        return (
            <View style={styles.aboutContainer}>
                {hasPopularityOrBirthday && (
                    <View style={styles.horizontalContainer}>
                        {!!popularity &&
                            this.renderInfoContainer(
                                <Icons.StarHalf />,
                                popularity?.toFixed(1),
                                t('popularity', LanguageLocalizationNSKey.personDetails),
                            )}
                        {!!birthday &&
                            this.renderInfoContainer(
                                <Icons.Schedule />,
                                birthday,
                                t('birthday', LanguageLocalizationNSKey.personDetails),
                            )}
                    </View>
                )}
                {hasPopularityOrBirthday && <Divider />}
                {hasMovieCredits &&
                    this.renderCarousel(
                        navigation,
                        movieCredits?.cast,
                        CreditType.movie,
                        t('filmsFeaturing', LanguageLocalizationNSKey.personDetails),
                    )}
                {hasTVCredits &&
                    this.renderCarousel(
                        navigation,
                        tvCredits?.cast,
                        CreditType.tvSeries,
                        t('tvSeriesFeaturing', LanguageLocalizationNSKey.personDetails),
                    )}
                {(hasMovieCredits || hasTVCredits) && <Divider />}
                {!!biography && (
                    <View style={styles.verticalContainer}>
                        <Text style={styles.title}>
                            {t('biography', LanguageLocalizationNSKey.personDetails)}
                        </Text>
                        <Text style={styles.text}>{biography}</Text>
                    </View>
                )}
                <View style={styles.footer} />
            </View>
        );
    };

    renderInfoContainer = (icon, info, title) => (
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subInfoContainer}>
                {icon}
                <Text style={styles.text}>{info}</Text>
            </View>
        </View>
    );

    renderCarousel = (navigation, cast, type, title) => (
        <>
            <Text style={styles.carouselTitle}>{title}</Text>
            <Carousel
                loop={false}
                autoFillData={false}
                pagingEnabled={true}
                mode={Styles.parallax}
                {...styles.baseOptions}
                data={getUniqueElements(cast)}
                panGestureHandlerProps={{ activeOffsetX: [-10, 10] }}
                renderItem={(item) => this.renderItem(item, navigation, type)}
            />
        </>
    );

    renderItem = ({ item }, navigation, type) => (
        <TouchableOpacity
            activeOpacity={1}
            delayPressIn={100}
            style={styles.item}
            onPress={() => {
                navigationPush(navigation, PageName.movieDetails, {
                    type,
                    id: item?.id,
                    title: t('actors', LanguageLocalizationNSKey.common),
                });
            }}>
            <CustomImage
                source={item?.backdrop_path}
                style={styles.itemImage(!!item?.vote_average)}>
                {!!item?.vote_average && (
                    <View style={styles.rating}>
                        <Icons.StarHalf />
                        <Text style={styles.title}>{item?.vote_average?.toFixed(1)}</Text>
                    </View>
                )}
                {!!item?.title && (
                    <View style={styles.details}>
                        <Text style={styles.title}>{item?.title}</Text>
                    </View>
                )}
            </CustomImage>
        </TouchableOpacity>
    );

    clickRetryButton = () => {
        this.setState({ loading: true });
        setTimeout(this.initData, 400);
    };

    initData = async () => {
        const {
            route: {
                params: { id },
            },
        } = this.props;
        try {
            const { person, tvCredits, movieCredits } = await getPersonDetails(id);
            this.setState({ person, tvCredits, movieCredits, loading: false, wrongData: false });
        } catch (error) {
            this.setState({ wrongData: true, loading: false });
            apiErrorHandling(error, PageName.personDetails);
        }
    };
}

export default PersonDetailsScreen;
