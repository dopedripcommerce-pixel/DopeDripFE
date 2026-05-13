export default function AuthLayout({children}:{children:React.ReactNode}){
  return (
    <div style={{background:'#1E1E1E',minHeight:'85vh'}} className="flex items-center justify-center px-4 py-16">
      {children}
    </div>
  )
}
