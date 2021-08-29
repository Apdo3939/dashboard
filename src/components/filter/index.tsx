import './styles.css';
import 'flatpickr/dist/themes/dark.css';
import FlatPicker from 'react-flatpickr';
import FlatPickerLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import React, { useState } from 'react';
import { FilterData, GenderType } from '../../types';

FlatPickerLib.localize(Portuguese);

type Props = {
  onChangeFilter: (filter: FilterData) => void;
};

export default function Filter({ onChangeFilter }: Props) {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<GenderType>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onChangeFilter({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectGender = event.target.value as GenderType;
    setGender(selectGender);
    onChangeFilter({ dates, gender: selectGender });
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
        options={{ mode: 'range', dateFormat: 'd-m-Y', showMonths: 2 }}
      />
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outros</option>
      </select>
    </div>
  );
}
