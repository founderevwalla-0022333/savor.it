"use client";

import React, { useState } from 'react';
import { X, UploadCloud } from 'lucide-react';

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please fill in Product Name and Price!");
      return;
    }

    // Invoke pure local state save callback
    if (onSave) {
      onSave({
        id: Date.now(),
        name,
        category: category || 'Gear',
        price: parseFloat(price) || 0,
        status: 'Live',
        image_url: imagePreview || ''
      });
    }

    // Reset Form
    setName('');
    setCategory('');
    setPrice('');
    setDesc('');
    setImagePreview('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end font-sans selection:bg-emerald-500 selection:text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Slide-over Panel */}
      <form onSubmit={handleSave} className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black text-zinc-900">Add New Gear</h2>
            <button type="button" onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            {/* File Upload Area */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Product Media</label>
              <div className="aspect-square border-2 border-dashed border-zinc-200 rounded-3xl flex flex-col items-center justify-center bg-zinc-50 cursor-pointer hover:border-black transition-all relative overflow-hidden group">
                <input 
                  type="file" 
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  accept="image/png, image/jpeg, image/webp"
                />
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0" />
                ) : (
                  <>
                    <UploadCloud className="text-zinc-400 mb-2 group-hover:scale-110 transition-transform" size={32} />
                    <span className="text-xs font-bold text-zinc-600">Click to Upload</span>
                  </>
                )}
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Product Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:border-black text-zinc-800" 
                required
              />
              <input 
                type="text" 
                placeholder="Category" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:border-black text-zinc-800" 
              />
              <input 
                type="number" 
                step="0.01"
                placeholder="Price ($)" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:border-black text-zinc-800" 
                required
              />
              <textarea 
                rows="3" 
                placeholder="Description/Vibe..." 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:border-black resize-none text-zinc-800"
              ></textarea>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white font-bold py-4 rounded-2xl active:scale-95 transition-transform mt-6 flex items-center justify-center space-x-2 shadow-md hover:bg-zinc-800"
        >
          <span>Save to Database</span>
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
