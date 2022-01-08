import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type AddPortfolioInput = {
  name?: Maybe<Scalars['String']>;
  typeId: Scalars['UUID'];
};

export enum ApplyPolicy {
  BeforeResolver = 'BEFORE_RESOLVER',
  AfterResolver = 'AFTER_RESOLVER'
}

export enum AssetAction {
  BuyAction = 'BUY_ACTION',
  SellAction = 'SELL_ACTION'
}

export type AssetOperation = {
  __typename?: 'AssetOperation';
  id: Scalars['UUID'];
  ticket: Scalars['String'];
  amount: Scalars['Int'];
  price: Scalars['Decimal'];
  total: Scalars['Decimal'];
  currencyId: Scalars['UUID'];
  currency?: Maybe<Currency>;
  date: Scalars['DateTime'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['UUID'];
  assetType: AssetType;
  assetAction: AssetAction;
};

export type AssetOperationInput = {
  ticket?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  price: Scalars['Decimal'];
  currencyId: Scalars['UUID'];
  date: Scalars['DateTime'];
  portfolioId: Scalars['UUID'];
  assetType: AssetType;
  assetAction: AssetAction;
};

export type AssetShare = {
  __typename?: 'AssetShare';
  ticket?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  percent: Scalars['Decimal'];
  riskPercent: Scalars['Decimal'];
};

export enum AssetType {
  Stock = 'STOCK',
  Fond = 'FOND',
  Bond = 'BOND'
}

export type Bond = {
  __typename?: 'Bond';
  id: Scalars['UUID'];
  ticket: Scalars['String'];
  shortName: Scalars['String'];
  marketFullName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  latName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  percent: Scalars['Decimal'];
  price: Scalars['Decimal'];
  percentChange: Scalars['Decimal'];
  updateTime: Scalars['DateTime'];
  amortizationDate: Scalars['DateTime'];
  nominal: Scalars['Decimal'];
  coupon: Scalars['Decimal'];
  couponPercent: Scalars['Decimal'];
  averageProfit: Scalars['Decimal'];
  risk: Scalars['Decimal'];
  sharpeRatio: Scalars['Decimal'];
  portfolioBonds?: Maybe<Array<Maybe<PortfolioBond>>>;
  coupons?: Maybe<Array<Maybe<Coupon>>>;
};

export type Candle = {
  __typename?: 'Candle';
  open: Scalars['Decimal'];
  close: Scalars['Decimal'];
  high: Scalars['Decimal'];
  low: Scalars['Decimal'];
  value: Scalars['Decimal'];
  volume: Scalars['Decimal'];
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export enum CandleInterval {
  Week = 'WEEK',
  Day = 'DAY',
  Month = 'MONTH',
  Hour = 'HOUR'
}

export type CostGraphData = {
  __typename?: 'CostGraphData';
  portfolioId: Scalars['UUID'];
  portfolioName?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<TimeValue>>>;
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['UUID'];
  couponDate: Scalars['DateTime'];
  value: Scalars['Decimal'];
  valuePercent: Scalars['Decimal'];
  currency?: Maybe<Currency>;
  currencyId: Scalars['UUID'];
  bond?: Maybe<Bond>;
  bondId: Scalars['UUID'];
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  sign?: Maybe<Scalars['String']>;
  rubRate: Scalars['Decimal'];
  dollarRate: Scalars['Decimal'];
  euroRate: Scalars['Decimal'];
  currencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>;
  assetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
};

export type CurrencyOperation = {
  __typename?: 'CurrencyOperation';
  id: Scalars['UUID'];
  currencyId: Scalars['UUID'];
  currency?: Maybe<Currency>;
  total: Scalars['Decimal'];
  date: Scalars['DateTime'];
  operationType: OperationType;
  portfolioId: Scalars['UUID'];
  portfolio?: Maybe<Portfolio>;
  ticket?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
};

export type CurrencyOperationInput = {
  currencyId: Scalars['UUID'];
  total: Scalars['Decimal'];
  date: Scalars['DateTime'];
  operationType: OperationType;
  portfolioId: Scalars['UUID'];
  ticket?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
};

export type DailyPortfolioReport = {
  __typename?: 'DailyPortfolioReport';
  id: Scalars['UUID'];
  cost: Scalars['Decimal'];
  investedSum: Scalars['Decimal'];
  paperProfit: Scalars['Decimal'];
  paperProfitPercent: Scalars['Decimal'];
  dividendProfit: Scalars['Decimal'];
  dividendProfitPercent: Scalars['Decimal'];
  rubBalance: Scalars['Decimal'];
  dollarBalance: Scalars['Decimal'];
  euroBalance: Scalars['Decimal'];
  date: Scalars['DateTime'];
  portfolioId: Scalars['UUID'];
  portfolio?: Maybe<Portfolio>;
};



export type DefaultPayload = {
  __typename?: 'DefaultPayload';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type DefaultPayloadOfHerfindahlHirschmanIndex = {
  __typename?: 'DefaultPayloadOfHerfindahlHirschmanIndex';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<HerfindahlHirschmanIndex>;
};

export type DefaultPayloadOfListOfAssetOperation = {
  __typename?: 'DefaultPayloadOfListOfAssetOperation';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<AssetOperation>>>;
};

export type DefaultPayloadOfListOfAssetShare = {
  __typename?: 'DefaultPayloadOfListOfAssetShare';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<AssetShare>>>;
};

export type DefaultPayloadOfListOfCostGraphData = {
  __typename?: 'DefaultPayloadOfListOfCostGraphData';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<CostGraphData>>>;
};

export type DefaultPayloadOfListOfCurrencyOperation = {
  __typename?: 'DefaultPayloadOfListOfCurrencyOperation';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<CurrencyOperation>>>;
};

export type DefaultPayloadOfListOfPaymentData = {
  __typename?: 'DefaultPayloadOfListOfPaymentData';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<PaymentData>>>;
};

export type DefaultPayloadOfPortfolio = {
  __typename?: 'DefaultPayloadOfPortfolio';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Portfolio>;
};

export type DefaultPayloadOfSharpeRatio = {
  __typename?: 'DefaultPayloadOfSharpeRatio';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<SharpeRatio>;
};

export type Dividend = {
  __typename?: 'Dividend';
  id: Scalars['UUID'];
  registryCloseDate: Scalars['DateTime'];
  value: Scalars['Decimal'];
  currency?: Maybe<Currency>;
  currencyId: Scalars['UUID'];
  stock?: Maybe<Stock>;
  stockId: Scalars['UUID'];
};

export type Fond = {
  __typename?: 'Fond';
  id: Scalars['UUID'];
  ticket: Scalars['String'];
  shortName: Scalars['String'];
  marketFullName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  latName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price: Scalars['Decimal'];
  priceChange: Scalars['Decimal'];
  updateTime: Scalars['DateTime'];
  averageProfit: Scalars['Decimal'];
  risk: Scalars['Decimal'];
  sharpeRatio: Scalars['Decimal'];
  portfolioFonds?: Maybe<Array<Maybe<PortfolioFond>>>;
};

export type HerfindahlHirschmanIndex = {
  __typename?: 'HerfindahlHirschmanIndex';
  value: Scalars['Decimal'];
  interpretation: HerfindahlHirschmanIndexInterpretation;
};

export enum HerfindahlHirschmanIndexInterpretation {
  Excellent = 'EXCELLENT',
  Good = 'GOOD',
  Normal = 'NORMAL',
  Bad = 'BAD',
  Terrible = 'TERRIBLE'
}


export type Mutation = {
  __typename?: 'Mutation';
  addPortfolio?: Maybe<DefaultPayload>;
  removePortfolio?: Maybe<DefaultPayload>;
  updatePortfolio?: Maybe<DefaultPayload>;
  createAssetOperation?: Maybe<DefaultPayload>;
  removeAssetOperation?: Maybe<DefaultPayload>;
  createCurrencyOperation?: Maybe<DefaultPayload>;
  removeCurrencyOperation?: Maybe<DefaultPayload>;
  createAssetOperations?: Maybe<DefaultPayload>;
  createCurrencyOperations?: Maybe<DefaultPayload>;
};


export type MutationAddPortfolioArgs = {
  input?: Maybe<AddPortfolioInput>;
};


export type MutationRemovePortfolioArgs = {
  input?: Maybe<RemovePortfolioInput>;
};


export type MutationUpdatePortfolioArgs = {
  input?: Maybe<UpdatePortfolioInput>;
};


export type MutationCreateAssetOperationArgs = {
  input?: Maybe<AssetOperationInput>;
};


export type MutationRemoveAssetOperationArgs = {
  assetOperationId: Scalars['UUID'];
};


export type MutationCreateCurrencyOperationArgs = {
  input?: Maybe<CurrencyOperationInput>;
};


export type MutationRemoveCurrencyOperationArgs = {
  currencyOperationId: Scalars['UUID'];
};


export type MutationCreateAssetOperationsArgs = {
  assetOperations?: Maybe<Array<Maybe<AssetOperationInput>>>;
};


export type MutationCreateCurrencyOperationsArgs = {
  currencyOperations?: Maybe<Array<Maybe<CurrencyOperationInput>>>;
};

export enum OperationType {
  RefillAction = 'REFILL_ACTION',
  DividendPayment = 'DIVIDEND_PAYMENT',
  CouponPayment = 'COUPON_PAYMENT',
  WithdrawalAction = 'WITHDRAWAL_ACTION',
  Commission = 'COMMISSION'
}

export type PaymentData = {
  __typename?: 'PaymentData';
  assetName?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  paymentValue: Scalars['Decimal'];
  amount: Scalars['Int'];
  total: Scalars['Decimal'];
  date: Scalars['DateTime'];
  currency?: Maybe<Currency>;
};

export type Portfolio = {
  __typename?: 'Portfolio';
  id: Scalars['UUID'];
  userId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cost: Scalars['Decimal'];
  investedSum: Scalars['Decimal'];
  paperProfit: Scalars['Decimal'];
  paperProfitPercent: Scalars['Decimal'];
  dividendProfit: Scalars['Decimal'];
  dividendProfitPercent: Scalars['Decimal'];
  rubBalance: Scalars['Decimal'];
  dollarBalance: Scalars['Decimal'];
  euroBalance: Scalars['Decimal'];
  portfolioTypeId: Scalars['UUID'];
  portfolioType?: Maybe<PortfolioType>;
  assetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
  currencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>;
  dailyPortfolioReports?: Maybe<Array<Maybe<DailyPortfolioReport>>>;
  portfolioStocks?: Maybe<Array<Maybe<PortfolioStock>>>;
  portfolioFonds?: Maybe<Array<Maybe<PortfolioFond>>>;
  portfolioBonds?: Maybe<Array<Maybe<PortfolioBond>>>;
};

export type PortfolioBond = {
  __typename?: 'PortfolioBond';
  id: Scalars['UUID'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Decimal'];
  cost: Scalars['Decimal'];
  paperProfit: Scalars['Decimal'];
  paperProfitPercent: Scalars['Decimal'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['UUID'];
  bondId: Scalars['UUID'];
  bond?: Maybe<Bond>;
};

export type PortfolioFond = {
  __typename?: 'PortfolioFond';
  id: Scalars['UUID'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Decimal'];
  cost: Scalars['Decimal'];
  paperProfit: Scalars['Decimal'];
  paperProfitPercent: Scalars['Decimal'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['UUID'];
  fondId: Scalars['UUID'];
  fond?: Maybe<Fond>;
};

export type PortfolioStock = {
  __typename?: 'PortfolioStock';
  id: Scalars['UUID'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Decimal'];
  cost: Scalars['Decimal'];
  paperProfit: Scalars['Decimal'];
  paperProfitPercent: Scalars['Decimal'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['UUID'];
  stockId: Scalars['UUID'];
  stock?: Maybe<Stock>;
};

export type PortfolioType = {
  __typename?: 'PortfolioType';
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
};

export type Query = {
  __typename?: 'Query';
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  portfolioTypes?: Maybe<Array<Maybe<PortfolioType>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  stocks?: Maybe<Array<Maybe<Stock>>>;
  fonds?: Maybe<Array<Maybe<Fond>>>;
  bonds?: Maybe<Array<Maybe<Bond>>>;
  assetOperations?: Maybe<DefaultPayloadOfListOfAssetOperation>;
  currencyOperations?: Maybe<DefaultPayloadOfListOfCurrencyOperation>;
  currencyOperationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  aggregatePortfolios?: Maybe<DefaultPayloadOfPortfolio>;
  stockCandles?: Maybe<Array<Maybe<Candle>>>;
  portfoliosCostGraph?: Maybe<DefaultPayloadOfListOfCostGraphData>;
  secretData?: Maybe<Scalars['String']>;
  parseAssetReport?: Maybe<Array<Maybe<AssetOperation>>>;
  parseCurrencyReport?: Maybe<Array<Maybe<CurrencyOperation>>>;
  futurePayments?: Maybe<DefaultPayloadOfListOfPaymentData>;
  portfolioAssetShares?: Maybe<DefaultPayloadOfListOfAssetShare>;
  herfindahlHirschmanIndex?: Maybe<DefaultPayloadOfHerfindahlHirschmanIndex>;
  sharpeRatio?: Maybe<DefaultPayloadOfSharpeRatio>;
};


export type QueryAssetOperationsArgs = {
  portfolioId: Scalars['UUID'];
};


export type QueryCurrencyOperationsArgs = {
  portfolioId: Scalars['UUID'];
};


export type QueryAggregatePortfoliosArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};


export type QueryStockCandlesArgs = {
  ticket?: Maybe<Scalars['String']>;
  from: Scalars['DateTime'];
  interval: CandleInterval;
};


export type QueryPortfoliosCostGraphArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};


export type QueryParseAssetReportArgs = {
  report?: Maybe<Scalars['Upload']>;
};


export type QueryParseCurrencyReportArgs = {
  report?: Maybe<Scalars['Upload']>;
};


export type QueryFuturePaymentsArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};


export type QueryPortfolioAssetSharesArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};


export type QueryHerfindahlHirschmanIndexArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};


export type QuerySharpeRatioArgs = {
  portfolioIds?: Maybe<Array<Scalars['UUID']>>;
};

export type RemovePortfolioInput = {
  portfolioId: Scalars['UUID'];
};

export enum SharpRatioInterpretation {
  Excellent = 'EXCELLENT',
  Good = 'GOOD',
  Normal = 'NORMAL',
  Bad = 'BAD',
  Terrible = 'TERRIBLE'
}

export type SharpeRatio = {
  __typename?: 'SharpeRatio';
  value: Scalars['Decimal'];
  risk: Scalars['Decimal'];
  profit: Scalars['Decimal'];
  safeRate: Scalars['Decimal'];
  interpretation: SharpRatioInterpretation;
};

export type Stock = {
  __typename?: 'Stock';
  id: Scalars['UUID'];
  ticket: Scalars['String'];
  shortName: Scalars['String'];
  marketFullName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  latName?: Maybe<Scalars['String']>;
  lotSize: Scalars['Int'];
  issueSize: Scalars['Long'];
  prevClosePrice: Scalars['Decimal'];
  capitalization: Scalars['Long'];
  description?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  price: Scalars['Decimal'];
  priceChange: Scalars['Decimal'];
  updateTime: Scalars['DateTime'];
  averageProfit: Scalars['Decimal'];
  risk: Scalars['Decimal'];
  sharpeRatio: Scalars['Decimal'];
  portfolioStocks?: Maybe<Array<Maybe<PortfolioStock>>>;
  dividends?: Maybe<Array<Maybe<Dividend>>>;
};

export type TimeValue = {
  __typename?: 'TimeValue';
  date: Scalars['Long'];
  value: Scalars['Decimal'];
};


export type UpdatePortfolioInput = {
  portfolioId: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  typeId: Scalars['UUID'];
};


export type AggregatePortfoliosQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['UUID']> | Scalars['UUID']>;
}>;


export type AggregatePortfoliosQuery = (
  { __typename?: 'Query' }
  & { aggregatePortfolios?: Maybe<(
    { __typename?: 'DefaultPayloadOfPortfolio' }
    & Pick<DefaultPayloadOfPortfolio, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'Portfolio' }
      & Pick<Portfolio, 'cost' | 'investedSum' | 'paperProfit' | 'paperProfitPercent' | 'rubBalance' | 'dollarBalance' | 'euroBalance' | 'dividendProfit' | 'dividendProfitPercent'>
      & { portfolioStocks?: Maybe<Array<Maybe<(
        { __typename?: 'PortfolioStock' }
        & Pick<PortfolioStock, 'id' | 'amount' | 'cost' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent'>
        & { stock?: Maybe<(
          { __typename?: 'Stock' }
          & Pick<Stock, 'ticket' | 'shortName' | 'price' | 'priceChange' | 'updateTime'>
        )> }
      )>>>, portfolioFonds?: Maybe<Array<Maybe<(
        { __typename?: 'PortfolioFond' }
        & Pick<PortfolioFond, 'id' | 'amount' | 'cost' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent'>
        & { fond?: Maybe<(
          { __typename?: 'Fond' }
          & Pick<Fond, 'ticket' | 'shortName' | 'price' | 'priceChange' | 'updateTime'>
        )> }
      )>>>, portfolioBonds?: Maybe<Array<Maybe<(
        { __typename?: 'PortfolioBond' }
        & Pick<PortfolioBond, 'id' | 'cost' | 'amount' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent'>
        & { bond?: Maybe<(
          { __typename?: 'Bond' }
          & Pick<Bond, 'ticket' | 'percent' | 'percentChange' | 'price' | 'amortizationDate' | 'coupon' | 'nominal' | 'shortName' | 'updateTime'>
        )> }
      )>>> }
    )> }
  )> }
);

export type HerfindahlHirschmanIndexQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['UUID']> | Scalars['UUID']>;
}>;


export type HerfindahlHirschmanIndexQuery = (
  { __typename?: 'Query' }
  & { herfindahlHirschmanIndex?: Maybe<(
    { __typename?: 'DefaultPayloadOfHerfindahlHirschmanIndex' }
    & Pick<DefaultPayloadOfHerfindahlHirschmanIndex, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'HerfindahlHirschmanIndex' }
      & Pick<HerfindahlHirschmanIndex, 'value' | 'interpretation'>
    )> }
  )> }
);

export type SharpeRatioQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['UUID']> | Scalars['UUID']>;
}>;


export type SharpeRatioQuery = (
  { __typename?: 'Query' }
  & { sharpeRatio?: Maybe<(
    { __typename?: 'DefaultPayloadOfSharpeRatio' }
    & Pick<DefaultPayloadOfSharpeRatio, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'SharpeRatio' }
      & Pick<SharpeRatio, 'value' | 'risk' | 'profit' | 'safeRate' | 'interpretation'>
    )> }
  )> }
);

export type PortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfoliosQuery = (
  { __typename?: 'Query' }
  & { portfolios?: Maybe<Array<Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'name'>
    & { portfolioType?: Maybe<(
      { __typename?: 'PortfolioType' }
      & Pick<PortfolioType, 'iconUrl'>
    )> }
  )>>> }
);


