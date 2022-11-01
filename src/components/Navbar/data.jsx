import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
export const sublinks = [
  {
    page: 'HomePage',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/' },
      { label: 'connect', icon: <FaCreditCard />, url: '/' },
    ],
  },
  {
    page: 'ProductPage',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'AccountPage',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/account' },
      { label: 'customers', icon: <FaBriefcase />, url: '/account' },
    ],
  },
];
