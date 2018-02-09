import {connect} from 'react-redux';
import BoardColumn from './BoardColumn.component';

import {setColumnOnAdd} from '../Projects.module';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  onSetColumnOnAdd(column){
    dispatch(setColumnOnAdd(column))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardColumn);