export const AggregatePortfoliosDocument = gql`
    query aggregatePortfolios($portfolioIds: [UUID!]) {
  aggregatePortfolios(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      cost
      investedSum
      paperProfit
      paperProfitPercent
      rubBalance
      dollarBalance
      euroBalance
      dividendProfit
      dividendProfitPercent
      portfolioStocks {
        stock {
          ticket
          shortName
          price
          priceChange
          updateTime
        }
        id
        amount
        cost
        boughtPrice
        paperProfit
        paperProfitPercent
      }
      portfolioFonds {
        fond {
          ticket
          shortName
          price
          priceChange
          updateTime
        }
        id
        amount
        cost
        boughtPrice
        paperProfit
        paperProfitPercent
      }
      portfolioBonds {
        bond {
          ticket
          percent
          percentChange
          price
          amortizationDate
          coupon
          nominal
          shortName
          updateTime
        }
        id
        cost
        amount
        boughtPrice
        paperProfit
        paperProfitPercent
      }
    }
  }
}
    `;

/**
 * __useAggregatePortfoliosQuery__
 *
 * To run a query within a React component, call `useAggregatePortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregatePortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregatePortfoliosQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregatePortfoliosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregatePortfoliosQuery, AggregatePortfoliosQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregatePortfoliosQuery, AggregatePortfoliosQueryVariables>(AggregatePortfoliosDocument, baseOptions);
      }
export function useAggregatePortfoliosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregatePortfoliosQuery, AggregatePortfoliosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregatePortfoliosQuery, AggregatePortfoliosQueryVariables>(AggregatePortfoliosDocument, baseOptions);
        }
export type AggregatePortfoliosQueryHookResult = ReturnType<typeof useAggregatePortfoliosQuery>;
export type AggregatePortfoliosLazyQueryHookResult = ReturnType<typeof useAggregatePortfoliosLazyQuery>;
export type AggregatePortfoliosQueryResult = ApolloReactCommon.QueryResult<AggregatePortfoliosQuery, AggregatePortfoliosQueryVariables>;
export const HerfindahlHirschmanIndexDocument = gql`
    query herfindahlHirschmanIndex($portfolioIds: [UUID!]) {
  herfindahlHirschmanIndex(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      value
      interpretation
    }
  }
}
    `;

/**
 * __useHerfindahlHirschmanIndexQuery__
 *
 * To run a query within a React component, call `useHerfindahlHirschmanIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useHerfindahlHirschmanIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHerfindahlHirschmanIndexQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useHerfindahlHirschmanIndexQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HerfindahlHirschmanIndexQuery, HerfindahlHirschmanIndexQueryVariables>) {
        return ApolloReactHooks.useQuery<HerfindahlHirschmanIndexQuery, HerfindahlHirschmanIndexQueryVariables>(HerfindahlHirschmanIndexDocument, baseOptions);
      }
export function useHerfindahlHirschmanIndexLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HerfindahlHirschmanIndexQuery, HerfindahlHirschmanIndexQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HerfindahlHirschmanIndexQuery, HerfindahlHirschmanIndexQueryVariables>(HerfindahlHirschmanIndexDocument, baseOptions);
        }
export type HerfindahlHirschmanIndexQueryHookResult = ReturnType<typeof useHerfindahlHirschmanIndexQuery>;
export type HerfindahlHirschmanIndexLazyQueryHookResult = ReturnType<typeof useHerfindahlHirschmanIndexLazyQuery>;
export type HerfindahlHirschmanIndexQueryResult = ApolloReactCommon.QueryResult<HerfindahlHirschmanIndexQuery, HerfindahlHirschmanIndexQueryVariables>;
export const SharpeRatioDocument = gql`
    query sharpeRatio($portfolioIds: [UUID!]) {
  sharpeRatio(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      value
      risk
      profit
      safeRate
      interpretation
    }
  }
}
    `;

/**
 * __useSharpeRatioQuery__
 *
 * To run a query within a React component, call `useSharpeRatioQuery` and pass it any options that fit your needs.
 * When your component renders, `useSharpeRatioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSharpeRatioQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useSharpeRatioQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SharpeRatioQuery, SharpeRatioQueryVariables>) {
        return ApolloReactHooks.useQuery<SharpeRatioQuery, SharpeRatioQueryVariables>(SharpeRatioDocument, baseOptions);
      }
export function useSharpeRatioLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SharpeRatioQuery, SharpeRatioQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SharpeRatioQuery, SharpeRatioQueryVariables>(SharpeRatioDocument, baseOptions);
        }
export type SharpeRatioQueryHookResult = ReturnType<typeof useSharpeRatioQuery>;
export type SharpeRatioLazyQueryHookResult = ReturnType<typeof useSharpeRatioLazyQuery>;
export type SharpeRatioQueryResult = ApolloReactCommon.QueryResult<SharpeRatioQuery, SharpeRatioQueryVariables>;
export const PortfoliosDocument = gql`
    query portfolios {
  portfolios {
    id
    name
    portfolioType {
      iconUrl
    }
  }
}
    `;

/**
 * __usePortfoliosQuery__
 *
 * To run a query within a React component, call `usePortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortfoliosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
        return ApolloReactHooks.useQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions);
      }
export function usePortfoliosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions);
        }
export type PortfoliosQueryHookResult = ReturnType<typeof usePortfoliosQuery>;
export type PortfoliosLazyQueryHookResult = ReturnType<typeof usePortfoliosLazyQuery>;
export type PortfoliosQueryResult = ApolloReactCommon.QueryResult<PortfoliosQuery, PortfoliosQueryVariables>;