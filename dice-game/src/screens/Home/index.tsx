import { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { StackTypes } from '../../routes'
import { useNavigation } from '@react-navigation/core'

type Props = {}

const Home = (props: Props) => {

    const navigation = useNavigation<StackTypes>()

    const handleDices = () => {

        const firstDice = Math.floor(Math.random() * 6 + 1)
        const secondDice = Math.floor(Math.random() * 6 + 1)
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>

            </View>
            <Text>Testando!</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleDices()}>
                <Text>Jogar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                <Text>Histórico</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    diceContainer: {
        
    },
    buttonContainer: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10
    }
})

export default Home