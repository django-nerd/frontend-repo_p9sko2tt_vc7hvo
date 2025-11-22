export default function Positioning() {
  const rows = [
    { brand: 'Ray-Ban', pricing: 'High', style: 'Classic', tech: 'Strong', comfort: 'Good', target: 'Premium' },
    { brand: 'Police', pricing: 'Mid-High', style: 'Edgy', tech: 'Moderate', comfort: 'Moderate', target: 'Youth' },
    { brand: 'Vogue', pricing: 'Mid-Low', style: 'Trendy', tech: 'Low', comfort: 'Low', target: 'Gen-Z' },
    { brand: 'Titan Eye+', pricing: 'Mid', style: 'Simple', tech: 'High', comfort: 'High', target: 'Mass' },
    { brand: 'Just Cavalli', pricing: 'High', style: 'Luxury', tech: 'Low', comfort: 'Moderate', target: 'Premium fashion' },
    { brand: 'NOVAGAZE', pricing: 'Mid', style: 'Bold + Modern', tech: 'High', comfort: 'Very High (memory-foam)', target: 'Gen Z + Young Professionals' },
  ]

  return (
    <section id="positioning" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Market Position</h2>
        <p className="text-gray-600 mt-2 mb-8">Between Vogue & Lenskart — affordable premium with a stronger identity.</p>

        <div className="overflow-x-auto rounded-xl border border-black/5 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left p-4 font-semibold">Brand</th>
                <th className="text-left p-4 font-semibold">Pricing</th>
                <th className="text-left p-4 font-semibold">Style</th>
                <th className="text-left p-4 font-semibold">Technology</th>
                <th className="text-left p-4 font-semibold">Comfort</th>
                <th className="text-left p-4 font-semibold">Target</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.brand} className="border-t border-black/5">
                  <td className={`p-4 font-semibold ${r.brand === 'NOVAGAZE' ? 'text-blue-600' : ''}`}>{r.brand}</td>
                  <td className="p-4">{r.pricing}</td>
                  <td className="p-4">{r.style}</td>
                  <td className="p-4">{r.tech}</td>
                  <td className="p-4">{r.comfort}</td>
                  <td className="p-4">{r.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
