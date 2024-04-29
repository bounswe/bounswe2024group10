import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  upContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#75d67e',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  downContainer: {
    flex: 8,
    padding: 20,
    backgroundColor: '#fff',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  savContainer: {
    flex: 8,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
    flex: 1,
  },
  descriptionText: {
    fontSize: 20
  },
  postImage: {
    //justifyContent: 'space-between',
    maxWidth: 300,

  },
  buttonsContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  comments: {

  },
  commentItem: {

  },
  commentAvatar: {
    width: 40,
    height: 40,
    //fontWeight: 'bold',
    marginRight: 10,
  },
  commentName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reportImage: {
    width: 30,
    height: 30,
    //fontWeight: 'bold',
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  commentBody: {

  },
  commentText: {
    fontSize: 14,
  },
  newCommentBox: {
    flexDirection: 'row', // Arrange form elements horizontally
    marginTop: 20, // Add space above the box
    borderTopWidth: 1, // Add a subtle border
    borderTopColor: '#ddd',
    padding: 10,
  },
  newCommentInput: {
    flex: 1, // Make the input field occupy most of the space
    borderWidth: 1, // Add border
    borderColor: 'transparent', // Remove default border
    borderRadius: 15, // Add border radius
    padding: 5,
    fontSize: 14,
    textAlignVertical: 'top', // Adjust text alignment
  },
  newCommentButton: {
    backgroundColor: '#2f7736', // Same color as post background
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

});

export default styles;