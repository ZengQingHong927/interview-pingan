var   { reverseNestedObj }      = require ('../index');


test ('Reverse nested object', () => {
        var inputValue = {
                hired: {
                        be: {
                                to: {
                                        deserve: 'I'
                                }
                        }
                }
        };

        var outputValue = {
                I: {
                        deserve: {
                                to: {
                                        be: 'hired'
                                }
                        }
                }
        };
        
        
        expect(reverseNestedObj (inputValue)).toEqual(outputValue);
});