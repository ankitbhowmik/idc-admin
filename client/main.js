import {Meteor} from "meteor/meteor" ;

import '/imports/common/dynamicImports';

Meteor.startup(()=>{
  require("../imports/src/index.js");
})