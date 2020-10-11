var   { reverseNestedObj }      = require ('../../index');


test ('Reverse nested object', () => {
        // Input:
        let inputValue = {
                hired: {
                        be: {
                                to: {
                                        deserve: 'I'
                                }
                        }
                }
        };
       
        // Output:
        let outputValue = {
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