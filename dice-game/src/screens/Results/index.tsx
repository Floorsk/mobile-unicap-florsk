import { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, SectionList } from 'react-native'
import { useAppDiscpatch, useAppSelector } from '../../redux/store'
import { resultTypes } from '../../redux/diceSlice'
import ResultItem from '../../components/ResultItem'

interface dataTypes {
    title: string,
    data: resultTypes
}

const Results = () => {

    const results = useAppSelector(state => state.diceSlice.results)
    const data = [{title: 'Tets', data: {date: 'teest', result: true}}]

    useEffect(() => {

        results.forEach(item => {
            data.push({title: item.date, data: item})
        })

        console.log(data)

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={data}
                renderItem={(item) => (
                    <ResultItem date={item.item.date} result={item.item.result}/>
                )}
            />
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