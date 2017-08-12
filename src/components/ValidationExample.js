import React from 'react';

class ValidationExample extends React.Component {
    /**
     * 
     */
}

Content.propTypes = {

    // JS primitive types
    optionalArray: React.PropTypes.array,
    optionalArray: React.PropTypes.bool,
    optionalArray: React.PropTypes.func,
    optionalArray: React.PropTypes.number,
    optionalArray: React.PropTypes.object,
    optionalArray: React.PropTypes.string,

    // anything that can be rendered ( numbers, string, elements, array, fragment)
    optionalNode: React.PropTypes.node,

    // React element
    optionalElement: React.PropTypes.element,

    // instance of specific values
    optionalMessage: React.PropTypes.instanceOf(Message),

    // limited to specific values
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // one of many types
    optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),

    // array of specific type
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // object with property values of a certain type
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // object with particular shape
    optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),

    // Required function
    requiredFunc: React.PropTypes.func.isRequired,

    // Required prop with any data type
    requiredAny: React.PropTypes.any.isRequired,

    // custom validator
    customProp: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
            return new Error('Validation failed!');
        }
    }
};
/**
 * 
 */

export default ValidationExample;