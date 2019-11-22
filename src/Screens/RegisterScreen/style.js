import { StyleSheet } from 'react-native';

export const styleLogin = StyleSheet.create({
    container: {
        backgroundColor: '#0B0A09',
        flex: 1,
        padding: 40,
        justifyContent: 'center'
    },
    formInput: {
        marginBottom: 20,
        marginTop: 20,
        height: 40
    },
	button: {
		backgroundColor: '#78964e',
		paddingTop: 10,
        paddingBottom: 10,
        width: 150,
        alignSelf: 'center'
    },
    textColor: {
        color: '#fff'
    },
    buttonNavigation: {
        textAlign: 'center',
        margin: 10,
        fontSize: 14
    },
    buttonActive: {
        borderBottomWidth: 4,
        borderBottomColor: '#a17c52',
        fontSize: 18
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    flexColumn: {
        flex: 2,
        flexDirection: 'column'
    }
})