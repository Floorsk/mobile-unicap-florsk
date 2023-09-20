import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useAppDiscpatch, useAppSelector } from '../../redux/store'

type Props = {}

const Results = (props: Props) => {

    const results = useAppSelector(state => state.diceSlice.results)

    useEffect(() => {
        console.log(results)
    }, [])

    return (
        <View>
            <Text>Results</Text>
        </View>
    )
}

export default Results