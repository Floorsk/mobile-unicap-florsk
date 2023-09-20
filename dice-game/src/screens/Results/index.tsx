import { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, SectionList } from 'react-native'
import { useAppDiscpatch, useAppSelector } from '../../redux/store'
import { resultTypes } from '../../redux/diceSlice'

interface dataTypes {
    title: string,
    data: resultTypes[]
}

const Results = () => {

    const results = useAppSelector(state => state.diceSlice.results)

    

    return (
        <SafeAreaView style={styles.container}>
            {/* <SectionList
                sections={data}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Results