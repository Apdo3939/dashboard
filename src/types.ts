export type SalesByDateType = {
  date: string;
  sum: number;
};

export type ChartSeriesDataType = {
  x: string;
  y: number;
};

export type GenderType = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: GenderType;
};
