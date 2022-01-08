import { useAggregatePortfoliosQuery } from '../../graphql-types'
import { ActivityIndicator } from '@ant-design/react-native'
import { ScrollView } from 'react-native'
import { Text } from '../Themed'
import { getCurrentTheme } from '../../Theme'
import { FontAwesome } from '@expo/vector-icons'
import { Shadow } from 'react-native-shadow-2'
import { WhiteSpace } from '@ant-design/react-native'
import { Accordion } from '@ant-design/react-native'
import { useState } from 'react'
import SvgUri from 'react-native-svg-uri'
import {
    AssetsContainer, CardContainer, CardInner, CardValue, CardsContainer, InfoContainer, SmallText, CostContainer, Cost, PaperProfit,
    TableRowContainer, AssetInfoContainer, AssetNameContainer, PanelContainer, IconContainer, AssetName, AssetInfo
} from './styles'

type InfoProps = {
    portfolioIds: string[]
}

function CardIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={15} {...props} />
}

const getCurrencyNumber = (number: number, currency: '₽' | '$' | '€' = '₽') => {
    return getNumberWithSymbol(number, currency)
}

const getNumberWithSymbol = (number: number, symbol: string) => {
    return `${number.toFixed(2).replace('.', ',')} ${symbol}`
}

const theme = getCurrentTheme()
const getColorByValue = (value: number) => value > 0 ? theme.green : theme.red
    const getSign = (number: number) => number > 0 ? '+' : '−'

export const PortfolioInfo: React.FC<InfoProps> = ({ portfolioIds }) => {
    const { data, loading } = useAggregatePortfoliosQuery({ variables: { portfolioIds } })
    const [activeSections, setActiveSections] = useState([0])

    if (loading) return <ActivityIndicator size='large' />

    const portfolioData = data?.aggregatePortfolios?.result
    const stocks = portfolioData?.portfolioStocks
    const fonds = portfolioData?.portfolioFonds
    const bonds = portfolioData?.portfolioBonds

    const getStocks = () => {
        return stocks?.filter(s => s?.amount && s?.amount > 0).map(stock => <AssetTableRow
            key={stock?.id}
            ticket={stock?.stock?.ticket || ''}
            name={stock?.stock?.shortName || ''}
            amount={stock?.amount || 0}
            cost={Number(stock?.cost)}
            paperProfit={Number(stock?.paperProfit)}
            paperProfitPercent={Number(stock?.paperProfitPercent)}
        />)
    }

    const getFonds = () => {
        return fonds?.filter(s => s?.amount && s?.amount > 0).map(fond => <AssetTableRow
            key={fond?.id}
            ticket={fond?.fond?.ticket || ''}
            name={fond?.fond?.shortName || ''}
            amount={fond?.amount || 0}
            cost={Number(fond?.cost)}
            paperProfit={Number(fond?.paperProfit)}
            paperProfitPercent={Number(fond?.paperProfitPercent)}
        />)
    }

    const getBonds = () => {
        return bonds?.filter(s => s?.amount && s?.amount > 0).map(bond => <AssetTableRow
            key={bond?.id}
            ticket={bond?.bond?.ticket || ''}
            name={bond?.bond?.shortName || ''}
            amount={bond?.amount || 0}
            cost={Number(bond?.cost)}
            paperProfit={Number(bond?.paperProfit)}
            paperProfitPercent={Number(bond?.paperProfitPercent)}
            isBond
        />)
    }

    return <InfoContainer>
        <CardsContainer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardWrapper>
                    <Text>Суммарная стоимость</Text>
                    <WhiteSpace size='xs' />
                    <CardValue>{getCurrencyNumber(Number(portfolioData?.cost))}</CardValue>
                    <WhiteSpace />
                    <SmallText>Инвестировано: {portfolioData?.investedSum}</SmallText>
                </CardWrapper>
                <CardWrapper>
                    <Text>Бумажная прибыль</Text>
                    <WhiteSpace size='xs' />
                    <CardValue color={getColorByValue(Number(portfolioData?.paperProfit))}>
                        {getSign(Number(portfolioData?.paperProfit))}
                        {getCurrencyNumber(Math.abs(Number(portfolioData?.paperProfit)))}
                    </CardValue>
                    <WhiteSpace />
                    <SmallText color={getColorByValue(Number(portfolioData?.paperProfitPercent))}>
                        <CardIcon
                            name={portfolioData?.paperProfitPercent > 0 ? 'arrow-circle-up' : 'arrow-circle-down'}
                            color={getColorByValue(Number(portfolioData?.paperProfitPercent))} />
                        {'\u00A0'}{Math.abs(Number(portfolioData?.paperProfitPercent)).toFixed(2)}
                    </SmallText>
                </CardWrapper>
                <CardWrapper>
                    <Text>Свободных средств</Text>
                    <WhiteSpace size='xs' />
                    <CardValue>{getCurrencyNumber(Number(portfolioData?.rubBalance))}</CardValue>
                    <WhiteSpace />
                    <SmallText>
                        {getCurrencyNumber(Number(portfolioData?.dollarBalance), '$')},{'\u00A0'}
                        {getCurrencyNumber(Number(portfolioData?.euroBalance), '€')}</SmallText>
                </CardWrapper>
            </ScrollView>
        </CardsContainer>

        <AssetsContainer>
            <Accordion activeSections={activeSections} onChange={(sections) => setActiveSections(sections)}>
                <Accordion.Panel header="Акции">
                    <PanelContainer>
                        {getStocks()}
                    </PanelContainer>
                </Accordion.Panel>
                <Accordion.Panel header="Фонды">
                    <PanelContainer>
                        {getFonds()}
                    </PanelContainer>
                </Accordion.Panel>
                <Accordion.Panel header="Облигации">
                    <PanelContainer>
                        {getBonds()}
                    </PanelContainer>
                </Accordion.Panel>
            </Accordion>
        </AssetsContainer>
    </InfoContainer>
}

