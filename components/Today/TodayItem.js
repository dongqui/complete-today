import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

const TodayItem = ({ item }) => {

}

const mapStateToProps = ({ item }) => { item }
const mapDispatchToProps = { done }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayScreen)