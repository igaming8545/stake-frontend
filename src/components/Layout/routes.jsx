import React from 'react';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import NotFound from '../../pages/NotFound';

// Import transaction components
// Lazy-loaded components (loaded on demand)
const Home = lazy(() => import('../../pages/LandingPage'));
const CasinoHome = lazy(() => import('../../pages/CasinoHome'));
const AffiliatePage = lazy(() => import('../../pages/AffiliatePage'));
const VipClubPage = lazy(() => import('../../pages/VipClubPage'));
const CrashGame = lazy(() => import('../../Games/Crash/Index'));
const Transactions = lazy(() => import('../../pages/Transactions'));

// Lazy-loaded affiliate tab components - corrected paths
const AffiliateOverview = lazy(() => import('../../pages/affiliateComponent/Overview'));
const AffiliateCampaigns = lazy(() => import('../../pages/affiliateComponent/Campaigns'));
const AffiliateCommission = lazy(() => import('../../pages/affiliateComponent/Commission'));
const AffiliateReferredUsers = lazy(() => import('../../pages/affiliateComponent/ReferredUsers'));
const AffiliateFAQs = lazy(() => import('../../pages/affiliateComponent/FAQs'));

const Deposit = lazy(() => import('../../pages/transactionComponents/Deposit'));
const Withdraw = lazy(() => import('../../pages/transactionComponents/Withdraw'));
const Bills = lazy(() => import('../../pages/transactionComponents/Bills'));
const Others = lazy(() => import('../../pages/transactionComponents/Others'));

// Define all application routes
const routes = [
  // Main routes
  { path: '/', element: <Home /> },
  
  // Casino routes
  { path: '/casino', element: <Navigate to="/casino/home" replace /> },
  { path: '/casino/home', element: <CasinoHome /> },
  { path: '/casino/game/crash', element: <CrashGame /> },
//   { path: '/casino/game/plinko', element: <PlinkoGame /> },
//   { path: '/casino/game/hilo', element: <HiloGame /> },
  
  // VIP Club route
  { path: '/vip-club', element: <VipClubPage /> },
  
  // Transaction routes with nested components
  { 
    path: '/transactions', 
    element: <Transactions />,
    children: [
      { path: '', element: <Navigate to="/transactions/deposit" replace /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'withdraw', element: <Withdraw /> },
      { path: 'bills', element: <Bills /> },
      { path: 'others', element: <Others /> }
    ]
  },
  
  // Affiliate routes with nested components
  {
    path: '/affiliate',
    element: <AffiliatePage />,
    children: [
      { path: '', element: <Navigate to="/affiliate/overview" replace /> },
      { path: 'overview', element: <AffiliateOverview /> },
      { path: 'campaigns', element: <AffiliateCampaigns /> },
      { path: 'commission', element: <AffiliateCommission /> },
      { path: 'referred-users', element: <AffiliateReferredUsers /> },
      { path: 'faqs', element: <AffiliateFAQs /> }
    ]
  },
  
  // Catch-all route for 404
  { path: '*', element: <NotFound /> }
];

// Authentication-required routes
const protectedRoutes = [
  '/transactions',
  '/affiliate/campaigns',
  '/affiliate/commission',
  '/affiliate/referred-users'
];

// Routes that should use the game layout
const gameRoutes = [
  '/casino/game/crash',
  '/casino/game/plinko',
  '/casino/game/hilo'
];

// Export the routes and helper functions
export { routes, protectedRoutes, gameRoutes };