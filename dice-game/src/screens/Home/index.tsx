import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackTypes } from '../../routes'
import LottieView from 'lottie-react-native';
import { useAppDiscpatch } from '../../redux/store';
import { addResult, clearResult, resultTypes } from '../../redux/diceSlice';

const screenHeight = Dimensions.get("window").height

const dices = {
    d20: require('../../assets/d20.png'),
    one: require('../../assets/d20-1.json'),
    two: require('../../assets/d20-2.json'),
    three: require('../../assets/d20-3.json'),
    four: require('../../assets/d20-4.json'),
    five: require('../../assets/d20-5.json'),
    six: require('../../assets/d20-6.json'),
    seven: require('../../assets/d20-7.json'),
    eight: require('../../assets/d20-8.json'),
    nine: require('../../assets/d20-9.json'),
    ten: require('../../assets/d20-10.json'),
}

const Home = () => {

    const navigation = useNavigation<StackTypes>()
    const dispatch = useAppDiscpatch()

    const [isPlaying, setIsPlaying] = useState(false)
    const [gifPaused, setGifPaused] = useState(false);

    const [firstDice, setFirstDice] = useState(dices.d20)
    const [secondDice, setSecondDice] = useState(dices.d20)

    const [result, setResult] = useState<string>()

    const diceChoice = [dices.one, dices.two, dices.three, dices.four, dices.five, dices.six, dices.seven, dices.eight, dices.nine, dices.ten]

    const getDate = () => {
        const date = new Date();

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${day}/${month}/${year}`;
    };

    const handleResult = (win: boolean, firstRoll: number, secondRoll: number) => {
        const result: resultTypes = { date: getDate(), result: win, firstDice: firstRoll, secondeDice: secondRoll }

        dispatch(addResult({ result: result }))
    }

    const handleClearResult = () => {
        dispatch(clearResult({}))
        alert('Histórico limpo')
    }

    const handleDices = () => {

        setResult('')
        setGifPaused(false)

        const firstRoll = Math.floor(Math.random() * 10 + 1)
        const secondRoll = Math.floor(Math.random() * 10 + 1)
        const sumRoll = firstRoll + secondRoll

        setFirstDice(diceChoice[firstRoll - 1])
        setSecondDice(diceChoice[secondRoll - 1])

        setIsPlaying(true)

        setTimeout(() => {
            setGifPaused(true)
            if (sumRoll < 10) {
                setResult(`Você tirou ${sumRoll} e perdeu.`)
                handleResult(false, firstRoll, secondRoll)
            } else {
                setResult(`Você tirou ${sumRoll} e ganhou!!!`)
                handleResult(true, firstRoll, secondRoll)
            }
        }, 1000)

    }

    return (
        <ImageBackground source={require('../../assets/wallpaper.jpg')} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Dice Game</Text>
                <View style={styles.diceContainer}>
                    {
                        isPlaying
                            ?
                            <View style={styles.dicesArea}>
                                <LottieView
                                    source={firstDice}
                                    autoPlay={!gifPaused}
                                    loop={!gifPaused}
                                    style={{ width: 100, height: 100 }}
                                    speed={3}
                                />
                                <LottieView
                                    source={secondDice}
                                    autoPlay={!gifPaused}
                                    loop={!gifPaused}
                                    style={{ width: 100, height: 100, marginBottom: 25 }}
                                    speed={3}
                                />
                            </View>
                            :
                            null

                    }
                </View>
                <View style={styles.buttonGroup}>
                    <Text>{result}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handleDices()}>
                        <Text style={styles.buttonText}>Jogar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Results')}>
                        <Text style={styles.buttonText}>Histórico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handleClearResult()}>
                        <Text style={styles.buttonText}>Limpar Histórico</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 52,
        fontFamily: 'MedievalBold',
        color: 'red',
    },
    diceContainer: {
        width: '100%',
        height: screenHeight * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dicesArea: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginRight: 50,
    },
    d20Size: {
        width: '45%',
        height: '45%'
    },
    buttonGroup: {
        alignItems: 'center',
        gap: 10
    },
    buttonContainer: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'MedievalBold'
    },
})

export default Home