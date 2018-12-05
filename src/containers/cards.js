import { connect } from 'react-redux';
import Cards from '../components/cards';
import {bindActionCreators} from "redux";
import * as cardActions from "../actions/cardActions";

const mapStateToProps = state => ({
    cards: state.cardState
});

const mapDispatchToProps = dispatch => (bindActionCreators({
        addCard: cardActions.addCard
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Cards);