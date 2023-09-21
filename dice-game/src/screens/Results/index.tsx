import { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, SectionList } from 'react-native'
import { useAppDiscpatch, useAppSelector } from '../../redux/store'
import { resultTypes } from '../../redux/diceSlice'
import ResultItem from '../../components/ResultItem'

interface dataTypes {
    title: string
    data: resultTypes[]
}

const Results = () => {

    const results = useAppSelector(state => state.diceSlice.results)
    const [data, setData] = useState<dataTypes[]>([])

    useEffect(() => {
        const groupResultsByMonthYear = () => {
            const groupedData: { [key: string]: resultTypes[] } = {};

            results.forEach((result) => {
                const dateParts = result.date.split('/');
                const monthYearKey = `${dateParts[1]}/${dateParts[2]}`;

                if (!groupedData[monthYearKey]) {
                    groupedData[monthYearKey] = [];
                }

                groupedData[monthYearKey].push(result);
            });

            const dataSections: dataTypes[] = Object.keys(groupedData).map((key) => ({
                title: key,
                data: groupedData[key],
            }));

            return dataSections;
        };

        const groupedData = groupResultsByMonthYear();

        groupedData.sort((a, b) => {
            const dateA = new Date(a.title);
            const dateB = new Date(b.title);
            return dateA.getTime() - dateB.getTime();
          });
      
          setData(groupedData);
    }, [results]);

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={data}
                renderItem={({ item }) => (
                    <ResultItem date={item.date} result={item.result} firstDice={item.firstDice} secondDice={item.secondeDice}/>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        color: 'red',
        fontSize: 18,
        fontFamily: 'Medieval',
        textAlign: 'center'
    }
})

export default Results