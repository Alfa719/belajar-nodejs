const yargs = require("yargs");
const { printQuestion } = require("./contacts");

yargs.command({
    command: 'add',
    describe: 'Add new contact',
    builder: {
        name: {
            describe: 'Your Full Name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Your Email',
            demandOption: false,
            type: 'string'
        },
        phone: {
            describe: 'Your Phone Number',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        printQuestion(argv.name, argv.email, argv.phone);
    }
});
yargs.parse();