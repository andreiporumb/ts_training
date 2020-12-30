import _defineProperty from"@babel/runtime/helpers/esm/defineProperty";import _extends from"@babel/runtime/helpers/esm/extends";import _objectWithoutProperties from"@babel/runtime/helpers/esm/objectWithoutProperties";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}import React,{useState,useCallback}from"react";import PropTypes from"prop-types";import{makeStyles,IconButton}from"@material-ui/core";import{Clear,CalendarToday}from"@material-ui/icons";import{MuiPickersUtilsProvider,KeyboardDateTimePicker}from"@material-ui/pickers";import MomentUtils from"@date-io/moment";import dateTimeStyle from"./dateTimeStyle";import moment from"moment";// ! To use another localization import "moment/locale/[lang]" in your app
moment.locale("en");const useStyles=makeStyles(dateTimeStyle);const defaultTimeFormat="HH:mm";const defaultDateFormat="DD-MM-YYYY";const TooltipArea=React.forwardRef((_ref,ref)=>{let{children}=_ref,props=_objectWithoutProperties(_ref,["children"]);return/*#__PURE__*/React.createElement("div",_extends({},props,{ref:ref}),children)});TooltipArea.displayName="TooltipArea";TooltipArea.propTypes={children:PropTypes.element};function DateTime(_ref2){let{value,onChange,dateFormat,timeFormat,showTime,clearable,disabled,error,helperText,invalidDateMessage,minDateMessage,maxDateMessage,language}=_ref2,rest=_objectWithoutProperties(_ref2,["value","onChange","dateFormat","timeFormat","showTime","clearable","disabled","error","helperText","invalidDateMessage","minDateMessage","maxDateMessage","language"]);const classes=useStyles();const[open,setOpen]=useState(false);const format=showTime?`${dateFormat} ${timeFormat}`:dateFormat;const errorData=disabled?{error:false,helperText:null}:error?{error,helperText}:{};const handleChange=useCallback(date=>onChange(date?moment(date).toDate():null),[onChange]);const handleSetOpen=useCallback(value=>()=>setOpen(value),[]);const handleClear=useCallback(()=>handleChange(null),[handleChange]);const clearablePickerProps={InputProps:{endAdornment:/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(IconButton,{disabled:disabled,onClick:handleClear,className:classes.dateTimeIconButtons},/*#__PURE__*/React.createElement(Clear,{fontSize:"small"})),/*#__PURE__*/React.createElement(IconButton,{disabled:disabled,onClick:handleSetOpen(true),className:classes.dateTimeIconButtons},/*#__PURE__*/React.createElement(CalendarToday,{fontSize:"small"})))},InputAdornmentProps:{position:"start",style:{display:"none"}}};const simplePickerProps={keyboardIcon:/*#__PURE__*/React.createElement(CalendarToday,{fontSize:"small",onClick:handleSetOpen(true)}),KeyboardButtonProps:{disabled:disabled,className:classes.dateTimeIconButtons}};const pickerProps=clearable&&value?clearablePickerProps:simplePickerProps;return/*#__PURE__*/React.createElement(MuiPickersUtilsProvider,{libInstance:moment,utils:MomentUtils,locale:language},/*#__PURE__*/React.createElement(KeyboardDateTimePicker,_extends({},pickerProps,{fullWidth:true,open:open,onClose:handleSetOpen(false),value:value,onChange:handleChange,format:format,invalidDateMessage:invalidDateMessage,minDateMessage:minDateMessage,maxDateMessage:maxDateMessage,className:classes.defaultFont,InputProps:_objectSpread({disabled,className:classes.dateTimeInput},pickerProps.InputProps),InputLabelProps:{className:classes.label}},errorData,rest)))}DateTime.defaultProps={value:null,onChange:()=>{},dateFormat:defaultDateFormat,timeFormat:defaultTimeFormat,variant:"inline",views:["date"],disabled:false,invalidDateMessage:"Invalid Date Format",minDateMessage:"Date should not be before minimal date",maxDateMessage:"Date should not be after maximal date",disableToolbar:true,autoOk:true,ampm:false};DateTime.propTypes={value:PropTypes.any,onChange:PropTypes.func,dateFormat:PropTypes.string,timeFormat:PropTypes.string,disabled:PropTypes.bool,variant:PropTypes.oneOf(["dialog","inline","static"]),views:PropTypes.arrayOf(PropTypes.oneOf(["date","year","month","hours","minutes"])),showTime:PropTypes.bool,error:PropTypes.bool,helperText:PropTypes.string,clearable:PropTypes.bool,invalidDateMessage:PropTypes.node,maxDateMessage:PropTypes.node,minDateMessage:PropTypes.node,language:PropTypes.string,disableToolbar:PropTypes.bool,autoOk:PropTypes.bool,ampm:PropTypes.bool};export default DateTime;

//# sourceMappingURL=DateTime.js.map