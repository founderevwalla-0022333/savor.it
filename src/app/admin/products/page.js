"use client";

import React, { useState } from 'react';
import { Plus, ArrowLeft, UploadCloud, MoreVertical, Pencil, Trash2 } from 'lucide-react';

export default function AdminProducts() {
  const [currentView, setCurrentView] = useState('list');
  const [products, setProducts] = useState([
    { id: 1, name: 'Logitech MX Master 3S', category: 'Mouse', price: '$99', status: 'Active' },
    { id: 2, name: 'NuPhy Air75 V2', category: 'Keyboard', price: '$119', status: 'Active' },
    { id: 3, name: 'Orbitkey Desk Mat', category: 'Accessories', price: '$75', status: 'Draft' },
  ]);

  const handleDelete = (id) => {
    if (confirm("Delete this product?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-fade-in select-none">
      
      {/* HEADER AREA */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Products & Gear</h2>
          <p className="text-sm text-zinc-500 font-medium mt-1">Manage your inventory, prices, and aesthetics.</p>
        </div>
        
        {currentView === 'list' ? (
          <button 
            onClick={() => setCurrentView('add')}
            className="bg-black hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center space-x-2 active:scale-95 shadow-md"
          >
            <Plus size={16} strokeWidth={3} />
            <span>Add New Gear</span>
          </button>
        ) : (
          <button 
            onClick={() => setCurrentView('list')}
            className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center space-x-2 active:scale-95"
          >
            <ArrowLeft size={16} strokeWidth={3} />
            <span>Back to List</span>
          </button>
        )}
      </div>

      {/* CONDITIONAL RENDERING */}
      {currentView === 'list' ? (
        
        /* --- VIEW 1: PRODUCT LIST TABLE --- */
        <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-200 text-zinc-500 text-xs uppercase tracking-wider">
                <th className="p-5 font-bold">Product Name</th>
                <th className="p-5 font-bold">Category</th>
                <th className="p-5 font-bold">Price</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="font-bold text-zinc-900 text-sm">{product.name}</div>
                  </td>
                  <td className="p-5 text-sm text-zinc-600 font-medium">{product.category}</td>
                  <td className="p-5 text-sm text-zinc-900 font-bold">{product.price}</td>
                  <td className="p-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      product.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-5 flex justify-end items-center space-x-3">
                    <button className="text-zinc-400 hover:text-blue-500 transition-colors">
                      <Pencil size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button className="text-zinc-400 hover:text-black transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ) : (

        /* --- VIEW 2: UPLOAD & ADD FORM --- */
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-10">
          
          {/* Left Side: Drag & Drop File Upload */}
          <div className="w-full md:w-1/3 flex flex-col space-y-3">
            <label className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Product Image</label>
            <div className="w-full aspect-square border-2 border-dashed border-zinc-300 rounded-2xl flex flex-col items-center justify-center bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer group relative overflow-hidden">
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                accept="image/png, image/jpeg, image/webp"
              />
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-5 h-5 text-zinc-500" />
              </div>
              <span className="text-sm font-bold text-zinc-700">Click or drag image</span>
              <span className="text-xs text-zinc-400 mt-1">High-res JPG/PNG</span>
            </div>
          </div>

          {/* Right Side: Form Inputs */}
          <div className="w-full md:w-2/3 flex flex-col space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Product Name</label>
                <input type="text" placeholder="e.g. NuPhy Halo75" className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Price (USD)</label>
                <input type="number" placeholder="e.g. 120" className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Category</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                  <option>Select a category...</option>
                  <option>Keyboards</option>
                  <option>Audio Gear</option>
                  <option>Desk Mats</option>
                  <option>Lighting</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Description / Vibe</label>
              <textarea rows="4" placeholder="Describe the aesthetic and specs..." className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-zinc-100">
              <button 
                onClick={() => setCurrentView('list')}
                className="px-6 py-2.5 rounded-full font-bold text-sm text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setCurrentView('list')}
                className="px-6 py-2.5 rounded-full font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              >
                Publish Gear
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
