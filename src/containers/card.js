import { connect } from 'react-redux';
import * as cardActions from '../actions/cardActions';
import Card from '../components/card';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => (bindActionCreators({
        closeCard: cardActions.closeCard
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(Card);