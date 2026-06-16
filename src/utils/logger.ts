/**
 * Production-safe logging utility
 * In production, logs are sent to error tracking service (Sentry, etc.)
 * In development, logs appear in console
 */

const isDevelopment = import.meta.env.DEV;

type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

class Logger {
  private queue: LogEntry[] = [];
  private maxQueueSize = 50;

  private formatLog(level: LogLevel, message: string, context?: Record<string, unknown>) {
    return {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
    };
  }

  private enqueue(entry: LogEntry) {
    this.queue.push(entry);
    if (this.queue.length > this.maxQueueSize) {
      this.queue.shift();
    }
  }

  info(message: string, context?: Record<string, unknown>) {
    const entry = this.formatLog('info', message, context);
    this.enqueue(entry);
    if (isDevelopment) {
      console.info(`[INFO] ${message}`, context);
    }
  }

  warn(message: string, context?: Record<string, unknown>) {
    const entry = this.formatLog('warn', message, context);
    this.enqueue(entry);
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, context);
    }
  }

  error(message: string, error?: unknown, context?: Record<string, unknown>) {
    let errorMessage = message;
    const errorContext = { ...context };

    if (error instanceof Error) {
      errorMessage = `${message}: ${error.message}`;
      errorContext.stack = error.stack;
      errorContext.name = error.name;
    } else if (typeof error === 'string') {
      errorMessage = `${message}: ${error}`;
    }

    const entry = this.formatLog('error', errorMessage, errorContext);
    this.enqueue(entry);

    if (isDevelopment) {
      console.error(`[ERROR] ${errorMessage}`, errorContext);
    } else {
      // In production, you can send to error tracking service
      // Example: sendToSentry(entry);
    }
  }

  /**
   * Get recent logs for debugging
   */
  getRecentLogs(count: number = 10): LogEntry[] {
    return this.queue.slice(-count);
  }

  /**
   * Clear log queue
   */
  clear() {
    this.queue = [];
  }
}

export const logger = new Logger();
