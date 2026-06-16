/**
 * Performance Monitoring Utility
 * Tracks and reports Web Vitals and performance metrics
 */

export interface PerformanceMetrics {
  navigationTiming?: PerformanceTiming;
  coreWebVitals?: {
    lcp?: number; // Largest Contentful Paint
    fid?: number; // First Input Delay
    cls?: number; // Cumulative Layout Shift
  };
  pageLoadTime?: number;
  resourceMetrics?: {
    images: number;
    scripts: number;
    stylesheets: number;
    totalSize: number;
  };
}

class PerformanceMonitor {
  private isDevelopment = import.meta.env.DEV;

  /**
   * Get Core Web Vitals using Web Vitals API
   * Requires: https://github.com/GoogleChrome/web-vitals
   */
  getWebVitals(): PerformanceMetrics['coreWebVitals'] {
    if (!('PerformanceObserver' in window)) {
      return undefined;
    }

    const metrics: PerformanceMetrics['coreWebVitals'] = {};

    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if ('hadRecentInput' in layoutEntry && !layoutEntry.hadRecentInput) {
            const firstSessionEntry = metrics.cls || 0;
            metrics.cls = firstSessionEntry + (layoutEntry.value || 0);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      if (this.isDevelopment) {
        console.warn('Web Vitals API not available', error);
      }
    }

    return metrics;
  }

  /**
   * Get page load time in milliseconds
   */
  getPageLoadTime(): number {
    if (!('performance' in window)) {
      return 0;
    }

    const perfData = performance.timing;
    return perfData.loadEventEnd - perfData.navigationStart;
  }

  /**
   * Get resource metrics (images, scripts, stylesheets loaded)
   */
  getResourceMetrics(): PerformanceMetrics['resourceMetrics'] {
    if (!('getEntriesByType' in performance)) {
      return { images: 0, scripts: 0, stylesheets: 0, totalSize: 0 };
    }

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    let images = 0;
    let scripts = 0;
    let stylesheets = 0;

    resources.forEach((resource) => {
      totalSize += resource.transferSize || 0;

      if (resource.name.includes('.js')) scripts++;
      else if (resource.name.includes('.css')) stylesheets++;
      else if (resource.name.match(/\.(jpg|png|gif|svg|webp)$/i)) images++;
    });

    return {
      images,
      scripts,
      stylesheets,
      totalSize: Math.round(totalSize / 1024), // Convert to KB
    };
  }

  /**
   * Get comprehensive performance report
   */
  getReport(): PerformanceMetrics {
    return {
      navigationTiming: performance.timing,
      coreWebVitals: this.getWebVitals(),
      pageLoadTime: this.getPageLoadTime(),
      resourceMetrics: this.getResourceMetrics(),
    };
  }

  /**
   * Send performance data to analytics service
   * Implement based on your analytics provider
   */
  reportMetrics(metrics: PerformanceMetrics) {
    if (this.isDevelopment) {
      console.table({
        'Page Load Time': `${metrics.pageLoadTime}ms`,
        'LCP': `${metrics.coreWebVitals?.lcp?.toFixed(0)}ms`,
        'CLS': metrics.coreWebVitals?.cls?.toFixed(3),
        'Images': metrics.resourceMetrics?.images,
        'Scripts': metrics.resourceMetrics?.scripts,
        'Total Size': `${metrics.resourceMetrics?.totalSize}KB`,
      });
    }

    // Send to analytics service (Google Analytics, Sentry, etc.)
    // Example:
    // if (window.gtag) {
    //   window.gtag('event', 'page_view', {
    //     page_load_time: metrics.pageLoadTime,
    //     lcp: metrics.coreWebVitals?.lcp,
    //   });
    // }
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Report metrics after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = performanceMonitor.getReport();
      performanceMonitor.reportMetrics(metrics);
    }, 0);
  });
}
