import {DATES} from '../../../../assets/mock-data';

const PAYMENT_LIST = [
  { name: 'Кредитная карта' },
  { name: 'PayPal' },
  { name: 'Наличными' }
];

const DATA_STEP_1 = {
  item: {
    type: 'item',
    options: DATES,
    validations: {
      required: true,
    },
    errors: {},
    placeholder: 'Выберите товар',
  }
};

const DATA_STEP_2 = {
  country: { type: 'text', validations: {
      required: true,
      minLength: 2
    }, errors: {
      required: 'Поле не должно быть пустым',
      minlength: 'Минимальное количество букв 2'
    }, placeholder: 'Страна' },
  city: { type: 'text', validations: {
      required: true,
      minLength: 2
    }, errors: {
      required: 'Поле не должно быть пустым',
      minlength: 'Минимальное количество букв 2'
    }, placeholder: 'Город' },
  address: { type: 'text', validations: {
      required: true,
      minLength: 2
    }, errors: {
      required: 'Поле не должно быть пустым',
      minlength: 'Минимальное количество букв 2'
    }, placeholder: 'Адрес' }
};

const DATA_STEP_3 = {
  payment: {
    type: 'select',
    options: PAYMENT_LIST,
    validations: {
      required: true,
    },
    errors: {},
    placeholder: 'Выберите способ оплаты',
  }
};

const DATA_STEP_4 = {
  chooseDate : {
    type: 'date',
    validations: {
      required: true,
    },
    errors: {},
    placeholder: 'Выберите дату',
  }
};

const STEP_ITEMS = [
  { label: 'Шаг 1 - выберите товар', data: DATA_STEP_1 },
  { label: 'Шаг 2 - адрес доставки', data: DATA_STEP_2 },
  { label: 'Шаг 3 - Способ оплаты', data: DATA_STEP_3 },
  { label: 'Шаг 4 - Дата доставки', data: DATA_STEP_4 },
  { label: 'Проверьте данные и Подтвердите', data: {} }
];

export { STEP_ITEMS };
