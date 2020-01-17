import { RadioButton } from 'components';

export default () => (
  <>
    <RadioButton
      groupLabel="gender"
      data={[{
        label: 'Male',
        value: 'male'
      }, {
        label: 'Female',
        value: 'female'
      }]}
    />
  </>
);
