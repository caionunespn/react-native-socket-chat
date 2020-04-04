import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#F5F5F5',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerName: {
    color: '#212121',
    fontSize: 18,
    marginLeft: 8,
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  chatContainer: {
    padding: 16,
  },
  chatBubbleContainer: {
    alignSelf: 'flex-start',
    minWidth: 60,
  },
  myChatBubbleContainer: {
    alignSelf: 'flex-end',
  },
  chatBubble: {
    backgroundColor: '#21B8FF',
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 16,
  },
  myChatBubble: {
    backgroundColor: '#ddd',
  },
  chatBubbleText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 16,
  },
  myChatBubbleText: {
    color: '#414141',
  },
  chatBubbleTime: {
    color: '#FFFFFF',
    fontSize: 10,
    marginRight: 16,
    alignSelf: 'flex-end',
  },
  myChatBubbleTime: {
    color: '#414141',
  },
  chatBubbleSenderName: {
    fontSize: 10,
    color: '#aaa',
    marginLeft: 4,
    marginBottom: 4,
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: widthPercentageToDP('100%'),
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
  },
  messageInput: {
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#ddd',
    width: widthPercentageToDP('80%'),
  },
  inputSendButton: {
    backgroundColor: '#21B8FF',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
