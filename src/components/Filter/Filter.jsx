import s from './Filter.module.css'
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.elem}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={value}
        onChange={onChange}
        placeholder="Enter name "
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};