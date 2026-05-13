'use client'
import { useState, useMemo } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/products'
import type { ProductCategory } from '@/types'

const SIZES = ['XS','S','M','L','XL','XXL']
const VIBES = ['Meme Culture','Vintage Retro','Streetwear','Minimal']
const SORT_OPTIONS = ['Trending','Price: Low to High','Price: High to Low','Newest First']

interface Props { initialCategory?: string }

export default function CollectionsClient({ initialCategory='all' }: Props) {
  const [selectedCats,  setSelectedCats]  = useState<string[]>(['Tees','Hoodies'])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedVibes, setSelectedVibes] = useState<string[]>([])
  const [sort,          setSort]          = useState('Trending')
  const [showFilters,   setShowFilters]   = useState(false)

  const filteredProducts = useMemo(() => {
    let list = initialCategory==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.category.toLowerCase()===initialCategory.toLowerCase())
    if (selectedCats.length)  list = list.filter(p=>selectedCats.includes(p.category))
    if (selectedVibes.length) list = list.filter(p=>selectedVibes.includes(p.vibe))
    if (sort==='Price: Low to High')  list = [...list].sort((a,b)=>a.price-b.price)
    if (sort==='Price: High to Low')  list = [...list].sort((a,b)=>b.price-a.price)
    if (sort==='Trending')            list = [...list].sort((a,b)=>(b.isTrending?1:0)-(a.isTrending?1:0))
    return list
  }, [initialCategory, selectedCats, selectedVibes, sort])

  function toggle<T>(arr: T[], setArr: (v:T[])=>void, val: T) {
    setArr(arr.includes(val) ? arr.filter(v=>v!==val) : [...arr, val])
  }

  return (
    <div style={{background:'#1E1E1E',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{background:'#141414',borderBottom:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-16 text-center">
        <h1 className="font-display text-7xl text-white tracking-[0.2em] uppercase">
          {initialCategory==='all' ? 'All Drops' : initialCategory}
        </h1>
        <p className="font-mono text-xs text-[#888] tracking-widest mt-2 uppercase">
          {filteredProducts.length} Products&nbsp;•&nbsp;
          <span style={{color:'#D4FF00'}}>Free Shipping above ₹999</span>
        </p>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside style={{background:'#141414',borderRight:'1px solid #2A2A2A',width:260}} className="hidden md:block shrink-0 p-6 self-start sticky top-16">
          <FilterPanel selectedCats={selectedCats} selectedSizes={selectedSizes} selectedVibes={selectedVibes}
            onToggleCat={v=>toggle(selectedCats,setSelectedCats,v as ProductCategory)}
            onToggleSize={v=>toggle(selectedSizes,setSelectedSizes,v)}
            onToggleVibe={v=>toggle(selectedVibes,setSelectedVibes,v)}/>
        </aside>

        <div className="flex-1 p-6 md:p-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#888]">Showing {filteredProducts.length} products</p>
            <div className="flex items-center gap-3">
              <button onClick={()=>setShowFilters(v=>!v)}
                style={{border:'1px solid #3A3A3A',background:'#2A2A2A'}}
                className="md:hidden flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white px-3 py-2">
                <SlidersHorizontal size={14}/> Filters
              </button>
              <select value={sort} onChange={e=>setSort(e.target.value)}
                style={{background:'#2A2A2A',border:'1px solid #3A3A3A',color:'white'}}
                className="font-mono text-xs tracking-widest px-3 py-2 focus:outline-none focus:border-[#D4FF00]">
                {SORT_OPTIONS.map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {showFilters && (
            <div style={{background:'#2A2A2A',border:'1px solid #3A3A3A'}} className="md:hidden p-5 mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="font-mono text-xs tracking-widest uppercase font-bold text-white">Filters</p>
                <button onClick={()=>setShowFilters(false)} className="text-[#888] hover:text-white"><X size={16}/></button>
              </div>
              <FilterPanel selectedCats={selectedCats} selectedSizes={selectedSizes} selectedVibes={selectedVibes}
                onToggleCat={v=>toggle(selectedCats,setSelectedCats,v as ProductCategory)}
                onToggleSize={v=>toggle(selectedSizes,setSelectedSizes,v)}
                onToggleVibe={v=>toggle(selectedVibes,setSelectedVibes,v)}/>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {filteredProducts.map(p=><ProductCard key={p.id} product={p}/>)}
          </div>

          {filteredProducts.length===0 && (
            <div className="text-center py-24">
              <p className="font-display text-4xl text-[#3A3A3A] tracking-widest mb-3">NO DROPS FOUND</p>
              <p className="text-[#888] text-sm">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface FilterPanelProps {
  selectedCats:  string[]; selectedSizes: string[]; selectedVibes: string[]
  onToggleCat:  (v:string)=>void; onToggleSize:(v:string)=>void; onToggleVibe:(v:string)=>void
}
function FilterPanel({selectedCats,selectedSizes,selectedVibes,onToggleCat,onToggleSize,onToggleVibe}:FilterPanelProps) {
  return (
    <div className="space-y-6">
      <FilterGroup title="Category">
        {['Tees','Hoodies'].map(c=>(
          <CheckOption key={c} label={c} checked={selectedCats.includes(c)} onChange={()=>onToggleCat(c)}/>
        ))}
      </FilterGroup>
      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2 mt-1">
          {SIZES.map(s=>(
            <button key={s} onClick={()=>onToggleSize(s)}
              style={{border:`1px solid ${selectedSizes.includes(s)?'#D4FF00':'#3A3A3A'}`,
                background:selectedSizes.includes(s)?'#D4FF00':'transparent',
                color:selectedSizes.includes(s)?'#1E1E1E':'white'}}
              className="px-3 py-1.5 font-mono text-xs transition-all duration-150">{s}</button>
          ))}
        </div>
      </FilterGroup>
      <FilterGroup title="Vibe">
        {VIBES.map(v=>(
          <CheckOption key={v} label={v} checked={selectedVibes.includes(v)} onChange={()=>onToggleVibe(v)}/>
        ))}
      </FilterGroup>
    </div>
  )
}
function FilterGroup({title,children}:{title:string;children:React.ReactNode}) {
  return (
    <div style={{borderBottom:'1px solid #2A2A2A'}} className="pb-5">
      <p className="font-mono text-xs tracking-widest uppercase font-bold text-white mb-3">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
function CheckOption({label,checked,onChange}:{label:string;checked:boolean;onChange:()=>void}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm text-[#ccc] hover:text-white transition-colors">
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-[#D4FF00]"/>
      {label}
    </label>
  )
}
