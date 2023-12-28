export interface IRecentTransaction {
  datetime: string;
  merchantName: string;
  transactionType: string;
  checkResult: string;
  amount: number;
  currency?: string;
  transactionId?: string;
}

export interface Counts {
  period: string;
  fraudCount: number;
  suspectedCount: number;
  noConcernCount: number;
}
export interface IDashboardChart {
  counts: Counts[];
  endRange?: string;
  grouping?: string;
  startRange?: string;
}

type details = {
  count: number;
  percentage?: number;
  value?: number;
};

type date = {
  day: number;
  dayNumber: number;
  dayOfWeek: string;
  dayOfYear: number;
  month: number;
  year: number;
};

// export interface ITopRules {
//   minTransaction: details;
//   maxTransaction: details;
//   avgTransactionValue: details;
//   avgTransactionCount: details;
//   avgBatchValue: details;
//   valueCapping: details;
//   dormantAccount: details;
//   cardUsed: details;
//   sameIssuer: details;
//   declines: details;
// }

export interface ITopRules {
  [key: string]: details;
}

export interface IAmounts {
  currency: string;
  fraud: details;
  noConcern: details;
  suspected: details;
  totalAmount: number;
  totalCount?: number;
  startDate: date;
  endDate: date;
}
