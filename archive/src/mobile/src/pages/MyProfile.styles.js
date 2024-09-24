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
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 21,
        fontWeight: 'normal',
        color: '#666666',
    },
    followerContainer: {
        flexDirection: 'row',
        flex: 1,
        //paddingLeft: 12,
        //marginLeft: 12,
        //borderLeftWidth: 1,
        borderLeftColor: '#dadada',
        //justifyContent: 'center',
        alignItems: 'center',
        //marginRight: 20,
        //marginVertical: 0, // Remove margin for vertical spacing
        width: 200,
        //backgroundColor: 'blue',  // For debugging purposes
    },
    followers: {
        flex: 1,
        fontSize: 32,
        //fontWeight: 'normal',
        //flexDirection: 'column',
        alignItems: 'center',
        marginRight: 4,
    },
    following: {
        flex: 1,
        fontSize: 32,
        //fontWeight: 'normal',
        //flexDirection: 'row',
        alignItems: 'center',
        marginRight: 4,
    },
    settingsButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#30542f',
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 200,
        //backgroundColor: 'red',  // For debugging purposes
    },
    biography: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#666666',
    },

    // Parts related to posts
    postPartContainer: {
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