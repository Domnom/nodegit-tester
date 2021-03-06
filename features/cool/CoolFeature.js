const ValidationService = require('../../service/ValidationService');

export default class CoolFeature
{
    name;

    constructor(name)
    {
        if (ValidationService.isACoolName(name))
        {
            this.name = name;
        }
        else
        {
            this.name = "My Cool feature";
        }
        
    }

    getACoolMessage()
    {
        return this.name + " is pretty cool";
    }
}