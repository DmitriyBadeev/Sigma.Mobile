import styled from 'styled-components/native'

export const InfoContainer = styled.ScrollView`
    margin-top: 15px;
`

export const CardsContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 10px 20px;
`

export const CardInner = styled.View`
    padding: 15px 20px;
    border-radius: 3px;
    background: white;
`

export const CardContainer = styled.View`
    margin: 5px 15px 10px 5px;
`

export const CardValue = styled.Text<{ color?: string }>`
    font-size: 30px;
    color: ${props => props.color || props.theme.primary};
`

export const SmallText = styled.Text<{ color?: string }>`
    color: ${props => props.color || props.theme.grey2};
    font-size: 13px;
`

export const PanelContainer = styled.View`
`

export const AssetsContainer = styled.View`
    margin-top: 20px;
`

export const TableRowContainer = styled.View`
    background: #F8F8F8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 10px 20px;
    border-radius: 3px;
`
export const IconContainer = styled.View``

export const AssetInfo = styled.Text`
    color: ${props => props.theme.grey2};
    font-size: 12px;
`

export const AssetName = styled.Text`
    font-size: 15px;
    line-height: 20px;
`

export const AssetInfoContainer = styled.View`
    display: flex;
    flex-direction: row;
`
export const AssetNameContainer = styled.View`
    margin-left: 15px;
`

export const CostContainer = styled.View`

`

export const Cost = styled.Text`
    font-size: 15px;
    text-align: right;

`
export const PaperProfit = styled.Text`
`