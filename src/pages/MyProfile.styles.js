import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    savContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'column',
    },
    scrollContainer: {
        marginHorizontal: 0,
        flex: 1,
    },
    upperContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        backgroundColor: '#75d67e',
        justifyContent: 'flex-start',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 20,
        height: 'auto',
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    infoContainer: {
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start',

    },
    infoDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 12,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    email: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#666666',
    },
    followerContainer: {
        //paddingLeft: 12,
        //marginLeft: 12,
        //borderLeftWidth: 1,
        borderLeftColor: '#dadada',
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        //marginRight: 20,
        //marginVertical: 0, // Remove margin for vertical spacing
        width: 200,
        //backgroundColor: 'blue',
    },
    followers: {
        fontSize: 32,
        //fontWeight: 'normal',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 4,
    },
    following: {
        fontSize: 32,
        //fontWeight: 'normal',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 4,
    },
    settingsButtonContainer: {
        // React Native doesn't have cursor or text-decoration properties
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f4fff3', // Background color not supported
        color: '#30542f',
        fontWeight: 'bold',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 200,
        //backgroundColor: 'red',
        //marginStart: 'auto', // Use marginStart instead of marginLeft for RTL support
        //marginEnd: 0, // Remove margin for horizontal spacing
        // borderWidth: 1, // Border not supported
        // borderColor: '#cbdeca17', // Border color not supported
    },
    biography: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#666666',
        marginTop: 16,

    },








    postPartContainer: {
        marginTop: 48,
        flexDirection: "column",
    },
    myPostsContainer: {
        width: "%100",
        flexDirection: 'column',
    },
    postCard: {
        //backgroundColor: '#f0f0f0',
        borderRadius: 4,
        padding: 20,
        elevation: 4,
        width: "%100",
        height: 450,
        alignItems: 'center',
        flexDirection: "column",

    },
    buttonsContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        //backgroundColor: 'yellow',
        width: 370,
    },
    postImage: {
        maxWidth: 400,
        width: 365,
        height: 365,
    },
    postContent: {


    },

});

export default styles;