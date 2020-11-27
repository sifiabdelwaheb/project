function Similarity(similarity) {
  this.similarity = similarity;
}

function SimilarityForm() {
  return new Similarity({
    Type_local: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'Type local:',
        name: 'Type local',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      options: [
        { label: 'Infinix', id: 'Infinix' },
        { label: 'Oppo', id: 'Oppo' },
        { label: 'Nokia', id: 'Nokia' },
        { label: 'Samsung', id: 'Samsung' },
        { label: 'Iku', id: 'Iku' },
        { label: 'Huawei', id: 'Huawei' },
        { label: 'Evertek', id: 'Evertek' },
        { label: 'Logicom', id: 'Logicom' },
        { label: 'ZTE', id: 'ZTE' },
      ],
    },
    Nombre_place: {
      elementType: 'Input',
      elementConfig: {
        type: 'input',
        label: 'Nombre de places :',
        name: 'prix',
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
        isNumber: true,
      },
      valid: false,
      touched: false,
    },
    adresse: {
      elementType: 'Input',
      elementConfig: {
        type: 'input',
        label: 'Adresse :',
        name: 'prix',
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
        isNumber: true,
      },
      valid: false,
      touched: false,
    },
    code: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'Code postale : ',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      options: [
        { label: '1.77', id: '1.77' },
        { label: '2.4', id: '2.4' },
        { label: '4.0', id: '4.0' },
        { label: '5.7', id: '5.7' },
        { label: '6.01', id: '6.01' },
        { label: '6.39', id: '6.39' },
        { label: '6.4', id: '6.4' },
        { label: '6.52', id: '6.52' },
        { label: '6.5', id: '6.5' },
        { label: '6.6', id: '6.6' },
        { label: '6.7', id: '6.7' },
        { label: '6.82', id: '6.82' },
        { label: '6.09', id: '6.09' },
        { label: '6.95', id: '6.95' },
        { label: '7.0', id: '7.0' },
      ],
    },
    surface: {
      elementType: 'Input',
      elementConfig: {
        type: 'input',
        label: 'Surface batie de bien :',
        name: 'prix',
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
        isNumber: true,
      },
      valid: false,
      touched: false,
    },
    ville: {
      elementType: 'Input',
      elementConfig: {
        type: 'input',
        label: 'Ville :',
        name: 'prix',
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: '',
      validation: {
        required: true,
        isNumber: true,
      },
      valid: false,
      touched: false,
    },
  });
}

export default SimilarityForm;
