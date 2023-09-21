import { View, Text, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

interface itemTypes {
    date: string
    result: boolean
}

const ResultItem = ({ date, result }: itemTypes) => {
    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.resultText}>{result ? 'Ganhou' : 'Perdeu'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.85,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateText: {

    },
    resultText: {

    }
})

export default ResultItem