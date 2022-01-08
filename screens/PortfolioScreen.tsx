import { StyleSheet } from 'react-native';
import { PortfolioInfoType, PortfolioSelector } from '../components/selectors/PortfolioSelector'
import { View, Text } from '../components/Themed';
import { PortfolioInfo } from '../components/portfolio/PortfolioInfo';
import { RootTabScreenProps } from '../types';
import { usePortfoliosQuery } from '../graphql-types';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from '@ant-design/react-native'

export default function PortfolioScreen({ navigation }: RootTabScreenProps<'PortfolioScreen'>) {
  const { data, loading } = usePortfoliosQuery()
  const [activePortfolioIds, setActivePortfolioIds] = useState<string[]>([])

  useEffect(() => {
    const portfolios = data?.portfolios || []

    const firstPortfolioId = [...portfolios].pop()?.id

    if (firstPortfolioId) {
      setActivePortfolioIds(prev => [...prev, firstPortfolioId])
    }
  }, [data])

  if (loading) return <ActivityIndicator size='large' />

  const portfolios = data?.portfolios?.map<PortfolioInfoType>(portfolio => ({
    id: portfolio?.id,
    name: portfolio?.name || '',
    iconUrl: portfolio?.portfolioType?.iconUrl || '',
  })) || []

  const togglePortfolio = (id: string) => {
    if (activePortfolioIds.includes(id)) {
      setActivePortfolioIds(prev => prev.filter(pId => pId !== id))
    } else {
      setActivePortfolioIds(prev => [...prev, id])
    }
  }
  
  return (
    <View style={styles.container}>
      <PortfolioSelector portfolios={portfolios} activePortfolioIds={activePortfolioIds} togglePortfolio={togglePortfolio}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {activePortfolioIds.length === 0 ? <Text style={styles.title}>Выберите портфель</Text> : <PortfolioInfo portfolioIds={activePortfolioIds}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    height: 1,
    width: '95%',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 20,
    color: '#b8b8b8'
  }
});
