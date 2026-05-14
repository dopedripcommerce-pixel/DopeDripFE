'use client'
import { useState, useMemo, useEffect } from 'react'
import { SlidersHorizontal, ChevronDown, Check, ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/products'
import type { ProductCategory } from '@/types'

const SIZES = ['XS','S','M','L','XL','XXL']
const ALL_VIBES = [...new Set(PRODUCTS.map(p => p.vibe))].sort()
const SORT_OPTIONS = ['Trending','Price: Low to High','Price: High to Low','Newest First']

function getCategoriesForSection(section: string) {
  if (section === 'men')   return ['Tees','Oversized Tees','Hoodies','Sweatshirts']
  if (section === 'women') return ['Tees','Oversized Tees','Hoodies','Sweatshirts','Crop Tops']
  return ['Tees','Oversized Tees','Hoodies','Sweatshirts','Crop Tops']
}

function applyFilters(initialCategory: string, cats: string[], sizes: string[], vibes: string[], sort: string) {
  let list = PRODUCTS
  if (initialCategory === 'men')        list = list.filter(p => p.gender === 'unisex' || p.gender === 'men')
  else if (initialCategory === 'women') list = list.filter(p => p.gender === 'unisex' || p.gender === 'women')
  else if (initialCategory !== 'all')   list = list.filter(p => p.category.toLowerCase() === initialCategory.toLowerCase())
  if (cats.length)  list = list.filter(p => cats.includes(p.category))
  if (sizes.length) list = list.filter(p => sizes.some(s => p.sizes.includes(s)))
  if (vibes.length) list = list.filter(p => vibes.includes(p.vibe))
  if (sort === 'Price: Low to High') list = [...list].sort((a,b) => a.price - b.price)
  if (sort === 'Price: High to Low') list = [...list].sort((a,b) => b.price - a.price)
  if (sort === 'Trending')           list = [...list].sort((a,b) => (b.isTrending?1:0) - (a.isTrending?1:0))
  return list
}

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
}

interface Props { initialCategory?: string }

