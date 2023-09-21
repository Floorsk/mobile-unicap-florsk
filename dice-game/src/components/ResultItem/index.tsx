import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { dices, diceChoice } from '../../screens/Home'
import LottieView from 'lottie-react-native';

const screenWidth = Dimensions.get('window').width

interface itemTypes {
    date: string
    result: boolean
    firstDice: number
    secondDice: number
}

const ResultItem = ({ date, result, firstDice, secondDice }: itemTypes) => {

    const [gifPaused, setGifPaused] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setGifPaused(true)
      }, 1000)
    }, [gifPaused])
    

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <Text style={styles.dateText}>{date}</Text>
                <Text style={result ? styles.resultTextWon : styles.resultTextLoose}>{result ? 'Ganhou' : 'Perdeu'}</Text>
            </View>
            <View style={styles.downside}>
                <Text style={styles.diceDisplay}>Primeiro Dado: {firstDice}</Text>
                <Text style={styles.diceDisplay}>Segundo Dado: {secondDice}</Text>
            </View>
            <View style={styles.diceArea}>
                <LottieView
                    source={diceChoice[firstDice]}
                    autoPlay={!gifPaused}
                    loop={!gifPaused}
                    style={{ width: 50, height: 50 }}
                    speed={3}
                />
                <LottieView
                    source={diceChoice[secondDice]}
                    autoPlay={!gifPaused}
                    loop={!gifPaused}
                    style={{ width: 50, height: 50 }}
                    speed={3}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.85,
        height: 100,
        marginTop: 7,
        marginBottom: 7,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
    },
    dateText: {
        color: 'red'
    },
    resultTextWon: {
        color: 'green',
        fontSize: 16,
        fontFamily: 'MedievalBold'
    },
    resultTextLoose: {
        color: 'red',
        fontSize: 16,
        fontFamily: 'MedievalBold'
    },
    upside: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    downside: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    diceDisplay: {
        fontFamily: 'Medieval'
    },
    diceArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 25,
    }
})

export default ResultItem