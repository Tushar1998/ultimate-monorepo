import { Logger, LogLevel } from '@nestjs/common';
import lower from 'lodash/toLower';

export function applyLogLevel(logLevel: string): LogLevel[] {
  const envLog = lower(logLevel);
  const logger = new Logger('Logger Levels');

  let logs: LogLevel[] = ['log', 'error', 'warn'];

  if (envLog === 'debug') {
    logs.push('debug');
  } else if (envLog === 'verbose') {
    logs.push('debug', 'verbose');
  }
  logger.log(`Log levels applied ${logs}`);
  return logs;
}