export default function CollectionsClient({ initialCategory = 'all' }: Props) {
  // Committed filter state (what's actually applied to the product grid)
  const [selectedCats,  setSelectedCats]  = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedVibes, setSelectedVibes] = useState<string[]>([])
  const [sort, setSort] = useState('Trending')

  const [showFilterScreen, setShowFilterScreen] = useState(false)

  const availableCategories = getCategoriesForSection(initialCategory)
  const activeFilterCount   = selectedCats.length + selectedSizes.length + selectedVibes.length

  const filteredProducts = useMemo(
    () => applyFilters(initialCategory, selectedCats, selectedSizes, selectedVibes, sort),
    [initialCategory, selectedCats, selectedSizes, selectedVibes, sort]
  )

  function openFilterScreen() {
    setShowFilterScreen(true)
    history.pushState({ filterOpen: true }, '')
  }

  function closeFilterScreen() {
    setShowFilterScreen(false)
    if (history.state?.filterOpen) history.back()
  }

  function clearAllFilters() {
    setSelectedCats([])
    setSelectedSizes([])
    setSelectedVibes([])
  }

  useEffect(() => {
    document.body.style.overflow = showFilterScreen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showFilterScreen])

  useEffect(() => {
    function handlePopState() {
      if (showFilterScreen) setShowFilterScreen(false)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [showFilterScreen])

  const filterProps = {
    availableCategories,
    selectedCats, selectedSizes, selectedVibes,
    onToggleCat:  (v:string) => setSelectedCats(prev => toggle(prev, v as ProductCategory)),
    onToggleSize: (v:string) => setSelectedSizes(prev => toggle(prev, v)),
    onToggleVibe: (v:string) => setSelectedVibes(prev => toggle(prev, v)),
  }

  return (
    <div style={{background:'#1A1A1A', minHeight:'100vh'}}>

      {/* ── Mobile full-screen filter ── */}
      {showFilterScreen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col" style={{background:'#111'}}>

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-4 shrink-0"
            style={{borderBottom:'1px solid #1E1E1E', background:'#0D0D0D'}}>
            <button onClick={closeFilterScreen}
              className="flex items-center gap-2 text-[#888] active:text-white transition-colors">
              <ArrowLeft size={18}/>
              <span className="font-mono text-[11px] tracking-wider uppercase">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white font-bold">Filters</span>
              {activeFilterCount > 0 && (
                <span style={{background:'#D4FF00',color:'#111'}}
                  className="text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 ? (
              <button onClick={clearAllFilters}
                className="font-mono text-[10px] tracking-wider uppercase"
                style={{color:'#D4FF00'}}>
                Clear all
              </button>
            ) : (
              <div style={{width: 64}}/>
            )}
          </div>

          {/* Scrollable filter content */}
          <div className="flex-1 overflow-y-auto px-4">
            <FilterPanel {...filterProps}/>
          </div>

          {/* Bottom — done button */}
          <div className="px-4 pt-4 shrink-0"
            style={{
              borderTop:'1px solid #1E1E1E',
              background:'#0D0D0D',
              paddingBottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
            }}>
            <button
              onClick={closeFilterScreen}
              style={{background:'#D4FF00', color:'#111'}}
              className="w-full font-mono text-[12px] tracking-[0.25em] uppercase font-black py-4">
              View {filteredProducts.length} Result{filteredProducts.length !== 1 ? 's' : ''}
            </button>
          </div>
        </div>
      )}

      {/* Page header */}
      <div style={{background:'#111',borderBottom:'1px solid #222'}} className="px-6 md:px-16 py-14 md:py-16 text-center">
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#555] mb-3">Collection</p>
        <h1 className="font-display text-white tracking-tight uppercase leading-none"
          style={{fontSize:'clamp(2.8rem,8vw,6rem)'}}>
          {initialCategory === 'all' ? 'All Drops' : initialCategory}
        </h1>
        <p className="font-mono text-xs text-[#555] tracking-widest mt-3 uppercase">
          {filteredProducts.length} products&nbsp;·&nbsp;
          <span style={{color:'#D4FF00'}}>Free shipping above ₹999</span>
        </p>
      </div>

      <div className="flex">
        {/* ── Desktop Sidebar ── */}
        <aside
          style={{background:'#111',borderRight:'1px solid #222',width:268}}
          className="hidden md:flex shrink-0 flex-col self-start sticky top-16 h-[calc(100vh-64px)] overflow-y-auto"
        >
          <div className="px-5 pt-6 pb-2 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={13} color="#D4FF00"/>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white font-bold">Filters</span>
              {activeFilterCount > 0 && (
                <span style={{background:'#D4FF00',color:'#111'}}
                  className="text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button onClick={clearAllFilters}
                className="font-mono text-[10px] tracking-wider uppercase"
                style={{color:'#555'}}
                onMouseEnter={e => (e.currentTarget.style.color='#D4FF00')}
                onMouseLeave={e => (e.currentTarget.style.color='#555')}>
                Clear all
              </button>
            )}
          </div>
          <div className="px-4 pb-6 flex-1 overflow-y-auto">
            <FilterPanel {...filterProps}/>
          </div>
        </aside>

        {/* ── Product grid ── */}
        <div className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[11px] text-[#555]">
              {filteredProducts.length} results
              {activeFilterCount > 0 && (
                <span style={{color:'#D4FF00'}}> · {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''}</span>
              )}
            </p>
            <div className="flex items-center gap-2.5">
              <button
                onClick={openFilterScreen}
                style={{
                  border: `1px solid ${activeFilterCount > 0 ? '#D4FF00' : '#2E2E2E'}`,
                  background: activeFilterCount > 0 ? 'rgba(212,255,0,0.07)' : '#1A1A1A',
                  color: activeFilterCount > 0 ? '#D4FF00' : '#888',
                }}
                className="md:hidden flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-2 transition-all">
                <SlidersHorizontal size={12}/>
                Filters
                {activeFilterCount > 0 && (
                  <span style={{background:'#D4FF00',color:'#111'}}
                    className="text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{background:'#111',border:'1px solid #2E2E2E',color:'#aaa'}}
                className="font-mono text-[10px] tracking-wider px-3 py-2 focus:outline-none focus:border-[#D4FF00] transition-colors">
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Active filter pills — mobile */}
          {activeFilterCount > 0 && (
            <div className="md:hidden flex flex-wrap gap-1.5 mb-4">
              {[...selectedCats,...selectedSizes,...selectedVibes].map(tag => (
                <span key={tag}
                  style={{background:'rgba(212,255,0,0.08)',border:'1px solid rgba(212,255,0,0.2)',color:'#D4FF00'}}
                  className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              <button onClick={clearAllFilters}
                style={{border:'1px solid #2A2A2A',color:'#666'}}
                className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full">
                Clear all
              </button>
            </div>
          )}

          {/* Grid — 2 cols mobile, 3 desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {filteredProducts.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-4xl text-[#2E2E2E] tracking-widest mb-3">NO DROPS FOUND</p>
              <p className="text-[#555] font-mono text-xs tracking-wider">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Shared filter panel ───────────────────────────────────────────────────────

interface FilterPanelProps {
  availableCategories: string[]
  selectedCats: string[]; selectedSizes: string[]; selectedVibes: string[]
  onToggleCat:  (v:string) => void
  onToggleSize: (v:string) => void
  onToggleVibe: (v:string) => void
}

function FilterPanel({availableCategories,selectedCats,selectedSizes,selectedVibes,onToggleCat,onToggleSize,onToggleVibe}: FilterPanelProps) {
  return (
    <div>
      <CollapsibleSection title="Category" activeCount={selectedCats.length}>
        <div className="space-y-1 pb-3">
          {availableCategories.map(c => (
            <FilterChip key={c} label={c} checked={selectedCats.includes(c)} onChange={() => onToggleCat(c)}/>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Size" activeCount={selectedSizes.length}>
        <div className="flex flex-wrap gap-2 pb-4">
          {SIZES.map(s => (
            <button key={s} onClick={() => onToggleSize(s)}
              style={{
                border: `1px solid ${selectedSizes.includes(s) ? '#D4FF00' : '#2A2A2A'}`,
                background: selectedSizes.includes(s) ? '#D4FF00' : 'transparent',
                color: selectedSizes.includes(s) ? '#111' : '#888',
                minWidth: 48,
              }}
              className="py-2.5 font-mono text-[11px] font-bold transition-all duration-150">
              {s}
            </button>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Vibe" activeCount={selectedVibes.length}>
        <div className="space-y-1 pb-3">
          {ALL_VIBES.map(v => (
            <FilterChip key={v} label={v} checked={selectedVibes.includes(v)} onChange={() => onToggleVibe(v)}/>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  )
}

function CollapsibleSection({title, activeCount, children}: {title:string; activeCount:number; children:React.ReactNode}) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{borderBottom:'1px solid #1E1E1E'}}>
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white font-bold">{title}</span>
          {activeCount > 0 && (
            <span style={{background:'#D4FF00',color:'#111'}}
              className="text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown size={13} color="#444"
          style={{transform: open ? 'rotate(180deg)' : 'rotate(0)', transition:'transform 0.2s ease'}}/>
      </button>
      {open && children}
    </div>
  )
}

function FilterChip({label, checked, onChange}: {label:string; checked:boolean; onChange:()=>void}) {
  return (
    <button onClick={onChange}
      className="w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-150"
      style={{
        background: checked ? 'rgba(212,255,0,0.12)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${checked ? '#D4FF00' : '#222'}`,
      }}>
      <span className="font-mono text-[12px] font-medium" style={{color: checked ? '#D4FF00' : '#AAA'}}>{label}</span>
      <div style={{
        width: 18, height: 18, borderRadius: 5,
        background: checked ? '#D4FF00' : 'transparent',
        border: `1.5px solid ${checked ? '#D4FF00' : '#333'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {checked && <Check size={11} color="#111" strokeWidth={3}/>}
      </div>
    </button>
  )
}
