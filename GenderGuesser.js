import axios from "axios";

export class GenderGuesser {

getGuess(name){
    let string = axios.get('http://api.genderrize.io/?name-' + name);

    return string;
}
}