import { decimal } from "./masks/decimal";

export const br = {

  'pt-br': {

    masks: {
      cpf: { mask: '000.000.000-00' },
      cnpj: { mask: '00.000.000/{0}{0}{0}0-00' },
      doc: {
        mask: [
          { mask: '000.000.000-00' },
          { mask: '00.000.000/{0}{0}{0}0-00' }
        ],
      },
      'car-plate': {
        mask: 'aaa-0**0',
        prepare: function (str: string) {
          return str.toUpperCase();
        }
      },
      phone: {
        mask: '[00] [{9}] `0000-0000',
      },
      'postal-code': {
        mask: '00000-000',
      },
      decimal: decimal()
    }

  }

}