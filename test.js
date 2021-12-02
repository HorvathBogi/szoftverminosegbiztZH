import { GenderGuesser } from "./GenderGuesser";
import {AttendaneList} from"./AttandanceList";

describe('Test for GenderGuesser API', () => {
    let name;
    beforeAll(() => {
        name = new GenderGuesser();
    });
    test('tim call',() => {
        name.getGuess("tim").then(result =>{
            expect(result).resolves;
        });
    });
    test('it should return a value', () => {
        name.getGuess('ben').then(result => {
            expect(result).not.toBe(null);
        });
    });
    test('name is male', () => {
        name.getGuess('').then(result => {
            except(result).arrayContaining('male');
        });
    });
});

describe('Test for AttandanceList',() =>{
    let list;
    beforeAll(() => {
        list = new AttendaneList();
    });
    test('attendanse list returbs a value', () =>{
        expect(list.include('bela')).toBeTruthy();
    });

});
  

