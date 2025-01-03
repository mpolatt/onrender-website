interface SearchAnalytics {
  query: string;
  timestamp: number;
  category: string | null;
  resultsCount: number;
  selectedResult?: {
    title: string;
    category: string;
    path: string;
  };
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private _searchHistory: SearchAnalytics[] = [];
  private _popularSearches: Map<string, number> = new Map();

  private constructor() {}

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  trackSearch(analytics: SearchAnalytics): void {
    this._searchHistory.push(analytics);
    this.updatePopularSearches(analytics.query);
    
    // Log analytics data
    console.log('Search Analytics:', {
      query: analytics.query,
      timestamp: new Date(analytics.timestamp).toISOString(),
      category: analytics.category,
      resultsCount: analytics.resultsCount,
      selectedResult: analytics.selectedResult
    });
  }

  private updatePopularSearches(query: string): void {
    const normalizedQuery = query.toLowerCase().trim();
    if (normalizedQuery) {
      this._popularSearches.set(
        normalizedQuery,
        (this._popularSearches.get(normalizedQuery) || 0) + 1
      );
    }
  }

  getPopularSearches(limit: number = 10): Array<{ query: string; count: number }> {
    return Array.from(this._popularSearches.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([query, count]) => ({ query, count }));
  }

  getRecentSearches(limit: number = 10): SearchAnalytics[] {
    return this._searchHistory
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  getSearchesByCategory(category: string): SearchAnalytics[] {
    return this._searchHistory.filter(
      analytics => analytics.category === category
    );
  }

  getAverageResultsCount(): number {
    if (this._searchHistory.length === 0) return 0;
    const total = this._searchHistory.reduce(
      (sum, analytics) => sum + analytics.resultsCount,
      0
    );
    return total / this._searchHistory.length;
  }

  getTotalSearchCount(): number {
    return this._searchHistory.length;
  }

  getUniqueSearchCount(): number {
    return this._popularSearches.size;
  }

  getSearchVolumeByTimeRange(range: 'day' | 'week' | 'month'): Array<{ time: string; searches: number }> {
    const now = new Date();
    const timePoints = range === 'day' ? 24 : range === 'week' ? 7 : 30;
    const data = Array.from({ length: timePoints }, (_, i) => {
      const timestamp = range === 'day' 
        ? now.getTime() - (23 - i) * 3600000
        : range === 'week'
        ? now.getTime() - (6 - i) * 86400000
        : now.getTime() - (29 - i) * 86400000;

      const searches = this._searchHistory.filter(analytics => {
        const diff = timestamp - analytics.timestamp;
        return range === 'day'
          ? diff >= 0 && diff < 3600000
          : diff >= 0 && diff < 86400000;
      }).length;

      return {
        time: range === 'day'
          ? `${i}:00`
          : range === 'week'
          ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(timestamp).getDay()]
          : `${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth() + 1}`,
        searches
      };
    });

    return data;
  }

  clearHistory(): void {
    this._searchHistory = [];
    this._popularSearches.clear();
  }
}

export const analyticsService = AnalyticsService.getInstance();
export type { SearchAnalytics }; 