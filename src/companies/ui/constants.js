import PropTypes from 'prop-types';

export const COMPANY_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastUpdated: PropTypes.instanceOf(Date),
});
