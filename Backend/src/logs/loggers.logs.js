import log4js from 'log4js';

log4js.configure({
	appenders: {
		consola: { type: 'console' },
		archivoError: { type: 'file', filename: 'error.log' },
		loggerInfo: {
			type: 'logLevelFilter',
			appender: 'consola',
			level: 'trace',
		},
		loggerError: {
			type: 'logLevelFilter',
			appender: 'archivoError',
			level: 'error',
		},
	},
	categories: {
		default: {
			appenders: ['loggerInfo', 'loggerError'],
			level: 'all',
		},
	},
});

export const logger = log4js.getLogger('default');
