"use client";

import React, { useState } from 'react';
import AddProductModal from '@/components/AddProductModal';

const SavorItStudio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'NuPhy Air75 V2', category: 'Keyboards', price: 119.00, status: 'Live' },
    { id: 2, name: 'Orbitkey Desk Mat', category: 'Accessories', price: 75.00, status: 'Live' }
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Stats Logic
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);

  const toggleStatus = (id) => {
    setProducts(products.map(p => p.id === id ? {...p, status: p.status === 'Live' ? 'Draft' : 'Live'} : p));
  };

  const deleteSelected = () => {
    setProducts(products.filter(p => !selectedItems.includes(p.id)));
    setSelectedItems([]);
  };

  // Add Product callback from slide-over modal
  const handleSaveProduct = (newProduct) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  // Filter products based on search
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-[#f4f4f5] font-sans fixed inset-0 z-[9999] text-zinc-800 select-none">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0a0a0a] text-white flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <span className="text-xl font-black tracking-tighter text-white">SAVOR.IT <span className="text-emerald-500">✦</span></span>
        </div>
        <nav className="p-4 space-y-2">
          <div className="text-[10px] font-bold text-zinc-500 uppercase px-4 mb-2">Workspace</div>
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white text-black font-bold flex items-center space-x-2 text-sm shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9z" clipRule="evenodd" /></svg>
            <span>Products & Gear</span>
          </button>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-zinc-200 px-8 flex items-center justify-between">
          <h1 className="font-bold text-zinc-900 flex items-center">
            Studio Inventory
            <span className="ml-2 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          </h1>
          <button onClick={() => window.location.href='/'} className="text-xs font-bold text-zinc-400 hover:text-black uppercase tracking-wider transition-colors">Exit Studio</button>
        </header>

        <div className="p-8 overflow-y-auto">
          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Total Items</p>
              <h3 className="text-2xl font-black text-zinc-950 mt-1">{products.length}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Total Value</p>
              <h3 className="text-2xl font-black text-zinc-950 mt-1">${totalValue.toFixed(2)}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Status</p>
              <h3 className="text-2xl font-black text-emerald-500 mt-1 flex items-center">
                <span>Healthy</span>
                <span className="ml-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              </h3>
            </div>
          </div>

          {/* TABLE ACTIONS */}
          <div className="flex justify-between items-center mb-6">
            <input 
              type="text" 
              placeholder="Search gear..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm w-64 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm" 
            />
            <div className="space-x-3 flex items-center">
              {selectedItems.length > 0 && (
                <button 
                  onClick={deleteSelected} 
                  className="text-red-500 text-xs font-black uppercase hover:underline transition-all tracking-wider"
                >
                  Delete Selected ({selectedItems.length})
                </button>
              )}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold active:scale-95 transition-transform shadow-md hover:bg-zinc-800"
              >
                + Add Gear
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 border-b border-zinc-100 text-[10px] uppercase font-bold text-zinc-400">
                <tr>
                  <th className="p-4 w-12">
                    <input 
                      type="checkbox" 
                      className="cursor-pointer rounded border-zinc-300 text-black focus:ring-black"
                      onChange={(e) => setSelectedItems(e.target.checked ? products.map(p=>p.id) : [])} 
                    />
                  </th>
                  <th className="p-4 tracking-wider">Name</th>
                  <th className="p-4 tracking-wider">Price</th>
                  <th className="p-4 tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-10 text-zinc-400 text-xs font-bold">
                      🍃 No curations found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map(p => (
                    <tr key={p.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4">
                        <input 
                          type="checkbox" 
                          className="cursor-pointer rounded border-zinc-300 text-black focus:ring-black"
                          checked={selectedItems.includes(p.id)} 
                          onChange={() => setSelectedItems(prev => prev.includes(p.id) ? prev.filter(i=>i!==p.id) : [...prev, p.id])}
                        />
                      </td>
                      <td className="p-4 text-sm font-bold text-zinc-900">{p.name}</td>
                      <td className="p-4 text-sm font-bold text-zinc-950">${parseFloat(p.price).toFixed(2)}</td>
                      <td className="p-4">
                        <button 
                          onClick={() => toggleStatus(p.id)} 
                          className={`text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest transition-all ${
                            p.status === 'Live' ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-100 text-zinc-600'
                          }`}
                        >
                          {p.status}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* --- ADD PRODUCT SLIDE-OVER OVERLAY MODAL --- */}
      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveProduct} 
      />

    </div>
  );
};

export default SavorItStudio;