const CardWrapper: React.FC = ({ children }) => {
    return (
        <CardContainer>
            <Shadow radius={3} distance={5} startColor='rgba(0,0,0,.05)' offset={[0, 3]} finalColor='rgba(0,0,0,0)'>
                <CardInner>{children}</CardInner>
            </Shadow>
        </CardContainer>
    )
}

type AssetPropTypes = {
    ticket: string
    name: string
    amount: number
    cost: number
    paperProfit: number
    paperProfitPercent: number
    isBond?: boolean
}

const AssetTableRow: React.FC<AssetPropTypes> = ({ ticket, name, amount, cost, paperProfit, paperProfitPercent, isBond = false }) => {
    
    const iconUri = isBond ? 'https://storage.badeev.info/tickets/MINFIN.svg' :  `https://storage.badeev.info/tickets/${ticket}.svg`
    
    return (
        <TableRowContainer>
            <AssetInfoContainer>
                <IconContainer>
                    <SvgUri source={{ uri: iconUri }} width={35} height={35} />
                </IconContainer>
                <AssetNameContainer>
                    <AssetName>{name}</AssetName>
                    <SmallText color={theme.grey2}>{ticket}{'\u00A0\u00B7\u00A0'}{amount}{'\u00A0шт'}</SmallText>
                </AssetNameContainer>
            </AssetInfoContainer>
            <CostContainer>
                <Cost>{getCurrencyNumber(cost)}</Cost>
                <PaperProfit>
                    <CardIcon
                        name={paperProfit > 0 ? 'arrow-circle-up' : 'arrow-circle-down'}
                        color={getColorByValue(Number(paperProfit))} />{'\u00A0'}
                    <SmallText color={getColorByValue(paperProfit)}>
                        {getCurrencyNumber(Math.abs(paperProfit))}
                        {'\u00A0\u00B7\u00A0'}
                        {getNumberWithSymbol(Math.abs(paperProfitPercent), '%')}
                    </SmallText>
                </PaperProfit>
            </CostContainer>
        </TableRowContainer>
    )
}