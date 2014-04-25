angular.module('valdr')

  .factory('minLengthValidator', ['valdrUtil', function (valdrUtil) {
    return {
      name: 'minLengthValidator',

      /**
       * Checks if the value is a string and if it's at least 'constraint.number' of characters long.
       *
       * @param value the value to validate
       * @param constraint with property 'number'
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var minLength = constraint.number;

        if (valdrUtil.isEmpty(value)) {
          return minLength === 0;
        }

        if (typeof value === 'string') {
          return value.length >= minLength;
        } else {
          return false;
        }
      }
    };
  }]);
