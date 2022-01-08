import styled from 'styled-components/native';
import { ScrollView } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import { Shadow } from 'react-native-shadow-2';
import { Checkbox } from '@ant-design/react-native'

const CardsContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px 0;
    padding: 0 15px;
`
type styleCardProps = {
    active: boolean
}

const CardInner = styled.View<styleCardProps>`
    background: white;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    border-radius: 3px;
    padding: 10px 20px;
`

const CardContainer = styled.View`
    margin: 10px 15px 15px 10px;
`

export type PortfolioInfoType = { 
    id: string
    name: string
    iconUrl: string
}

type SelectorProps = {
    portfolios: PortfolioInfoType[]
    activePortfolioIds: string[]
    togglePortfolio: (id: string) => void
}

export const PortfolioSelector: React.FC<SelectorProps> = ({portfolios, activePortfolioIds, togglePortfolio}) => {

    const getCards = portfolios.sort((a, b) => a.name > b.name ? 1 : -1).map(portfolio =>
        <Card
            key={portfolio.id}
            id={portfolio.id}
            active={activePortfolioIds.includes(portfolio.id)}
            iconUrl={portfolio.iconUrl}
            title={portfolio.name}
            togglePortfolio={togglePortfolio}
        />)

    return <CardsContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getCards}
        </ScrollView>
    </CardsContainer>
}

type CardProps = {
    title: string
    active: boolean
    iconUrl: string
    id: string
    togglePortfolio: (id: string) => void
}

const StyledText = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 17px;
`

const Card: React.FC<CardProps> = ({ title, active, iconUrl, id, togglePortfolio }) => {

    return (
        <CardContainer onTouchEnd={() => togglePortfolio(id)}>
            <Shadow radius={3} distance={active ? 9 : 5} startColor='rgba(0,0,0,.1)' offset={[0, active ? 5 : 3]} finalColor='rgba(0,0,0,0)'>
                <CardInner active={active}>
                    <SvgUri source={{ uri: iconUrl }} width={35} height={35} />
                    <StyledText>{title}</StyledText>
                    <Checkbox checked={active} />
                </CardInner>
            </Shadow>
        </CardContainer>
    )
}

