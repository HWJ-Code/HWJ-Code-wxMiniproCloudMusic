// app.js
import './utils/lib/lodash-fix'
import _ from './utils/lib/lodash.min'

App({
 onLaunch() {
   wx.$_ = _
 }
})
