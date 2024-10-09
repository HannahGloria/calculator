import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#333333',
    lightGray: '#D3D3D3',
    orange: '#FFA500',

    textPrimary: '#FFFFFF',
    textSecondary: '#666666',
    background: '#000000',
};

export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: colors.background,
    },
    calculatorContainer:{
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    mainResult:{
        fontSize: 60,
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300',
    },

    subResult:{
        fontSize: 30,
        color: colors.textSecondary,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '200',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
        color: 'white',
    }
});
