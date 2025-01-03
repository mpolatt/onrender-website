import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { analyticsService, type SearchAnalytics } from '../services/analytics';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

const searchableContent: SearchResult[] = [
  // Services
  {
    title: 'Cloud Migration',
    description: 'Expert guidance for seamless transition to Google Cloud Platform',
    path: '/services/cloud-migration',
    category: 'Services'
  },
  {
    title: 'Infrastructure Management',
    description: 'Comprehensive cloud infrastructure management and optimization',
    path: '/services/infrastructure-management',
    category: 'Services'
  },
  {
    title: 'Data Analytics & ML',
    description: 'Advanced analytics, machine learning, and AI solutions with Vertex AI',
    path: '/services/data-analytics',
    category: 'Services'
  },
  // Products
  {
    title: 'Google Cloud Anthos',
    description: 'Hybrid and multi-cloud application platform',
    path: '/products#anthos',
    category: 'Products'
  },
  {
    title: 'Google Cloud Apigee',
    description: 'API management and integration platform',
    path: '/products#apigee',
    category: 'Products'
  },
  {
    title: 'Google Kubernetes Engine',
    description: 'Managed Kubernetes service for containerized applications',
    path: '/products#gke',
    category: 'Products'
  },
  // Company
  {
    title: 'About Us',
    description: 'Learn about our expertise in software architecture and development',
    path: '/about',
    category: 'Company'
  },
  {
    title: 'Contact',
    description: 'Get in touch with our team of cloud experts',
    path: '/contact',
    category: 'Company'
  },
  {
    title: 'Careers',
    description: 'Join our team of cloud and technology experts',
    path: '/careers',
    category: 'Company'
  },
  // Technologies
  {
    title: 'MLOps',
    description: 'Machine Learning Operations and automation',
    path: '/services/data-analytics#mlops',
    category: 'Technologies'
  },
  {
    title: 'Ray',
    description: 'Distributed computing framework for ML applications',
    path: '/services/data-analytics#ray',
    category: 'Technologies'
  },
  {
    title: 'Vertex AI',
    description: 'Unified ML platform for building and deploying models',
    path: '/services/data-analytics#vertex-ai',
    category: 'Technologies'
  }
];

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [popularSearches, setPopularSearches] = useState<Array<{ query: string; count: number }>>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = Array.from(new Set(searchableContent.map(item => item.category)));
  
  // Map number keys to categories
  const categoryShortcuts: { [key: string]: string } = {
    '1': 'All',
    '2': 'Services',
    '3': 'Products',
    '4': 'Company',
    '5': 'Technologies'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchableContent.filter(item =>
        (item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())) &&
        (!selectedCategory || item.category === selectedCategory)
      );
      setResults(filtered);
      setSelectedIndex(0);

      // Track search analytics
      analyticsService.trackSearch({
        query: query.trim(),
        timestamp: Date.now(),
        category: selectedCategory,
        resultsCount: filtered.length
      });

      // Update popular searches
      setPopularSearches(analyticsService.getPopularSearches(5));
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle category shortcuts when Alt key is pressed
    if (e.altKey && categoryShortcuts[e.key]) {
      e.preventDefault();
      const category = categoryShortcuts[e.key] === 'All' ? null : categoryShortcuts[e.key];
      setSelectedCategory(category);
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].path;
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const highlightMatch = (text: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={i} className="bg-blue-100 text-blue-900">{part}</span> : 
        part
    );
  };

  const handleResultClick = (result: SearchResult) => {
    analyticsService.trackSearch({
      query: query.trim(),
      timestamp: Date.now(),
      category: selectedCategory,
      resultsCount: results.length,
      selectedResult: {
        title: result.title,
        category: result.category,
        path: result.path
      }
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="ml-2">Search</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for services, products, etc..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Popular Searches */}
              {!query && popularSearches.length > 0 && (
                <div className="mt-4">
                  <div className="text-xs font-medium text-gray-500 mb-2">Popular Searches</div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map(({ query, count }) => (
                      <button
                        key={query}
                        onClick={() => setQuery(query)}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        {query} ({count})
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Category filters with keyboard shortcuts */}
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === null
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All <span className="ml-1 text-gray-400">Alt+1</span>
                </button>
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category} <span className="ml-1 text-gray-400">Alt+{index + 2}</span>
                  </button>
                ))}
              </div>

              {results.length > 0 && (
                <div className="mt-4 divide-y divide-gray-100">
                  {results.map((result, index) => (
                    <Link
                      key={result.path}
                      to={result.path}
                      className={`block px-4 py-3 hover:bg-gray-50 rounded-lg ${
                        index === selectedIndex ? 'bg-gray-50' : ''
                      }`}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {highlightMatch(result.title)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {highlightMatch(result.description)}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{result.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {query && results.length === 0 && (
                <div className="mt-4 text-center text-gray-500 py-12">
                  No results found for "{query}"
                </div>
              )}

              {/* Updated keyboard shortcuts help */}
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div>↑↓ to navigate</div>
                    <div>Enter to select</div>
                  </div>
                  <div>
                    <div>Esc to close</div>
                    <div>Alt + 1-5 for categories</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search; 