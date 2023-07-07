import {franc} from 'franc'; 
import langs from 'langs';
import colors from 'colors';

const userInput = process.argv[2];
const langCode = franc(userInput);

if (langCode === 'und') {
    console.log(colors.red("Input too short. Please try with more sample text"));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Your language is: ${language.name}`));
    } else {
        console.log(colors.red('Sorry, language code was not found'));
    }
    
};